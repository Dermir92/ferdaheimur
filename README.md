# Ferðaheimur

Staðbundin MVP-frumgerð af sameiginlegri íslenskri leit yfir utanlandsferðir. Notendur leita, sía, skoða auglýst verð og halda áfram á vef ferðaskrifstofu. Engir reikningar, greiðslur eða bókanir eru í kerfinu.

**Staða: MVP 0.1** (`package.json`: 0.1.0). Þessi geymsla er grunnur áframhaldandi vöruþróunar; hún er ekki tilbúin til opinberrar birtingar.

## Opna á þessari tölvu

Node.js 20 eða nýrra þarf að vera uppsett. Útgáfa 24.14.1 var notuð við sannprófun. Enga pakka þarf að setja upp.

Klónaðu private-geymsluna með GitHub-reikningi sem hefur aðgang og keyrðu síðan í PowerShell:

```powershell
git clone https://github.com/Dermir92/ferdaheimur.git
cd ferdaheimur
npm start
```

Opnaðu **http://127.0.0.1:5173** í vafra. Haltu PowerShell-glugganum opnum meðan þú notar síðuna. `Ctrl+C` stöðvar þjóninn.

Ef portið er þegar í notkun getur síðan þegar verið í gangi. Annars má velja annað port:

```powershell
$env:PORT = '5174'
npm start
```

Þá er slóðin http://127.0.0.1:5174. Þjónninn hlustar aðeins á `127.0.0.1`; engin almenn birting eða aðgangur af staðarneti er stilltur. Ekki opna `index.html` beint með `file://`, því gagnalagið notar HTTP.

Ef verkefnið er þegar á tölvunni nægir að opna PowerShell í verkefnismöppunni og keyra `npm start`. Engin `.env`-skrá, API-lykill, `npm install` eða byggingarskref er nauðsynlegt.

## Það sem er tilbúið

- Forsíða með ferðaleit, ferðayfirliti, áfangastaðavali og leiðbeiningum um áframvísun.
- Leit eftir heiti, áfangastað og landi; síur eftir brottfararmánuði, ferðaflokki, ferðaskrifstofu og fjölda nátta.
- Næsta brottför og verðröðun í báðar áttir. Verðröðun sýnir eingöngu skilgreindan sambærilegan hóp og segir hversu margar aðrar færslur voru undanskildar.
- Virkar síur, stök fjarlæging, hreinsun, deilanleg leitar-slóð, endurhleðsla og til baka/áfram í vafra.
- Ferðakort með dagsetningum, auglýstu verði, einingu, verðforsendum og inniföldum atriðum.
- Símaútlit, lyklaborðsaðgengi, sýnilegur fókus, merkt form, upplýsingagluggi og tilkynntar niðurstöður.
- Hleðslustaða, villustaða með endurtekningu, tómar niðurstöður og skýrar merkingar fyrir óþekkt gildi.

## Gögn og áframhaldandi þróun

`src/data/repository.js` er inngangur viðmótsins að gögnum. Hann sækir staðbundið sýnishorn, samræmir það og sannprófar færslur. Framtíðarsöfnun/API er tengd þar; ferðakort og síðuflæði nota sama samræmda líkan.

```text
Samþykktur gagnagjafi / staðbundin sýnishorn
  → gagnasókn í repository.js
  → samræming í data/adapters/
  → samræmt Trip-líkan
  → domain/search.js
  → ui/trip-card.js og app.js
```

| Skrá | Hlutverk |
| --- | --- |
| `src/data/survey-samples.json` | Fjórar afmarkaðar færslur úr upprunalegri könnun; engin lifandi söfnun. |
| `src/data/adapters/survey.js` | Umbreyting ólíkra sniða; óvissa, ályktanir, hrá svið og uppruni varðveitt. |
| `src/data/fixtures.js` | Sex tilbúin dæmi, öll merkt `kind: fixture`, `invented: true` og `local-only`. |
| `src/data/agencies.js` | Söluheiti, ábyrgðaraðilar og heimasíður; vörumerki ekki talin óháðir lögaðilar. |
| `src/data/media.js` | Eigin myndskreytingar og tenging þeirra við áfangastaði; hlutlaus lausn við óþekkt eða ósamræmt myndefni. |
| `src/data/repository.js` | Gagnasókn og sannprófun; bannar áframvísun utan léns viðkomandi seljanda. |
| `src/domain/search.js` | Sía, röðun og URL-ástand óháð birtingu. |
| `src/domain/format.js` | Íslensk verð- og dagsetningasnið án kröfu um íslenska ICU-uppsetningu vafra. |
| `src/ui/trip-card.js` | Birting samræmdra færslna og örugg HTML-escaping. |

