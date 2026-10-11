# Gagnalag Ferðaheims

## Samræmt Trip-líkan

```ts
type Trip = {
  id: string;                 // Stöðugt, einkvæmt milli gagnagjafa.
  agencyId: string;           // Söluheiti í agencies.js; operator geymdur sér.
  title: string;
  destination: string;
  country: string | null;
  category: 'sun' | 'city' | 'culture' | 'active' | null;
  categoryInferred?: boolean;
  startDate: string | null;   // YYYY-MM-DD, enginn staðfestur flugtími.
  endDate: string | null;
  nights: number | null;
  nightsDerived?: boolean;
  durationDays: number | null;// Ekki jafngilt nóttum.
  image: string | null;       // Verkefnismynd, ekki mynd úr ferðaskrifstofugögnum.
  inclusions: string[];       // Aðeins þekkt atriði; tómt merkir ótilgreint.
  availability: 'unknown';    // Auglýsing gefur ekki staðfest sætaframboð.
  outboundUrl: string;        // Upprunalegur HTTPS-hlekkur til seljanda.
  price: {
    amount: number | null;
    currency: string | null;
    type?: 'from' | 'advertised';
    unit: 'person' | 'group' | 'room' | null;
    occupancy: 'double' | null;
    basis?: string;
    note?: string;
    singleSupplement?: number;
    comparisonKey: string | null;
  };
  provenance: {
    kind: 'survey' | 'fixture';
    sourceUrl?: string;
    retrievedAt?: string;
    invented?: true;
    publicationPermission: 'pending' | 'local-only';
    // Hrá svið, afleidd gildi og túlkunarheimildir eftir gagnagjafa.
  };
};
```

## Gagnareglur

- Óþekkt gildi haldast `null`. Tóm hrá svið eru varðveitt; þau eru ekki sjálfkrafa núll eða staðfest gildi.
- Upprunalegum fjárhæðum er ekki deilt, margfaldað eða skipt um einingu.
- Aventura notar ISK og „á mann“ samkvæmt birtingarreglu sem var lesin í könnuninni. Þetta er sérstaklega skráð sem túlkun. Hrátt gjaldmiðilssvið og farþegasvið haldast tóm.
- Sumarferða-dagsetningar koma úr leitarhlekk. Óstaðfest tenging frá-verðs við dagsetningar er sýnileg í verðforsendum.
- Nætur af dagsetningamun eru merktar `nightsDerived`; auglýstir 8 dagar eru varðveittir sér hjá Bændaferðum.
- Heimildamerkingin `available` er geymd hrá hjá Aventura, en samræmt framboð er `unknown`.
- Engar nýjar þjónustuupplýsingar eru settar inn í raunfærslur. Innifalið hjá Bændaferðum kemur úr lýsingarútdrætti könnunarskýrslunnar; aðrar færslur nota aðeins staðfest atriði sýnishornsins.
- Tilbúnar færslur eru sjálfstæðar og merktar í gagnalaginu. Engum raunfærslum er fyllt út með skálduðum upplýsingum.
- Flokkar eru ritstýrð vöruflokkun; ályktuð flokkun raunfærslna er merkt `categoryInferred`.
- Búdapest notar lýsandi `buttonUrl`-ferðasíðu úr upprunalegu könnunarsýnishorni sem áframvísun. Upprunalegur `bookingUrl` helst óbreyttur í `provenance.rawDeparture`. Aðrar raunfærslur halda upprunalegum áframvísunum.
- Tilbúin dæmi nota heimasíðuhlekk og aðgerðina „Skoða vef …“; þau tengjast ekki óskyldri raunferð. Myndaval fer í gegnum aðskilda `media.js`-skrá með áfangastaðasannprófun.

## Verðsamanburður

Núverandi samanburðarhópur er `ISK-person-double-package`: auglýst fjárhæð í ISK á mann í tvíbýli fyrir skilgreindan ferðapakka. Leitin sannreynir einnig gjaldmiðil, einingu og tvíbýli óháð lyklinum. Ferðir með óþekkt verð, óþekkta einingu eða ófullnægjandi pakkaforsendur eru undanskildar þegar verðröðun er valin. Fjöldi undanskilinna færslna og forsendur eru sýnd við niðurstöður.

Þetta jafnar ekki innifalda þjónustu; kortin sýna áfram mismunandi innifalin atriði. Ekkert er fullyrt um endanlegan kostnað, besta verð eða staðfest sætaframboð. Framtíðarsnið geta bætt við fleiri samanburðarhópum án þess að breyta upprunalegum fjárhæðum.

## Framtíðargagnagjafar

Bæta má við safnara eða samþykktu API utan birtingarlagsins. Hver tenging skilar hráum gögnum og uppruna; viðkomandi adapter umbreytir þeim í Trip. `loadTrips` sameinar niðurstöður, sannprófar þær og skilar sama líkani til viðmótsins. Ekki þarf að endurskrifa síðuna eða kortin. Í framleiðslu á að keyra söfnun á samþykktum bakenda, ekki frá vafra notanda.

Í næsta áfanga þarf að útfæra gagnagjafatengingar, birtingarheimildir, ferskleikastefnu, villueinangrun hvers gagnagjafa, afritagreiningu og frekari samanburðarreglur. Engin sjálfvirk söfnun eða þjónusta frá þriðja aðila keyrir í þessari frumgerð.
