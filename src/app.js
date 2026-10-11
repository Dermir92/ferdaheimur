import { loadTrips } from './data/repository.js';
import { agencies, categories } from './data/agencies.js';
import { defaultFilters, readFilters, filtersToSearch, filterTrips, searchTrips, mergeFilters, broadenFilters } from './domain/search.js';
import { tripCard, escapeHtml } from './ui/trip-card.js';
import { icon, hydrateIcons } from './ui/icons.js';
import { formatMonth } from './domain/format.js';

const $ = selector => document.querySelector(selector);
let trips = [], filters = readFilters(location.search), loading = true, hasError = false;
const fields = ['q', 'period', 'category', 'agency', 'duration', 'sort'];
const control = key => key === 'q' ? $('#destination') : $(`#${key}`);

function initializeControls() {
  $('#category').insertAdjacentHTML('beforeend', categories.map(c => `<option value="${c.id}">${c.label}</option>`).join(''));
  $('#agency').insertAdjacentHTML('beforeend', agencies.map(a => `<option value="${a.id}">${a.name}</option>`).join(''));
  $('.category-tabs').insertAdjacentHTML('beforeend', categories.map(c => `<button type="button" class="category-tab" data-category="${c.id}">${icon(c.icon)} ${c.label}</button>`).join(''));
  hydrateIcons();
  syncControls();
}
function syncControls() {
  fields.forEach(key => { control(key).value = filters[key]; });
  document.querySelectorAll('[data-category]').forEach(button => { const selected = button.dataset.category === filters.category; button.classList.toggle('active', selected); button.setAttribute('aria-pressed', String(selected)); });
}
function updateUrl(push = true) {
  const url = `${location.pathname}${filtersToSearch(filters)}${location.hash}`;
  if (`${location.pathname}${location.search}${location.hash}` !== url) history[push ? 'pushState' : 'replaceState']({}, '', url);
}
function focusResults({ scroll = false } = {}) {
  $('#travel-heading').focus({ preventScroll:true });
  if (scroll) $('#ferdir').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block:'start' });
}
function setFilters(next, { scroll = false, replace = false, focus = false } = {}) {
  filters = mergeFilters(filters, next); syncControls(); updateUrl(!replace); render();
  if (scroll || focus) focusResults({ scroll });
}
function resetFilters() { setFilters({ ...defaultFilters }, { focus:true }); }
function render() {
  if (loading || hasError) return;
  const matching = filterTrips(trips, filters), result = searchTrips(trips, filters);
  $('#trip-grid').innerHTML = result.map(tripCard).join('');
  $('#trip-grid').setAttribute('aria-busy', 'false');
  $('#empty-state').hidden = result.length > 0;
  const broader = searchTrips(trips, broadenFilters(filters));
  $('#empty-broaden').hidden = result.length > 0 || broader.length === 0;
  $('#empty-broaden').textContent = `Víkka leit${filters.q ? ` að ${filters.q}` : ''} (${broader.length} ${broader.length === 1 ? 'ferð' : 'ferðir'})`;
  $('#empty-message').textContent = matching.length && filters.sort.startsWith('price')
    ? 'Ferðir fundust, en verðforsendur þeirra duga ekki fyrir þessa verðröðun. Víkkaðu leitina eða raðaðu eftir brottför.'
    : 'Engin ferð passar við öll leitarskilyrðin. Prófaðu víðara tímabil, færri síur eða annan áfangastað.';
  $('#result-count').innerHTML = `<strong>${result.length}</strong> ${result.length === 1 ? 'ferð' : 'ferðir'} ${fields.slice(0,5).some(k => filters[k]) ? `${result.length === 1 ? 'passar' : 'passa'} við leitina þína` : 'til að láta sig dreyma um'}`;
  const priceSort = filters.sort.startsWith('price');
  $('#comparison-notice').hidden = !priceSort;
  const excluded = matching.length - result.length;
  $('#excluded-count').textContent = `${excluded} ${excluded === 1 ? 'ferð' : 'ferðir'}`;
  const selected = fields.slice(0,5).filter(key => filters[key]);
  $('#filter-count').hidden = selected.length === 0; $('#filter-count').textContent = selected.length;
  $('#clear-filters').hidden = selected.length === 0 && filters.sort === 'departure';
  const labels = { q: filters.q, period: filters.period ? formatMonth(filters.period) : '', category: categories.find(c => c.id === filters.category)?.label, agency: agencies.find(a => a.id === filters.agency)?.name, duration: control('duration').selectedOptions[0]?.textContent };
  $('#active-filters').innerHTML = selected.map(key => `<button type="button" class="filter-chip" data-remove-filter="${key}" aria-label="Fjarlægja síu: ${escapeHtml(labels[key])}">${escapeHtml(labels[key])} ${icon('close')}</button>`).join('');
}
async function fetchTrips() {
  loading = true; hasError = false; $('#error-state').hidden = true; $('#empty-state').hidden = true;
  $('#trip-grid').setAttribute('aria-busy', 'true'); $('#result-count').textContent = 'Sækjum ferðir…';
  $('#trip-grid').innerHTML = Array.from({ length:3 }, () => '<div class="skeleton" aria-hidden="true"><div></div><span></span><span></span><span></span></div>').join('');
  try {
    trips = await loadTrips();
    const periods = [...new Set(trips.map(t => t.startDate?.slice(0,7)).filter(Boolean))].sort();
    // Keep a selected URL month even when it has no trips; it must yield a truthful empty state.
    if (filters.period && /^\d{4}-(0[1-9]|1[0-2])$/.test(filters.period) && !periods.includes(filters.period)) periods.push(filters.period);
    $('#period').innerHTML = '<option value="">Öll tímabil</option>' + periods.sort().map(p => `<option value="${p}">${formatMonth(p)}</option>`).join('');
    $('#destinations').innerHTML = [...new Set(trips.flatMap(t => [t.destination, t.country]).filter(Boolean))].map(d => `<option value="${escapeHtml(d)}"></option>`).join('');
    fields.filter(k => k !== 'q').forEach(k => { if (![...control(k).options].some(o => o.value === filters[k])) filters[k] = defaultFilters[k]; });
    loading = false; syncControls(); updateUrl(false); render();
  } catch {
    loading = false; hasError = true; $('#trip-grid').innerHTML = ''; $('#trip-grid').setAttribute('aria-busy','false'); $('#error-state').hidden = false; $('#result-count').textContent = 'Ekki tókst að sækja ferðir';
  }
}