Sjá nánara líkan og gagnareglur í [docs/gagnalag.md](docs/gagnalag.md), [rannsóknarskýrsluna](docs/ferdagogn-konnun.md) og [afmörkuð frumheimildadæmi](docs/ferdagogn-konnun-synishorn.json). Full sóknarskrá og tvítekið frumrit skýrslunnar haldast staðbundin og eru útilokuð með `.gitignore`; þeim er ekki eytt.

## Takmarkanir og merking gagnanna

Fjórar færslur koma úr könnun 11. október 2026, sex eru tilbúin staðbundin dæmi. Tilbúin dæmi bjóða „Skoða vef …“ og tengjast heimasíðu skrifstofu. Raunfærslur vísa á viðeigandi slóð úr könnunargögnum, með upprunalegum leitarbreytum og URL-fragmentum. Búdapest notar lýsandi ferðasíðu úr sömu heimild; upprunalegur bókunarhlekkur er varðveittur í hráum gögnum.

Engin færslan er staðfesting á sætaframboði eða endanlegu bókunarverði. Óþekkt verð er `null`, ekki 0. Sumarferðir auglýsa 99.900 kr. án staðfestrar verðeiningar; fjárhæðin er því aldrei deilt með tveimur eða verðröðuð sem verð á mann. Aventura-verðdæmið geymir túlkun einingar og gjaldmiðils samkvæmt forsíðukóða, en ófullnægjandi pakkaforsendur útiloka það frá verðröðun. Borgarferðin til Búdapest hefur ekkert verð. Nætur sem reiknaðar eru af dagsetningum eru merktar sem afleiddar í gagnalaginu.

Myndirnar eru búnar til með ImageGen fyrir verkefnið. Þær eru almennar áfangastaðamyndir, ekki myndir af auglýstum hótelum eða staðfest ferðaaðstaða. Engar myndir ferðaskrifstofa eru endurbirtar. Uppruni, skráarheiti og fyrirmæli eru í [docs/myndefni.md](docs/myndefni.md).

Frumgerðin er eingöngu fyrir staðbundna þróun. Engin birtingarheimild hefur verið gefin fyrir endurbirtingu ferðagagna. Opinber útgáfa bíður samþykktra birtingarheimilda, samþykktra gagnatenginga og raunverulegra gagnasafna.

## Sannprófun

```powershell
npm test
npm run check
# Með staðbundna þjóninn í gangi í öðrum glugga:
node scripts/smoke.mjs
```

`npm test` sannprófar m.a. varðveislu könnunargagna, óþekkt verð og einingar, áframvísunarslóðir, samsettar síur, verðröðun, áraskipti, URL-ástand, gagnavillur og örugga kortabirtingu. `npm run check` athugar JavaScript-setningafræði, JSON og myndaskrár.

Sérstakt lint-, TypeScript/typecheck- eða build-ferli er ekki til staðar: verkefnið notar JavaScript-einingar sem vafrinn les beint og einfaldan Node-þjón. `check` er setningafræði- og skráaathugun, ekki lint eða typecheck. Engin sjálfvirk deployment er skilgreind.

Helstu þekktu takmarkanir: afmarkað sýnishorn en ekki lifandi eða tæmandi ferðaskrá; ófullnægjandi verðforsendur hjá sumum seljendum; engin staðfesting á framboði; endurteknar myndskreytingar; og engin sjálfvirk ferskleika- eða heilsuvöktun áframvísana. Símaútlit var prófað með hermdum skjástærðum í einum vafra, ekki á raunverulegum síma eða með skjálesara. Samþykkt gagnasamstarf og birtingarheimildir eru forsenda opinberrar útgáfu.

Nýjasta UX-yfirferðin, vafrapróf við 1440 × 900 og 390 × 844, 19 sjálfvirk próf og ný skjáskot eru í [docs/ux-sannprofun.md](docs/ux-sannprofun.md). Upphafleg MVP-prófun er varðveitt í [docs/sannprofun.md](docs/sannprofun.md).
