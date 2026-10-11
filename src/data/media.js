// Project-owned ImageGen illustrations, not documentary photos or hotel images.
// Explicit matching prevents accidental reuse for another destination.
export const media = {
  tenerife: { destinations:['Tenerife'], alt:'Myndskreyting innblásin af ströndum Tenerife', source:'imagegen', usage:'destination-illustration' },
  prague: { destinations:['Prag','Prag og Brno'], alt:'Myndskreyting af Prag og Karlsbrúnni', source:'imagegen', usage:'destination-illustration' },
  budapest: { destinations:['Búdapest'], alt:'Myndskreyting af Búdapest við Dóná', source:'imagegen', usage:'destination-illustration' },
  algarve: { destinations:['Algarve'], alt:'Myndskreyting innblásin af klettaströndum Algarve', source:'imagegen', usage:'destination-illustration' },
};
export function tripMedia(trip) {
  const asset = media[trip.image];
  return asset?.destinations.includes(trip.destination) ? { ...asset, path:`/public/images/${trip.image}.png` } : null;
}
