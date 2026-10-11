import { agencies, categories } from '../data/agencies.js';
import { icon } from './icons.js';
import { formatAmount, shortDate } from '../domain/format.js';
import { tripMedia } from '../data/media.js';
export const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
export function dateRange(trip) {
  if (!trip.startDate) return 'Dagsetningar ekki tilgreindar';
  const year = trip.startDate.slice(0,4);
  if (!trip.endDate) return `${shortDate(trip.startDate)} ${year} · Heimkoma ekki tilgreind`;
  const startYear = year === trip.endDate.slice(0,4) ? '' : ` ${year}`;
  return `${shortDate(trip.startDate)}${startYear} – ${shortDate(trip.endDate)} ${trip.endDate.slice(0,4)}`;
}
export function tripCard(trip) {
  const agency = agencies.find(a => a.id === trip.agencyId);
  const category = categories.find(c => c.id === trip.category);
  const p = trip.price;
  const asset = tripMedia(trip);
  const isFixture = trip.provenance.kind === 'fixture';
  const cta = isFixture ? `Skoða vef ${agency.genitive || agency.name}` : `Skoða ferð hjá ${agency.dative || agency.name}`;
  const hasPrice = p.amount !== null;
  const price = hasPrice ? `${formatAmount(p.amount)}${p.currency === 'ISK' ? ' kr.' : ` ${escapeHtml(p.currency || '· gjaldmiðill ótilgreindur')}`}` : 'Verð ekki tilgreint';
  const inclusions = trip.inclusions.length ? trip.inclusions.slice(0,3).map(item => `<li>${icon('check')} ${escapeHtml(item)}</li>`).join('') : '<li class="muted">Innifalið ekki tilgreint</li>';
  const detailItems = [p.note, p.singleSupplement ? `Einbýlisálag: ${formatAmount(p.singleSupplement)} kr.` : '', trip.inclusions.length > 3 ? `Einnig innifalið: ${trip.inclusions.slice(3).join(', ')}.` : ''].filter(Boolean);
  return `<article class="trip-card" data-trip-id="${escapeHtml(trip.id)}">
    <div class="card-image-wrap">${asset ? `<img class="card-image" src="${asset.path}" alt="${escapeHtml(asset.alt)}" loading="lazy" decoding="async">` : `<div class="image-fallback">${icon('globe')}<span>${escapeHtml(trip.destination)}</span></div>`}<span class="category-badge">${icon(category?.icon)} ${escapeHtml(category?.label || 'Ferð')}</span></div>
    <div class="card-content"><div class="card-agency"><span class="agency-dot ${escapeHtml(agency.id)}"></span>${escapeHtml(agency.name)}<span class="card-destination">${escapeHtml(trip.destination)}</span></div>
    <h3>${escapeHtml(trip.title)}</h3><div class="trip-meta"><span>${icon('calendar')} ${escapeHtml(dateRange(trip))}</span><span>${icon('moon')} ${trip.nights !== null ? `${trip.nights} ${trip.nights === 1 ? 'nótt' : 'nætur'}` : trip.durationDays !== null ? `${trip.durationDays} ${trip.durationDays === 1 ? 'dagur' : 'dagar'}` : 'Lengd ótilgreind'}</span></div>
    <ul class="inclusions" aria-label="Helstu inniföldu atriði">${inclusions}</ul>
    <div class="card-price"><div><span class="price-kicker">${hasPrice ? p.type === 'from' ? 'Auglýst frá-verð' : 'Auglýst verð' : 'Nánar hjá ferðaskrifstofu'}</span><p class="price ${hasPrice ? '' : 'price-unknown'}">${price}</p><span class="price-basis">${escapeHtml(hasPrice ? p.basis || 'Verðforsendur ekki tilgreindar' : 'Sjá upplýsingar hjá seljanda')}</span></div></div>
    <div class="card-extra">${detailItems.length ? `<details class="price-details"><summary>Verðforsendur og nánar</summary><p>${detailItems.map(escapeHtml).join(' ')}</p></details>` : ''}</div>
    <a class="card-cta" href="${escapeHtml(trip.outboundUrl)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(cta)} (opnast í nýjum flipa)">${escapeHtml(cta)} ${icon('external')}</a>
    </div></article>`;
}
