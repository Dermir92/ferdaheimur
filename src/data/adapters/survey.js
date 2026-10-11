// Adapters preserve source-specific uncertainty. No network collection runs in the UI.
const evidence = (record, extra = {}) => ({ kind: 'survey', sourceUrl: record.source_url, retrievedAt: record.retrieved_at, publicationPermission: 'pending', ...extra });
const base = { availability: 'unknown', image: null, nights: null, durationDays: null, startDate: null, endDate: null, inclusions: [], price: { amount: null, currency: null, unit: null, occupancy: null, comparisonKey: null } };
export function normalizeSurvey(samples) {
  const b = samples.baendaferdir, c = samples.aventura_city, a = samples.aventura_offer, s = samples.sumarferdir;
  const raw = a.raw_fields;
  return [
    { ...base, id: 'survey-baenda-prague', agencyId: 'baendaferdir', title: b.name, destination: 'Prag og Brno', country: b.country, category: 'culture', categoryInferred: true,
      startDate: b.departure, endDate: b.return, durationDays: b.duration_days, nights: 7, nightsDerived: true, image: 'prague', inclusions: b.included,
      price: { amount: b.price_isk, currency: 'ISK', type: 'advertised', unit: 'person', occupancy: 'double', singleSupplement: b.single_supplement_isk, basis: 'Á mann í tvíbýli', comparisonKey: 'ISK-person-double-package' },
      outboundUrl: b.source_url, provenance: evidence(b) },
    { ...base, id: 'survey-aventura-budapest', agencyId: 'aventura', title: c.tour.title, destination: 'Búdapest', country: null, category: 'city', categoryInferred: true,
      startDate: c.departure.startDate.slice(0,10), endDate: c.departure.endDate.slice(0,10), nights: 3, nightsDerived: true, image: 'budapest', inclusions: [c.tour.info1], outboundUrl: c.tour.buttonUrl,
      provenance: evidence(c, { rawAvailability: c.departure.availability, rawTour: c.tour, rawDeparture: c.departure }) },
    { ...base, id: 'survey-aventura-tenerife', agencyId: 'aventura', title: raw.name, destination: raw.dest, country: null, category: 'sun', categoryInferred: true,
      startDate: raw.date_from, endDate: raw.date_to, nights: Number(raw.nights), image: null, inclusions: ['Gisting'],
      price: { amount: Number(raw.price_num), currency: 'ISK', type: 'from', unit: 'person', occupancy: null, basis: 'Á mann · herbergi fyrir 2 fullorðna', note: 'Aðeins herbergi; máltíðir ekki innifaldar. Aðrar verðforsendur liggja ekki fyrir.', comparisonKey: null },
      outboundUrl: raw.hotel_search_url, provenance: evidence(a, { rawFields: raw, interpretation: 'ISK og eining á mann samkvæmt birtingarreglu forsíðu; tóm farþegasvið varðveitt. Verð ekki sjálfstætt staðfest.' }) },
    { ...base, id: 'survey-sumar-tenerife', agencyId: 'sumarferdir', title: 'Tenerife fyrir 2', destination: 'Tenerife', country: null, category: 'sun', categoryInferred: true,
      startDate: s.departure, endDate: s.return, nights: s.nights, image: 'tenerife', inclusions: s.included,
      price: { amount: s.price_amount, currency: s.currency, type: 'from', unit: null, occupancy: null, basis: 'Verðeining ekki tilgreind', note: 'Ekki staðfest hvort verðið er á mann eða fyrir tvo, eða hvort frá-verðið á við þessar dagsetningar.', comparisonKey: null },
      outboundUrl: s.search_link, provenance: evidence(s, { datesFrom: 'search_link' }) },
  ];
}
