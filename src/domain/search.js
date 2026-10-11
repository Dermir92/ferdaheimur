export const normalizeText = value => value.toLocaleLowerCase('is').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ð/g, 'd').replace(/þ/g, 'th');
export const defaultFilters = { q: '', period: '', category: '', agency: '', duration: '', sort: 'departure' };
// Every entry point changes only the fields it owns. Reset is always explicit.
export const mergeFilters = (current, changes) => ({ ...current, ...changes });
export const broadenFilters = current => ({ ...defaultFilters, q: current.q });
export function readFilters(search = '') {
  const params = new URLSearchParams(search);
  const filters = Object.fromEntries(Object.entries(defaultFilters).map(([key, fallback]) => [key, params.get(key) || fallback]));
  if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(filters.period)) filters.period = '';
  if (!['','sun','city','culture','active'].includes(filters.category)) filters.category = '';
  if (!['','aventura','baendaferdir','sumarferdir','heimsferdir','fararsnid'].includes(filters.agency)) filters.agency = '';
  if (!['','short','week','long'].includes(filters.duration)) filters.duration = '';
  if (!['departure','price-asc','price-desc'].includes(filters.sort)) filters.sort = 'departure';
  return filters;
}
export function filterTrips(trips, filters) {
  const query = normalizeText(filters.q.trim());
  return trips.filter(t => (!query || normalizeText(`${t.title} ${t.destination} ${t.country || ''}`).includes(query))
    && (!filters.period || t.startDate?.startsWith(filters.period))
    && (!filters.category || t.category === filters.category)
    && (!filters.agency || t.agencyId === filters.agency)
    && (!filters.duration || (t.nights !== null && (filters.duration === 'short' ? t.nights <= 4 : filters.duration === 'week' ? t.nights >= 5 && t.nights <= 9 : t.nights >= 10))));
}
export const isComparable = trip => trip.price.comparisonKey === 'ISK-person-double-package'
  && trip.price.currency === 'ISK' && trip.price.unit === 'person' && trip.price.occupancy === 'double'
  && Number.isFinite(trip.price.amount);
export function searchTrips(trips, filters) {
  let result = filterTrips(trips, filters);
  if (filters.sort.startsWith('price')) {
    // Explicit comparison mode: exclude unknown units and incomplete conditions.
    result = result.filter(isComparable).sort((a,b) => (a.price.amount-b.price.amount) * (filters.sort === 'price-desc' ? -1 : 1) || (a.startDate || '9999').localeCompare(b.startDate || '9999'));
  } else result.sort((a,b) => (a.startDate || '9999').localeCompare(b.startDate || '9999'));
  return result;
}
export function filtersToSearch(filters) {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(filters)) if (value && value !== defaultFilters[key]) params.set(key, value);
  return params.toString() ? `?${params}` : '';
}
