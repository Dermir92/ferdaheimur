import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { normalizeSurvey } from '../src/data/adapters/survey.js';
import { getFixtures } from '../src/data/fixtures.js';
import { validateTrips, loadTrips } from '../src/data/repository.js';
import { defaultFilters, searchTrips, readFilters, filtersToSearch, mergeFilters, broadenFilters } from '../src/domain/search.js';
import { tripMedia } from '../src/data/media.js';
import { tripCard, dateRange } from '../src/ui/trip-card.js';
import { formatAmount, formatMonth } from '../src/domain/format.js';
const samples = JSON.parse(await readFile(new URL('../src/data/survey-samples.json',import.meta.url),'utf8'));
const original = JSON.parse(await readFile(new URL('../docs/ferdagogn-konnun-synishorn.json',import.meta.url),'utf8'));
const survey = normalizeSurvey(samples), trips = [...survey,...getFixtures()];
const find = id => survey.find(t => t.id === id);

test('four survey records preserve amounts, unknown units, dates and exact referral links', () => {
  const sum = find('survey-sumar-tenerife'), a = find('survey-aventura-tenerife'), city = find('survey-aventura-budapest'), b = find('survey-baenda-prague');
  assert.equal(sum.price.amount, original.examples.sumarferdir.extracted_facts.price_amount);
  assert.equal(sum.price.unit, null); assert.equal(sum.price.occupancy, null); assert.equal(sum.price.comparisonKey, null);
  assert.equal(sum.outboundUrl, original.examples.sumarferdir.extracted_facts.search_link);
  assert.equal(a.price.amount, Number(original.examples.aventura_offer.raw_fields.price_num));
  assert.equal(a.price.unit,'person'); assert.equal(a.price.comparisonKey,null);
  assert.equal(a.provenance.rawFields.currency, ''); assert.equal(a.provenance.rawFields.adults, '');
  assert.equal(a.outboundUrl,original.examples.aventura_offer.raw_fields.hotel_search_url);
  assert.equal(city.price.amount,null); assert.equal(city.startDate,'2026-10-22');
  assert.equal(city.outboundUrl,original.examples.aventura_city.tour.buttonUrl);
  assert.equal(city.provenance.rawDeparture.bookingUrl,original.examples.aventura_city.departure.bookingUrl);
  assert.equal(b.price.amount,329900); assert.equal(b.price.singleSupplement,86900); assert.equal(b.durationDays,8);
});
test('advertisements and available source flags never become confirmed inventory', () => {
  assert.equal(find('survey-aventura-budapest').provenance.rawAvailability,'available');
  assert.ok(trips.every(t => t.availability === 'unknown'));
  assert.ok(survey.every(t => t.provenance.kind === 'survey' && t.provenance.publicationPermission === 'pending'));
});
test('invented records are identifiable and use homepage referrals', () => {
  assert.equal(getFixtures().length,6);
  assert.ok(getFixtures().every(t => t.provenance.invented && t.provenance.kind === 'fixture' && t.provenance.referral === 'agency-homepage'));
});
test('search combines destination, month, category, agency and nights', () => {
  const found = searchTrips(trips,{ ...defaultFilters, q:'tenerife', period:'2026-11',category:'sun',agency:'heimsferdir',duration:'week' });
  assert.deepEqual(found.map(t => t.id),['fixture-tenerife']);
});
test('Icelandic accents, case and country search are supported', () => {
  assert.equal(searchTrips(trips,{...defaultFilters,q:'BUDAPEST'}).length,2);
  assert.equal(searchTrips(trips,{...defaultFilters,q:'tékkland'}).length,2);
});
test('price sorting excludes missing prices and unknown or incomplete bases', () => {
  const asc = searchTrips(trips,{...defaultFilters,sort:'price-asc'});
  assert.equal(asc.length,7); assert.equal(asc[0].price.amount,159900);
  assert.ok(asc.every(t => t.price.unit === 'person' && t.price.occupancy === 'double'));
  assert.ok(!asc.some(t => ['survey-sumar-tenerife','survey-aventura-tenerife','survey-aventura-budapest'].includes(t.id)));
  const desc = searchTrips(trips,{...defaultFilters,sort:'price-desc'});
  assert.deepEqual(desc.map(t => t.id),asc.map(t => t.id).reverse());
});
test('departure sort orders across years and places unknown dates last', () => {
  const missing = {...trips[0], id:'missing-date',startDate:null};
  const sorted = searchTrips([...trips,missing],defaultFilters);
  assert.equal(sorted[0].id,'survey-aventura-tenerife'); assert.equal(sorted.at(-1).id,'missing-date');
  assert.equal(sorted.at(-2).id,'survey-baenda-prague');
});
test('duration boundaries and unknown lengths remain truthful', () => {
  const f = {...trips[0],nights:null};
  assert.equal(searchTrips([f],{...defaultFilters,duration:'week'}).length,0);
  assert.equal(searchTrips(trips,{...defaultFilters,duration:'short'}).length,2);
  assert.equal(searchTrips(trips,{...defaultFilters,duration:'long'}).length,1);
});
test('unmatched search and price comparison with no comparable records are empty', () => {
  assert.equal(searchTrips(trips,{...defaultFilters,q:'Japan'}).length,0);
  assert.equal(searchTrips(survey.slice(1),{...defaultFilters,sort:'price-asc'}).length,0);
});
test('filter URL round trips and malformed parameters are harmless', () => {
  const f = {...defaultFilters,q:'Prag og Brno',period:'2027-05',category:'culture',agency:'baendaferdir',duration:'week',sort:'price-asc'};
  assert.deepEqual(readFilters(filtersToSearch(f)),f);
  assert.deepEqual(readFilters('?period=bad&category=evil&agency=wrong&duration=no&sort=broken'),defaultFilters);
});
test('formatting is Icelandic independent of browser locale data', () => {
  assert.equal(formatAmount(247200),'247.200'); assert.equal(formatMonth('2026-10'),'október 2026');
  assert.equal(dateRange(trips[0]),'3. maí – 10. maí 2027');
  assert.equal(dateRange({...trips[0],startDate:'2026-12-30',endDate:'2027-01-04'}),'30. des. 2026 – 4. jan. 2027');
});
test('cards safely render absent price, image, inclusions and dates', () => {
  const card = tripCard({...trips[1],image:null,startDate:null,endDate:null,nights:null,inclusions:[]});
  assert.match(card,/Verð ekki tilgreint/); assert.match(card,/Dagsetningar ekki tilgreindar/);
  assert.match(card,/Innifalið ekki tilgreint/); assert.match(card,/Lengd ótilgreind/); assert.match(card,/image-fallback/);
  assert.doesNotMatch(card,/undefined|NaN|null/);
});
test('provider content is escaped and links open safely', () => {
  const card = tripCard({...trips[0],title:'<script>alert("x")</script>'});
  assert.doesNotMatch(card,/<script>/); assert.match(card,/&lt;script&gt;/);
  assert.match(card,/target="_blank" rel="noopener noreferrer"/);
});
test('repository rejects duplicate records, invalid prices and off-provider links', () => {
  assert.equal(validateTrips(trips).length,10);
  assert.throws(() => validateTrips([trips[0],trips[0]]),/Duplicate/);
  assert.throws(() => validateTrips([{...trips[0],outboundUrl:'https://example.com/'}]),/Invalid referral/);
  assert.throws(() => validateTrips([{...trips[0],price:{...trips[0].price,amount:NaN}}]),/Invalid price/);
});
test('repository exposes normalized records and propagates load failures for retry UI', async t => {
  t.mock.method(globalThis,'fetch',async () => ({ok:true,json:async () => samples}));
  assert.equal((await loadTrips()).length,10);
  globalThis.fetch = async () => ({ok:false});
  await assert.rejects(loadTrips(),/Ekki tókst/);
});

