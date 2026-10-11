import { normalizeSurvey } from './adapters/survey.js';
import { getFixtures } from './fixtures.js';
import { agencies } from './agencies.js';

export function validateTrips(trips) {
  const ids = new Set();
  for (const trip of trips) {
    if (ids.has(trip.id)) throw new Error('Duplicate trip ID');
    ids.add(trip.id);
    if (!agencies.some(a => a.id === trip.agencyId)) throw new Error('Unknown agency');
    const url = new URL(trip.outboundUrl);
    const agency = agencies.find(a => a.id === trip.agencyId);
    if (url.protocol !== 'https:' || url.username || url.password || url.hostname.replace(/^www\./,'') !== new URL(agency.url).hostname.replace(/^www\./,'')) throw new Error('Invalid referral URL');
    if (trip.price.amount !== null && (!Number.isFinite(trip.price.amount) || trip.price.amount < 0)) throw new Error('Invalid price');
  }
  return trips;
}

// Replace or add providers here. UI consumes only the normalized Trip contract.
export async function loadTrips({ signal } = {}) {
  const response = await fetch('/src/data/survey-samples.json', { signal });
  if (!response.ok) throw new Error('Ekki tókst að sækja ferðir.');
  const samples = await response.json();
  return validateTrips([...normalizeSurvey(samples), ...getFixtures()]);
}