initializeControls();
$('#search-form').addEventListener('submit', event => { event.preventDefault(); setFilters({ q: control('q').value.trim(), period: control('period').value, category: control('category').value }, { scroll:true }); });
// Live controls share one committed state with the result filters. Typing replaces
// the current URL rather than creating a browser-history entry for each letter.
control('q').addEventListener('input', () => setFilters({ q:control('q').value }, { replace:true }));
['period','category'].forEach(key => control(key).addEventListener('change', () => setFilters({ [key]:control(key).value })));
['agency','duration','sort'].forEach(key => control(key).addEventListener('change', () => setFilters({ [key]:control(key).value })));
$('.category-tabs').addEventListener('click', event => { const button = event.target.closest('[data-category]'); if (button) setFilters({ category:button.dataset.category }); });
$('#active-filters').addEventListener('click', event => { const button = event.target.closest('[data-remove-filter]'); if (button) setFilters({ [button.dataset.removeFilter]:'' }, { focus:true }); });
$('#clear-filters').addEventListener('click', resetFilters);
$('#empty-reset').addEventListener('click', resetFilters);
$('#empty-broaden').addEventListener('click', () => setFilters(broadenFilters(filters), { focus:true }));
$('#retry').addEventListener('click', fetchTrips);
$('#filter-toggle').addEventListener('click', () => { const open = $('#filter-toggle').getAttribute('aria-expanded') !== 'true'; $('#filter-toggle').setAttribute('aria-expanded', String(open)); $('#extra-filters').classList.toggle('expanded', open); });
document.querySelectorAll('[data-destination]').forEach(button => button.addEventListener('click', () => setFilters({ q: button.dataset.destination }, { scroll:true })));
window.addEventListener('popstate', () => { filters = readFilters(location.search); syncControls(); render(); });
const dialog = $('#info-dialog');
document.querySelectorAll('[data-open-info]').forEach(button => button.addEventListener('click', () => dialog.showModal()));
document.querySelectorAll('[data-close-dialog]').forEach(button => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
fetchTrips();
