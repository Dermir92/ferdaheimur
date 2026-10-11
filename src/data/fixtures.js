// Invented LOCAL fixtures. These do not describe an agency's actual products.
// Homepage referrals deliberately avoid fabricated product/booking URLs.
import { agencies } from './agencies.js';
const rows = [
  ['algarve', 'heimsferdir', 'Vika við strendur Algarve', 'Algarve', 'Portúgal', 'sun', '2026-11-07', '2026-11-14', 189900, 'algarve', ['Flug', 'Gisting', 'Morgunmatur']],
  ['prague', 'aventura', 'Helgarferð til Prag', 'Prag', 'Tékkland', 'city', '2026-11-12', '2026-11-16', 159900, 'prague', ['Flug', 'Gisting', 'Morgunmatur']],
  ['tenerife', 'heimsferdir', 'Vetrarsól á Tenerife', 'Tenerife', 'Spánn', 'sun', '2026-11-18', '2026-11-25', 219900, 'tenerife', ['Flug', 'Gisting', 'Taska']],
  ['budapest', 'fararsnid', 'Menning og mannlíf í Búdapest', 'Búdapest', 'Ungverjaland', 'culture', '2026-12-03', '2026-12-08', 269900, 'budapest', ['Flug', 'Gisting og morgunmatur', 'Íslensk fararstjórn']],
  ['walking', 'fararsnid', 'Göngudagar á Tenerife', 'Tenerife', 'Spánn', 'active', '2027-02-15', '2027-02-22', 309900, 'tenerife', ['Flug', 'Gisting', 'Gönguleiðsögn']],
  ['long', 'sumarferdir', 'Tvær vikur í sólinni', 'Algarve', 'Portúgal', 'sun', '2027-03-02', '2027-03-16', 279900, 'algarve', ['Flug', 'Gisting']],
];
export function getFixtures() {
  return rows.map(([id, agencyId, title, destination, country, category, startDate, endDate, amount, image, inclusions]) => ({
    id: `fixture-${id}`, agencyId, title, destination, country, category, startDate, endDate,
    nights: Math.round((Date.parse(endDate)-Date.parse(startDate))/86400000), durationDays: null, image, inclusions, availability: 'unknown',
    price: { amount, currency: 'ISK', unit: 'person', occupancy: 'double', type: 'from', basis: 'Á mann í tvíbýli', comparisonKey: 'ISK-person-double-package' },
    outboundUrl: agencies.find(a => a.id === agencyId).url,
    provenance: { kind: 'fixture', invented: true, publicationPermission: 'local-only', referral: 'agency-homepage', note: 'Tilbúið dæmi til að prófa viðmót; ekki raunverulegt tilboð seljanda.' },
  }));
}