test('changing destination or category preserves every other selected filter', () => {
  const selected = {...defaultFilters,q:'Prag',period:'2026-11',category:'city',agency:'aventura',duration:'short',sort:'price-desc'};
  assert.deepEqual(mergeFilters(selected,{q:'Búdapest'}),{...selected,q:'Búdapest'});
  assert.deepEqual(mergeFilters(selected,{category:'culture'}),{...selected,category:'culture'});
  assert.deepEqual(mergeFilters(selected,{period:'2027-05'}),{...selected,period:'2027-05'});
});
test('broadening a restrictive search keeps destination and restores matching trips', () => {
  const restrictive = {...defaultFilters,q:'Tenerife',period:'2026-11',agency:'aventura',duration:'short',category:'culture',sort:'price-desc'};
  assert.equal(searchTrips(trips,restrictive).length,0);
  assert.equal(searchTrips(trips,broadenFilters(restrictive)).length,4);
  assert.equal(broadenFilters(restrictive).q,'Tenerife');
});
test('unknown or mismatched imagery uses a neutral fallback', () => {
  assert.equal(tripMedia({...trips[0],image:'unverified-image'}),null);
  assert.equal(tripMedia({...trips[0],image:'algarve'}),null);
  assert.equal(find('survey-aventura-tenerife').image,null);
  assert.match(tripCard({...trips[0],image:'algarve'}),/image-fallback/);
  assert.match(tripMedia(trips[0]).alt,/Prag/);
});
test('fixture links identify agency websites and never pretend to be product pages', () => {
  for (const trip of getFixtures()) {
    const card = tripCard(trip);
    assert.match(card,/Skoða vef /);
    assert.doesNotMatch(card,/Skoða ferð hjá/);
    assert.equal(new URL(trip.outboundUrl).pathname,'/');
  }
  assert.match(tripCard(find('survey-baenda-prague')),/Skoða ferð hjá Bændaferðum/);
});
