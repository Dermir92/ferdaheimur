# Könnun á ferðagögnum fyrir sameiginlega íslenska ferðaleit

**Dagsetning:** 11. október 2026, Atlantic/Reykjavik (UTC). Beina HTTP-úrtakið var tekið kl. 00:22–00:26. Þetta er tæknileg hagkvæmniathugun; engin vefsíða eða framleiðslusafnari var byggður.

**Mat:** Sameiginlegt yfirlit yfir auglýstar ferðir er raunhæft. Ekki er enn grundvöllur fyrir loforði um allar skrifstofur, allt framboð eða samanburðarhæft, staðfest bókunarverð. Besti fyrsti áfanginn er afmarkað yfirlit með samþykktum gagnagjöfum, skýrum verðforsendum og áframvísun til seljanda.

## 1. Aðferð og styrkur niðurstaðna

- **[S] Staðfest:** Lesið af tilgreindri frumheimild eða fengið í beinu HTTP-svari. Segir hvað heimildin birti á könnunartíma, ekki að auglýsing sé rétt eða ferð bókanleg.
- **[Á] Ályktun:** Tæknilegt mat út frá sýnilegum kóða, gögnunum eða vinnsluflæði. Er ekki staðfesting rekstraraðila.
- **[Ó] Óprófað:** Ekki sannprófað, t.d. heildarframboð, innri birgjakerfi, rauntímaverð, samþykki til endurbirtingar eða nákvæmur fjöldi lausra sæta.

Leitað var að söluaðilum sem bjóða Íslendingum utanlandsferðir og heitum þeirra, síðan borið saman við [gild ferðaskrifstofuleyfi Ferðamálastofu](https://www.ferdamalastofa.is/is/leyfi/utgefin-leyfi/ferdaskrifstofur-utgefin-leyfi). Skráin greinir lögaðila og hjáheiti en er ekki sérstakur listi yfir útfarandi ferðasölu. Hún inniheldur líka móttöku erlendra ferðamanna, margar starfsstöðvar og mörg heiti sama aðila. **Listinn hér er því rökstutt úrtak, ekki tæmandi markaðsskrá.** Erlendur seljandi getur einnig selt íslenskum viðskiptavinum, eins og Obeo sýnir.

Skoðaðir voru **18 söluvefir**. Tæknileg dýptarsannprófun náði til **þriggja**: Bændaferða, Aventura og Sumarferða. Á hinum var aðallega skoðað forsíðu-HTML, robots.txt og tengdir ferðaskilmálar. Ekki var keyrt JavaScript eða notaður vafri; þetta staðfestir sérstaklega hvað fæst án slíkrar keyrslu. Tilvísanir í `fetch`/AJAX eru lesnar úr opinberum síðukóða, ekki mæld netumferð vafra.

Beina könnunin skráði 63 afmarkaðar GET-tilraunir, þar af tvær DNS-villur á óstaðfestu leitarléni (`explora.is`, ekki talið með í úrtakinu). Auk þess var robots.txt Bændaferða lesið í upphaflegri tengiprófun og opinberar síður lesnar með vefleit. Engin sjálfvirk skriðun, innskráning, CAPTCHA-lausn, bókun, karfa eða greiðsla var framkvæmd. Varnir voru ekki sniðgengnar.

Valin bein gagnadæmi, sóknartímar og upprunaslóðir eru varðveitt í [afmörkuðum frumheimildadæmum](ferdagogn-konnun-synishorn.json). Full sóknarskrá með HTTP-stöðum og robots-reglum er geymd staðbundið í `ferdagogn-konnun-gagnasynishorn.json` og fer ekki í GitHub-geymsluna. Heilar vefsíður, kökur og innskráningargögn eru ekki hluti afhendingarinnar. Slóðirnar að neðan gera niðurstöður rekjanlegar, en verð og efni geta breyst.

## 2. Vörumerki, lögaðilar og umfang

„Aðskilinn lögaðili“ merkir sérstakt fyrirtæki í heimildunum. Það staðfestir **ekki** að fyrirtækið sé án eignatengsla við aðra. Hluthafaskrá allra aðila var ekki könnuð.

| Söluheiti / vörumerki | Rekstrar- eða ábyrgðaraðili samkvæmt heimildum | Aðgreining og heimild |
|---|---|---|
| Úrval Útsýn, Sumarferðir, Plúsferðir | Ferðaskrifstofa Íslands ehf., kt. 470103-2990 | [S] Vörumerki sama aðila, ekki þrír óháðir keppinautar. Leyfisskrá og fætur [Úrvals Útsýnar](https://www.uu.is/), [Sumarferða](https://www.sumarferdir.is/) og [Plúsferða](https://www.plusferdir.is/). |
| Heimsferðir | FÍ er tilgreind sem skipuleggjandi og tryggingaskyldur aðili; Heimsferðir ehf., kt. 461295-2079, er líka í leyfisskrá | [S] Varðveita þarf bæði söluheitið og lögaðilann; ekki einfalda þetta í „ekkert sjálfstætt félag“. [Forsíða](https://www.heimsferdir.is/) og [samrunaákvörðun 2025](https://www.samkeppni.is/urlausnir/akvardanir/5-2025/) styðja sameiginlegt rekstrarsamhengi. |
| Icelandair VITA | Icelandair, kt. 461202-3490 | [S] Hjáheiti Icelandair í leyfisskrá. [Þjónustuskrifstofa](https://www.icelandair.com/is-is/adstod/hafa-samband/thjonustuskrifstofa/) staðfestir núverandi þjónustu. Eldri upplýsingar um FERIA eru ekki notaðar sem lýsing núverandi rekstraraðila. |
| Bændaferðir; Súla Travel | Ferðaþjónusta bænda hf., kt. 530891-1359 | [S] Hjáheiti sama leyfishafa. [Bændaferðir](https://www.baendaferdir.is/) tilkynna kaup á Súla. Hey Iceland er annað sölusvið sama félags, með áherslu á Ísland, og er ekki talið sérstakur utanlandsferðavefur hér. [Um félagið](https://www.heyiceland.is/is/um-okkur/um-hey-island). Súla-vefur var ekki prófaður sérstaklega. |
| Aventura | Aventuraholidays ehf., kt. 681119-0190 | [S] Aðskilinn leyfishafi; [ferðavefur](https://aventura.is/) og leyfisskrá. |
| KILROY Ísland | Kilroy Iceland ehf., kt. 410911-0350 | [S] Aðskilinn leyfishafi; heimsreisur, hópar og sérsniðnar ferðir á [vefnum](https://www.kilroy.is/). |
| VERDI Travel; VERDI Sport / GolfSaga sem söluheiti | Ferðaskrifstofa Akureyrar ehf., kt. 411101-2580 | [S] [Um VERDI](https://www.verditravel.is/is/um-okkur/umokkur) lýsir samruna við Tónsport og eldri heitinu VITA Sport. Ekki telja FA og VITA Sport sem viðbótarskrifstofur. |
| Mundo | Mundo ehf., kt. 630609-2080 | [S] Aðskilinn leyfishafi; náms-, hóp- og sérferðir á [vefnum](https://mundo.is/). |
| Fararsnið | Fararsnið ehf., kt. 710304-2890 | [S] Aðskilinn leyfishafi; menningar-, sælkera- og hreyfiferðir á [vefnum](https://fararsnid.is/). |
| Ferðasýn / Keníaferðir / Travelview | Ferðasýn ehf., kt. 511114-0550 | [S] [Ferðaskilmálar](https://www.ferdasyn.is/ferdaskilmalar) telja þessi heiti. Núverandi [forsíða](https://www.ferdasyn.is/) ber heitið Keníaferðir. |
| GJ Travel / Ferðaskrifstofa Guðmundar Jónassonar | Guðmundur Jónasson ehf., kt. 410166-0389 | [S] Aðskilinn leyfishafi; [ferdir.is](https://www.ferdir.is/) auglýsir einnig utanlandsferðir. |
| Evrópuferðir, Ameríkuferðir | Travel 2 ehf., kt. 690623-1020 | [S] Tvö vörumerki sama aðila, samkvæmt [um okkur](https://www.evropuferdir.is/um-okkur) og fótum beggja vefja. |
| Visitor | Vistra ehf., kt. 521108-0880 | [S] Aðskilinn lögaðili, samkvæmt [um okkur](https://www.visitor.is/umokkur/) og leyfisskrá. |
| Fjallakofinn ævintýraferðir | Íslandsvinir hf., kt. 470898-2919 | [S] Rekstraraðili birtur á [ferðavefnum](https://ferdir.fjallakofinn.is/); aðgreina ferðasölu frá almennri vefverslun. |
| Obeo Afríka | Norskt fyrirtæki samkvæmt eigin skilmálum | [S] Selur ferðir með íslenskri fararstjórn. [Skilmálar](https://obeoafrika.is/skilmalar/) segja félagið íslenskt að eignarhaldi en skráð í Noregi. [Ó] Nákvæmt skráð félagsheiti og norskt skráningarnúmer voru ekki sannreynd við fyrirtækjaskrá. |

Til að rökstyðja tæmandi lista þyrfti að flokka alla viðeigandi leyfishafa eftir núverandi útfarandi sölu, sameina hjáheiti og kanna erlenda seljendur sérstaklega. Það var ekki gert. Hópaferðir sem aðeins eru verðlagðar eftir fyrirspurn eru ekki sjálfkrafa leitanlegt ferðaframboð.

## 3. Litlar tæknilegar sannprófanir

### 3.1 Bændaferðir: HTML með ferðalýsingu og lítið JSON-framboðskall

**[S]** GET á [Vorgleði í Prag & Brno](https://www.baendaferdir.is/baendaferdir/detail/2612/vorgledi-i-prag-brno) skilaði HTTP 200 og HTML með eftirfarandi staðreyndum, án JavaScript-keyrslu:

| Svið | Sótt gildi |
|---|---|
| Heiti | Vorgleði í Prag & Brno |
| Áfangastaður | Tékkland; Prag og Brno |
| Flokkun í efni | Bændaferðir / vor / Evrópa |
| Brottför / heimkoma | 3. maí 2027 / 10. maí 2027 |
| Lengd | 8 dagar; 7 gistinætur reiknaðar af dagsetningum [Á] |
| Auglýst verð | 329.900 ISK á mann í tvíbýli |
| Viðbót | 86.900 ISK vegna einbýlis |
| Innifalið, útdráttur | Flug og skattar, gisting, morgunmatur, hluti annarra máltíða, skipulagðar rútuferðir og íslenskur fararstjóri |

Í síðunni var `loadBooking('27_VOR6', '2612', true)`. Tengdi [JavaScript-pakkinn](https://www.baendaferdir.is/bundles/js?v=DgNCEFzSnlsfFgV5h2h4tnG-y_Cq4IkkSpooD1b3RWc1) sýnir GET-kall með `navisionID` og `hasBookingHref`. Eitt slíkt kall, endurtekið einu sinni vegna UTF-16-stafakóðunar, skilaði `application/json; charset=utf-16`:

```json
{
  "ButtonText": "Bóka ferð",
  "Url": "https://baendaferdir.is/selection?navisionId=27_VOR6",
  "ErrorText": null,
  "PackageAvailability": ""
}
```

Heimild: [nákvæmt gagnakall](https://www.baendaferdir.is/api/bookings/GetPackageAvailability?navisionID=27_VOR6&hasBookingHref=true), 11.10.2026 kl. 00:26:33 UTC. **Tómi strengurinn staðfestir ekkert um laus sæti.** Bókunarhlekkurinn fékkst, en ekki var farið inn í val- eða greiðsluferli. `navisionID` er heiti breytu; það staðfestir ekki útgáfu eða heildaruppbyggingu bakendakerfis.

**Fjöldi:** 8 skráðar GET-tilraunir á baendaferdir.is, að forsíðu, robots, ferðalýsingu, tveimur JS-skrám, skilmálum og tveimur eins API-köllum; auk upphaflegrar robots-tengiprófunar. Ekkert nýtt ferðasafn var skriðið.

### 3.2 Aventura: opinberar JSON-skrár með ferðum og verðdæmum

**[S]** [Forsíðukóðinn](https://aventura.is/) inniheldur `fetch` á slóðir undir `https://sftp.aventura.is/files/`. Þær voru sóttar yfir **HTTPS**, án SFTP-aðgangs eða innskráningar. Þetta eru vefgögn, ekki staðfest samstarfs-API.

[Borgarferðaskráin](https://sftp.aventura.is/files/city-break/borgarferdir.json) skilaði HTTP 200 og JSON með `tours` og `departures`. Samtenging eftir `tourId` gaf m.a.:

| Svið | Sótt gildi |
|---|---|
| Heiti / auðkenni | Budapest / `budapest` |
| Brottför / heimkoma | `2026-10-22T00:00:00.000Z` / `2026-10-25T00:00:00.000Z` |
| Framboðsmerking | `available` |
| Hluti þjónustu | Íslensk fararstjórn |
| Bókunarslóð | `bookingUrl` með leitarskilyrðum og URL-fragmenti; varðveitt óbreytt í gagnasýnishorni |
| Verð | Ekkert verð í þessari færslu |

Dagsetningarnar eru geymdar sem miðnæturgildi í JSON, ekki staðfestir flugtímar. `available` er merking í skránni, ekki staðfest sætaúttekt. Sama skrá hafði liðna Porto-brottför merkta `available` og færslu þar sem dagsetning í auðkenni var önnur en `startDate`. Ekki má því leiða dagsetningar af auðkennum eða túlka merkinguna sem tryggt framboð.

Opinber [skráarlisti verðdæma](https://sftp.aventura.is/files/last-minute/groups/offers-manifest.json) vísaði á sex skrár. **Ein** þeirra, [Tenerife frá Keflavík](https://sftp.aventura.is/files/last-minute/groups/kef_tenerife.json), var sótt:

```json
{
  "name": "Coral Teide Mar",
  "dest": "Tenerife",
  "origin": "Keflavik",
  "date_from": "2026-10-13",
  "date_to": "2026-10-20",
  "nights": "7",
  "board": "Aðeins herbergi",
  "accommodation_name": "2 Adults",
  "price_num": "247200",
  "currency": ""
}
```

**[S]** Skráin hafði `updated_at=2026-10-10T13:40:09.789Z`, um 10 klst. og 46 mín. fyrir sókn. Hótelleitarhlekkur fékkst líka og er varðveittur í fylgiskránni. **[S]** Forsíðukóðinn birtir verðið ódeilt, merkir það sem frá-verð á mann og notar ISK þegar gjaldmiðilssviðið er tómt. Því er **247.200 ISK á mann samkvæmt birtingarreglu síðunnar**, ekki sjálfstætt staðfest merking `price_num`. Farþegasviðin `pax`, `adults`, `kids` voru tóm þótt herbergislýsing segði tvo fullorðna.

**[Ó]** Ekki var staðfest að þetta verð eða herbergi væri bókanlegt. Rauntímaleitarhluti forsíðukóðans kallar á reCAPTCHA; hann var ekki prófaður. Fullur farangur, skattar, akstur og allar verðforsendur fást ekki úr þessu JSON-úrtaki einu.

**Fjöldi:** 7 GET-köll: forsíða, robots á aðalléni og gagnaléni, skilmálar, borgarferðaskrá, skráarlisti og ein verðskrá. Ekki voru sóttar allar sex verðskrárnar.

### 3.3 Sumarferðir: Juniper-forsíða með HTML-auglýsingu

**[S]** [Forsíðan](https://www.sumarferdir.is/) skilaði HTTP 200 með auglýsingu í HTML:

| Svið | Sótt gildi |
|---|---|
| Heiti | TENERIFE FYRIR 2 |
| Auglýst frá-verð | 99.900 ISK |
| Lengd og þjónusta | 7 nætur; flug, hótel og taska |
| Dagsetningar í leitarhlekk | `startDate=2026-10-14`, `endDate=2026-10-21` |
| Aðrar leitarbreytur | `destinationID=176137`, `originID=182556`, `paxs=20`, `duration=8` |
| Verðforsendur og framboð | Nákvæm eining verðs og lifandi framboð ekki staðfest |

Hlekkurinn var lesinn en leitin ekki keyrð. Heitið vísar til tveggja ferðalanga, en ekki er fullyrt út frá úrtakinu að verðið sé heildarverð fyrir tvo. `duration=8` er ekki sama mælieining og auglýstar 7 nætur. Nákvæm merking `paxs=20` var ekki sannreynd.

Innbyggt `application/ld+json` var `Organization`-lýsing með m.a. Juniper-sýnidæmaupplýsingum, **ekki ferðaskrá eða verð-API**. JavaScript er ekki nauðsynlegt til að lesa þessa auglýsingu; full leit er óprófuð.

**Fjöldi:** 2 bein GET-köll á Sumarferðir, forsíða og robots. Sameiginlegir ferðaskilmálar hópsins voru lesnir sérstaklega. Endurnotkun var ekki prófuð eftir að takmarkandi notendaskilmálar Plúsferða fundust.

### 3.4 Hvað náðist úr þremur ólíkum gagnaleiðum?

| Umbeðið svið | Bændaferðir: ferðalýsing + JSON | Aventura: tvær JSON-gagnagerðir | Sumarferðir: HTML-auglýsing |
|---|---|---|---|
| Heiti | [S] Já | [S] Ferðarheiti eða hótelheiti; aðgreina | [S] Auglýsingaheiti |
| Áfangastaður | [S] Texti | [S] `dest` / heiti ferðar | [S] Tenerife |
| Ferðaflokkur | [S] Efnisflokkar | [Á] Samkvæmt gagnaskrá/síðusamhengi | [Á] Sólarferð samkvæmt samhengi |
| Brottför | [S] Í HTML | [S] Skipulagt dagsetningarsvið | [S] Í hlekk; tenging frá-verðs við dag óstaðfest |
| Heimkoma | [S] Í HTML | [S] Skipulagt dagsetningarsvið | [S] Í hlekk; flugtími óprófaður |
| Lengd | [S] Dagar; nætur reiknaðar [Á] | [S] Nætur í verðskrá; dagar reiknanlegir | [S] Nætur; `duration` geymt sér |
| Auglýst verð | [S] Já | [S] Í verðskrá, vantar í borgarferðafærslu | [S] Já |
| Verðforsendur | [S] Tvíbýli/einbýlisálag | [S] Herbergi/máltíð; [Á] eining og ISK úr UI-kóða | [Ó] Ófullnægjandi |
| Innifalið | [S] Ítarleg upptalning | [S] Aðeins hluti þjónustu | [S] Stutt auglýsingalýsing |
| Bókunarhlekkur | [S] API-svar | [S] `bookingUrl` / `hotel_search_url` | [S] Leitarhlekkur |
| Framboð | [Ó] Tómt API-svið | [S] Ritstýrðar merkingar; [Ó] lifandi birgðir | [Ó] Ekkert staðfest |

**Engin þessara prófana staðfesti endanlegt bókunarverð.** Það krefðist sérstakrar samþykktrar verð-/framboðstengingar; auglýsing og jafnvel ný leitarniðurstaða jafngilda ekki greiddri, staðfestri bókun.

## 4. Mat fyrir hvern söluvef

Vandi og viðhald eru **[Á]** faglegt mat, ekki mæld framkvæmd. „Lítið“ miðast við lestur stöðugs efnis; „miðlungs“ við fleiri snið, óskipulagðar forsendur eða JSON án þjónustusamnings; „mikið“ við vafra, setur, breytingar á leit og aðgangsvarnir. Öll samvinna og aðgangur að samstarfsgögnum er **[Ó]** þar til samið hefur verið. Nákvæmar robots- og skilmálaheimildir eru í kafla 5.

### 4.1 Heimsferðir — [forsíða](https://www.heimsferdir.is/)

| Atriði | Niðurstaða |
|---|---|
| Aðferð / tækni | [S] HTML, Juniper-merki, Organization JSON-LD og JS-innfellingar frá `heimsferdir.cloud`. [Á] Blanda af ritstýrðu efni og virkri leit. |
| Gögn sem nást | [S] Áfangastaður, dagabil, auglýst verð og leitarhlekkur á sýnilegu korti. |
| Vantar / JS | [Ó] Fullir flokkar, innifalið, verðforsendur og rauntímaframboð. Forsíðukort fyrir Split vísaði á júní 2026, liðinn tíma; ekki nota sem virkt tilboð. Cloud-gagnaköll ekki prófuð. |
| Verð | Auglýst verð; eining og staðfest bókunarverð óprófuð. |
| Vandi / viðhald | Miðlungs fyrir efnisyfirlit; mikið fyrir heildarleit. Innfellingar auka breytingafleti. |
| Samstarf | Líklega nauðsynlegt fyrir stöðugt fullframboð og skýra endurnotkunarheimild. |

### 4.2 Úrval Útsýn — [forsíða](https://www.uu.is/)

| Atriði | Niðurstaða |
|---|---|
| Aðferð / tækni | [S] Beint HTML fékkst þótt vefleitartólið tímamörkaðist. Juniper og sambærilegar `/packages/results.aspx`-slóðir og hjá hópnum. |
| Gögn sem nást | [S] Tilboðsheiti, áfangastaðir, auglýst verð, stutt þjónustulýsing og leitarhlekkir með dagsetningum. |
| Vantar / JS | [Ó] Öll hótel/verðafbrigði, endanlegar forsendur og framboð. Full leit og verð-JSON ekki prófuð. |
| Verð | Auglýst frá-verð á tilboðskortum; ekki staðfest bókunarverð. |
| Vandi / viðhald | Miðlungs; hugsanlega endurnýtanlegur Juniper-milliliður [Á], en stillingar hvers vörumerkis þarf að prófa. |
| Samstarf | Líklega já, helst við FÍ fyrir hópinn. |

### 4.3 Plúsferðir — [forsíða](https://www.plusferdir.is/)

| Atriði | Niðurstaða |
|---|---|
| Aðferð / tækni | [S] HTML + Juniper og JS-innfelling frá sama cloud-léni og Heimsferðir. |
| Gögn sem nást | [S] Tenerife-tilboð, 14. október, auglýst 154.900 ISK, tveir fullorðnir og stutt lýsing á inniföldu. |
| Vantar / JS | [Ó] Fullt brottfararár í sýnilegu heiti, heimkoma, lengd, nákvæm verðeining og lifandi framboð; full leit óprófuð. |
| Verð | Auglýsingaverð með ófullnægjandi forsendum; ekki staðfest bókunarverð. |
| Vandi / viðhald | Miðlungs fyrir kort; mikið fyrir fulla leit. |
| Samstarf | **Já fyrir fyrirhugaða endurnotkun:** birtir notendaskilmálar takmarka notkun efnis og tengingar án skriflegs samþykkis. |

### 4.4 Sumarferðir — [forsíða](https://www.sumarferdir.is/)

| Atriði | Niðurstaða |
|---|---|
| Aðferð / tækni | [S] HTML; Juniper. Sannprófað í kafla 3.3. JSON-LD er fyrirtækjalýsing. |
| Gögn sem nást | [S] Tilboðsheiti, áfangastaður, nætur, stutt innifalið, frá-verð og dagsetningar í leitarhlekk. |
| Vantar / JS | [Ó] Nákvæm verðeining, fullir skilmálar tilboðs og framboð. Virk leit ekki keyrð. |
| Verð | Skýrt auglýst frá-verð; ekki staðfest bókunarverð. |
| Vandi / viðhald | Lítið–miðlungs fyrir auglýsingar; mikið fyrir heildarverðleit. |
| Samstarf | Líklega já; kanna sameiginlega gagnaleið og skilmála við FÍ. |

### 4.5 Bændaferðir — [forsíða](https://www.baendaferdir.is/)

| Atriði | Niðurstaða |
|---|---|
| Aðferð / tækni | [S] WebMaster/ASP.NET-HTML og GET JSON fyrir bókunarhlekk/framboðsmerkingu. Sannprófað í kafla 3.1. |
| Gögn sem nást | [S] Öll lýsandi umbeðin svið í prófferð; verðforsendur og innifalið ítarlegt. |
| Vantar / JS | [Ó] Raunframboð; API skilaði tómum streng. Vafri þarf ekki fyrir sannprófuð gögn. Bókunarferlið sjálft óprófað. |
| Verð | Auglýst verð á mann í tvíbýli; ekki frá-merkt í prófferðinni, en heldur ekki staðfest bókunarverð. |
| Vandi / viðhald | Lítið–miðlungs. Túlka dagsetningar og fleiri tegundir ferða; fylgjast með API og sniðum. |
| Samstarf | Æskilegt fyrir endurbirtingu; líklega nauðsynlegt fyrir traust sætaframboð og Súla-samþættingu. |

### 4.6 Aventura — [forsíða](https://aventura.is/)

| Atriði | Niðurstaða |
|---|---|
| Aðferð / tækni | [S] HTML með JS sem sækir opinber HTTPS JSON. Sannprófað í kafla 3.2. Innri kerfisbirgir óstaðfestur. |
| Gögn sem nást | [S] Heiti, áfangastaður, dagsetningar, nætur, verðdæmi, herbergi/máltíð, hlekkir og framboðsmerkingar í mismunandi skrám. |
| Vantar / JS | [Ó] Fullar verðforsendur, allt innifalið og lifandi birgðir. Kóðinn notar CAPTCHA í hluta rauntímaleitar; ekki keyrt. |
| Verð | Frá-verð í verðdæmaskrá, gjaldmiðill/eining samkvæmt UI; ekki staðfest bókunarverð. |
| Vandi / viðhald | Miðlungs fyrir JSON-yfirlit; mikið fyrir rauntímaleit. Skrár eru án staðfests API-samnings. |
| Samstarf | Líklega já, til að fá stöðuga skrá, gæðatryggingu og heimild til notkunar. |

### 4.7 Icelandair VITA — [pakkaferðaslóð sem var prófuð](https://www.icelandair.com/is-is/fri/)

| Atriði | Niðurstaða |
|---|---|
| Aðferð / tækni | [S] Prófuð slóð og robots skiluðu HTTP 403 / Cloudflare „Just a moment“. Var ekki haldið áfram fram hjá vörninni. |
| Gögn sem nást | [S] Opinberar [algengar spurningar](https://www.icelandair.com/is-is/adstod/fyrir-flugid/vacation-packages-faqs/) staðfesta VITA-þjónustu; ekkert ferðatilboð sannprófað í beinu HTTP-úrtaki. |
| Vantar / JS | [Ó] Öll ellefu ferðasviðin, núverandi bókunarkerfi, opinber leitarköll og hvort venjuleg JS-keyrsla nægi. 403 sannar ekki að vefurinn sé JS-eingöngu. |
| Verð | Óprófað. |
| Vandi / viðhald | Mikið/óvíst án samstarfs. Ekki byggja lausn á að halda að vörn hverfi. |
| Samstarf | Líklega nauðsynlegt fyrir áreiðanlega gagnaleið. |

### 4.8 KILROY — [forsíða](https://www.kilroy.is/)

| Atriði | Niðurstaða |
|---|---|
| Aðferð / tækni | [S] HTML með almennu efni, JS-sniðmátum fyrir leit og JSON-LD fyrir WebSite/VideoObject. Ferða-API ekki staðfest. |
| Gögn sem nást | [S] Ferðaflokkar, ferðatillögur og hlekkir að ráðgjöf. |
| Vantar / JS | [Ó] Heildstæðar dagsetningar, verð, forsendur, innifalið og framboð í úrtakinu. JS þarf líklega fyrir hluta leitar [Á]. Sérsniðnar tillögur eru ekki ákveðnar brottfarir. |
| Verð | Ekkert tölulegt ferðaverð sannprófað á forsíðu. Staðfest bókunarverð óprófað. |
| Vandi / viðhald | Miðlungs fyrir lýsandi tillögur; mikið fyrir sameiginlega verð-/dagsetningarleit. |
| Samstarf | Líklega já; þarf að skilgreina hvaða vara eigi heima í leitanlegu yfirliti. |

### 4.9 VERDI — [forsíða](https://www.verditravel.is/)

| Atriði | Niðurstaða |
|---|---|
| Aðferð / tækni | [S] Moya HTML. Ekki sannað bókunar-API eða ferðaskrá í JSON. |
| Gögn sem nást | [S] Heiti, flokkar, áfangastaðir, sum dagabil, frá-verð, brottfararflugvellir, efnis-/ferðahlekkir og merking um fá sæti. |
| Vantar / JS | [Ó] Fullar verðforsendur, innifalið og bókunarsæti; ferðasíður ekki dýptarprófaðar. HTML nægir fyrir kortin. |
| Verð | Auglýst frá-verð, t.d. handboltaferð; ekki staðfest bókunarverð. |
| Vandi / viðhald | Lítið–miðlungs fyrir yfirlit; margar sérferðategundir krefjast aðlögunar. |
| Samstarf | Æskilegt fyrir efni; líklega já fyrir fullframboð og verðstaðfestingu. |

### 4.10 Mundo — [forsíða](https://mundo.is/)

| Atriði | Niðurstaða |
|---|---|
| Aðferð / tækni | [S] WordPress, WP Travel Engine, WooCommerce-tengdur kóði, HTML, JSON-LD og tilvísun í WP REST. REST-/bókunarköll ekki prófuð. |
| Gögn sem nást | [S] Heiti, lönd, flokkar, verð, dagar/nætur, sum dagabil og ferðahlekkir. |
| Vantar / JS | [Ó] Verðforsendur, ítarlegt innifalið og lifandi framboð. „1–36 People“ segir ekki hversu mörg sæti eru laus. Bókunar-JS óprófað. |
| Verð | Auglýst verð; ekki sjálfkrafa frá-verð eða staðfest bókunarverð. Tilboð merkt 0 kr. á almennu yfirliti eru ekki sönnun um ókeypis ferð. |
| Vandi / viðhald | Miðlungs; viðbætur og margar vörutegundir. |
| Samstarf | Æskilegt; fá skýra merkingu sæta, núllverðs og bókunarsviða. |

### 4.11 Fararsnið — [forsíða](https://fararsnid.is/)

| Atriði | Niðurstaða |
|---|---|
| Aðferð / tækni | [S] WordPress HTML, JSON-LD og WP REST-tilvísanir. Ekki sannprófað ferðabókunar-API. |
| Gögn sem nást | [S] Ferðaheiti, staðir, flokkar, dagabil, efnis-/ferðahlekkir og textamerkingar um uppselt/fá rými. |
| Vantar / JS | [Ó] Tölulegt verð, nákvæmar verðforsendur og innifalið úr ferðasíðum. Forsíðan hefur margar liðnar 2026-ferðir. Lifandi framboð óprófað. |
| Verð | Ekki sannprófað tölulegt verð í þessu úrtaki; ferðaskilmálar lýsa auglýstu staðgreiðsluverði. |
| Vandi / viðhald | Miðlungs; dagsetningar og framboð eru í frjálsum texta. |
| Samstarf | Æskilegt, sérstaklega til að fá nýjar brottfarir í skipulögðu formi. |

### 4.12 Ferðasýn / Keníaferðir — [forsíða](https://www.ferdasyn.is/)

| Atriði | Niðurstaða |
|---|---|
| Aðferð / tækni | [S] Squarespace HTML, JSON-LD og innbyggður síðustillinga-JSON. Ekki sannað að þar sé full ferðaskrá. |
| Gögn sem nást | [S] Áfangastaður, ferðaflokkar, ferðaheiti, almenn tímabil og hlekkir. |
| Vantar / JS | [Ó] Nákvæmir brottfarardagar, lengd, verð, verðforsendur, innifalið og framboð úr ferðasíðum. Vafri þarf ekki fyrir sýnilegt kynningarefni. |
| Verð | Óprófað í forsíðuúrtaki. |
| Vandi / viðhald | Miðlungs fyrir texta; óvíst fyrir bókanir. Robots bannar `/api/` og `?format=json`; þær leiðir voru ekki prófaðar. |
| Samstarf | Æskilegt fyrir efni, líklega já fyrir fulla og reglulega gagnaskrá. |

### 4.13 GJ Travel — [ferdir.is](https://www.ferdir.is/)

| Atriði | Niðurstaða |
|---|---|
| Aðferð / tækni | [S] Bein forsíða og robots skiluðu 403. Opinbert efni var lesanlegt með vefleit; engin hjáleið reynd. |
| Gögn sem nást | [S] Vefleitarútdráttur sýndi utanlandsferðir, dagabil, auglýst verð og upplýsingar um hópa. |
| Vantar / JS | [Ó] Núverandi HTML/JSON-snið, bókunarköll, forsendur, innifalið og framboð. Ekki staðfest hvort vafri sé nauðsynlegur. |
| Verð | Auglýsingaverð í útdrætti; dæmin voru frá ágúst 2026 og því liðin. Ekki nota sem núverandi framboð. |
| Vandi / viðhald | Mikið/óvíst án samþykktrar gagnaleiðar. |
| Samstarf | Líklega nauðsynlegt. Ferðaskilmálahlekkur sást, en núverandi texti ekki lesinn í beinu prófi. |

### 4.14 Evrópuferðir — [forsíða](https://www.evropuferdir.is/)

| Atriði | Niðurstaða |
|---|---|
| Aðferð / tækni | [S] HTML með ferðakortum og Next.js `self.__next_f`-gögnum. Ekki sjálfstætt JSON-API sannprófað. |
| Gögn sem nást | [S] Heiti hótelpakkans, áfangastaður, flokkur, frá-verð og hlekkur. Almennar upplýsingar um morgunmat/golf og flug. |
| Vantar / JS | [Ó] Nákvæmir dagar, heimkoma, lengd, herbergisforsendur og framboð einstakra tilboða. HTML nægir fyrir forsíðukort. |
| Verð | Auglýst frá-verð. Vefurinn segir verð staðlaðs pakka fast, en flestar ferðir án flugs; ekki samanburðarhæft við flug+hótel án aðgreiningar. |
| Vandi / viðhald | Lítið–miðlungs fyrir kort, miðlungs fyrir samræmingu pakka. |
| Samstarf | Æskilegt; sameiginleg tenging við Travel 2 gæti náð báðum vörumerkjum [Á]. |

### 4.15 Ameríkuferðir — [forsíða](https://www.amerikuferdir.is/)

| Atriði | Niðurstaða |
|---|---|
| Aðferð / tækni | [S] HTML og Next.js-síðugögn, sambærileg uppbygging við Evrópuferðir. Sameiginlegt bókunarkerfi ekki staðfest. |
| Gögn sem nást | [S] Ferðaheiti, áfangastaðasamhengi, dagar/nætur, auglýst verð og ferðahlekkir. |
| Vantar / JS | [Ó] Valdar brottfarir, nákvæmar verðforsendur, innifalið og framboð. Ferðasíður ekki dýptarprófaðar. |
| Verð | Blanda af auglýstu verði og skýrt merktu frá-verði; ekkert staðfest bókunarverð. |
| Vandi / viðhald | Lítið–miðlungs fyrir yfirlit; miðlungs fyrir sérsniðnar dagsetningar. |
| Samstarf | Æskilegt við Travel 2; ekki telja vefinn sérstakan rekstraraðila til viðbótar Evrópuferðum. |

### 4.16 Visitor — [forsíða](https://www.visitor.is/)

| Atriði | Niðurstaða |
|---|---|
| Aðferð / tækni | [S] Ríkulegt HTML með verðdæmum og leitarformi. [Um okkur](https://www.visitor.is/umokkur/) lýsir Amadeus-tengingu; það auðkennir ekki eitt og sér framendakerfið. |
| Gögn sem nást | [S] Hótel/áfangastaður, brottför, nætur, verð á mann, tveir fullorðnir, máltíð, innifalið í stuttu máli, aldur verðleitar og hlekkur. |
| Vantar / JS | [Ó] Flugheimkoma, fullar forsendur og raunframboð. Robots bannar m.a. `/api/`, `/ajax.php` og `/search.php`; ekki prófað. |
| Verð | Skýrt merkt verðdæmi úr fyrri leit, ekki staðfest bókunarverð. |
| Vandi / viðhald | Miðlungs fyrir HTML-kort; mikið fyrir lifandi samanburð. |
| Samstarf | Líklega nauðsynlegt fyrir fulla leit; æskilegt fyrir heimild til verðdæmaskrár. |

### 4.17 Fjallakofinn ævintýraferðir — [ferðavefur](https://ferdir.fjallakofinn.is/)

| Atriði | Niðurstaða |
|---|---|
| Aðferð / tækni | [S] HTML og Smartmedia-merking. Ekkert ferðabókunar-API eða ferðaverð í JSON sannprófað. |
| Gögn sem nást | [S] Ferðaflokkar, lýsing á utanlandsferðaþjónustu, flokkaslóðir og rekstraraðili. |
| Vantar / JS | [Ó] Einstök ferðaheiti, áfangastaðir, dagsetningar, lengd, verð, forsendur, innifalið og framboð úr undirsíðum. |
| Verð | Óprófað í þessu úrtaki. |
| Vandi / viðhald | Lítið fyrir flokkaskrá; miðlungs/óvíst fyrir einstakar ferðir og sérsniðna hópa. |
| Samstarf | Æskilegt fyrir raunverulegar brottfarir, verð og skýrt umfang. |

### 4.18 Obeo Afríka — [forsíða](https://obeoafrika.is/)

| Atriði | Niðurstaða |
|---|---|
| Aðferð / tækni | [S] WordPress-vísbendingar, HTML, JSON-LD og WP REST-tilvísun. Opinbert ferðabókunar-API ekki prófað. |
| Gögn sem nást | [S] Heiti, áfangastaðir, ferðasamhengi, dagabil, lengd, verð á mann, ferðahlekkir og framboðstexti. |
| Vantar / JS | [Ó] Fullar forsendur, innifalið og lifandi sætaframboð; ferðasíður ekki dýptarprófaðar. |
| Verð | Auglýst verð á mann, ekki staðfest bókunarverð. HTML sýnir bæði uppselt og fá sæti. |
| Vandi / viðhald | Lítið–miðlungs fyrir efni; miðlungs fyrir textaframboð og forsendur. |
| Samstarf | Æskilegt; staðfesta norskan samningsaðila, endurbirtingu og afhendingu gagna. |

## 5. Robots, skilmálar og aðgangstakmarkanir

**Robots.txt er ekki endurbirtingarleyfi.** HTTP 404 á robots staðfestir aðeins að gild robots-skrá fékkst ekki; HTTP 200 með HTML er heldur ekki gild robots-skrá. Opinber gagnaslóð staðfestir tæknilegan lesaðgang, ekki rétt til viðskiptalegrar notkunar. Hér er lýst birtum reglum, ekki úrskurðað um lagalegt gildi þeirra.

| Vefur | Robots-skoðun [S] | Skilmálar sem voru lesnir / áhrif á könnun |
|---|---|---|
| Heimsferðir | [200, Allow /](https://www.heimsferdir.is/robots.txt) | [Sameiginlegir ferðaskilmálar](https://skilmalar.fitravel.net/) gera grein fyrir verðbreytingum og rauntímaverði. Enginn samstarfssamningur staðfestur. |
| Úrval Útsýn | [200, Allow /](https://www.uu.is/robots.txt) | Sömu [ferðaskilmálar](https://skilmalar.fitravel.net/). Sjálfstæð heimild til endurnotkunar óprófuð. |
| Plúsferðir | [200, Allow /](https://www.plusferdir.is/robots.txt) | [Notendaskilmálar](https://www.plusferdir.is/content/content.aspx?id=213036) takmarka aðgang við skoðun og kaup, aðra efnisnotkun og tengingu við annan vef án skriflegs samþykkis. Tilvitnun í kafla um notkun: „Leyfilegur aðgangur þinn nær ekki til annarrar notkunar á efni eða vefsíðu.“ Engin frekari endurnotkunarprófun gerð eftir lestur. |
| Sumarferðir | [200, Allow /](https://www.sumarferdir.is/robots.txt) | Sömu [ferðaskilmálar](https://skilmalar.fitravel.net/). [Á] Fá heildarheimild frá FÍ; ekki yfirfæra sjálfkrafa alla notendaskilmála Plúsferða á önnur lén. |
| Bændaferðir | [404](https://www.baendaferdir.is/robots.txt) | [Ferðaskilmálar](https://www.baendaferdir.is/um-baendaferdir/ferdaskilmalar-baendaferda): auglýsingar/verð geta verið leiðrétt; samningur byggist á staðfestingu og greiðslu. Ekkert sérstakt gagnanotkunarleyfi fannst í lesinni síðu. reCAPTCHA-kóði er á vefnum; engin fyrirspurnarform send. |
| Aventura | [404 á aðalléni](https://aventura.is/robots.txt), [404 á gagnaléni](https://sftp.aventura.is/robots.txt) | [Ferðaskilmálar](https://aventura.is/is/general-conditions): verð geta breyst og verð í áætlunarflugi staðfestist við greiðslu. Heimild til endurbirtingar fannst ekki. CAPTCHA-leit ekki prófuð. |
| Icelandair VITA | [403 / aðgangsvörn](https://www.icelandair.com/robots.txt) | Núverandi heildarskilmálar ekki sannprófaðir í beinu úrtaki. Eldri VITA-PDF ekki notað sem staðfest núgildandi leyfi. Samstarf eða samþykkt gagnaleið þarf áður en haldið er áfram. |
| KILROY | [200, tómt Disallow](https://www.kilroy.is/robots.txt) | [Ferðaskilmálar](https://www.kilroy.is/um-okkur/ferdaskilmalar) fjalla um samþykki tilboðs/bókunar. Ekkert sérstakt gagnanotkunarleyfi fannst í lesinni síðu. |
| VERDI | [200](https://www.verditravel.is/robots.txt): bann við tilteknum leitar-/kerfisslóðum; `Crawl-delay: 5` | [Ferðaskilmálar](https://www.verditravel.is/is/ferdaskilmalar-verdi) lýsa staðgreiðslu/netbókun og skilyrðum hóptilboða. Lesið með meira en 5 sek. bili milli aðskildra umferða á lénið. Bannleiðir ekki prófaðar. |
| Mundo | [200](https://mundo.is/robots.txt): bann m.a. við wp-admin og add-to-cart; admin-ajax undantekning | [Skilmálar](https://mundo.is/skilmalar) fjalla um staðfestingu pöntunar og verð. Engar körfu-/bókunaraðgerðir gerðar; gagnaleyfi óstaðfest. |
| Fararsnið | [200](https://fararsnid.is/robots.txt): wp-admin bannað, admin-ajax undantekning | [Skilmálar](https://fararsnid.is/skilmalar-fararsnids/) fjalla um auglýst verð og breytingar. REST-skrá ekki prófuð; endurbirtingarheimild óstaðfest. |
| Ferðasýn / Keníaferðir | [200](https://www.ferdasyn.is/robots.txt): m.a. `/api/`, `/search` og JSON-format-slóðir bannaðar | [Ferðaskilmálar](https://www.ferdasyn.is/ferdaskilmalar) auðkenna félag og hjáheiti; verð getur breyst. Bannaðar JSON-leiðir voru ekki notaðar. |
| GJ Travel | [403](https://www.ferdir.is/robots.txt) | Ferðaskilmálahlekkur sást í opinberu efni en texti hans ekki sannreyndur. Engin frekari bein könnun eftir 403-svörin. |
| Evrópuferðir | [404](https://www.evropuferdir.is/robots.txt) | [Skilmálar](https://www.evropuferdir.is/skilmalar) auðkenna Travel 2 og fjalla um greiðslu og bókanir. Gagnaleyfi óstaðfest. |
| Ameríkuferðir | [404](https://www.amerikuferdir.is/robots.txt) | [Skilmálar](https://www.amerikuferdir.is/skilmalar) fjalla um staðfestingu og breytingar. Gagnaleyfi óstaðfest. |
| Visitor | [200](https://www.visitor.is/robots.txt): opinbert efni leyft en m.a. API, leitarköll, bókun og greiðslur bannaðar | [Skilmálar](https://www.visitor.is/skilmalar) segja verð staðfest við greiðslu. Takmarkað við leyfðar kynningarsíður; bannaðar gagnaleiðir ekki prófaðar. |
| Fjallakofinn | [200](https://ferdir.fjallakofinn.is/robots.txt): `/stats/` bannað; 5 sek. töf fyrir msnbot | [Skilmálar](https://ferdir.fjallakofinn.is/is/page/skilmalar) fjalla um áætlað verð og skriflega staðfestingu. Gagnaleyfi óstaðfest. |
| Obeo Afríka | [200](https://obeoafrika.is/robots.txt): WordPress-/körfutakmarkanir | [Skilmálar](https://obeoafrika.is/skilmalar/) lýsa m.a. lágmarksþátttöku og verðbreytingum. Sýnilegt „laus sæti“ tryggir því ekki að ferð verði farin. Gagnaleyfi óstaðfest. |

Tvö aukalén voru könnuð vegna innfellinga/skilmála: [heimsferdir.cloud/robots.txt](https://heimsferdir.cloud/robots.txt) skilaði 404; [skilmalar.fitravel.net/robots.txt](https://skilmalar.fitravel.net/robots.txt) skilaði HTTP 200 en ferðaskilmála-HTML, ekki robots-reglum. Cloud-skriftur voru ekki sóttar til frekari verðleitar.

Í framleiðslu þyrfti að endurlesa reglurnar fyrir hverja gagnaleið, geyma heimild og samningsumfang og stöðva söfnun þegar 401/403, CAPTCHA eða bann kemur upp. Fyrir þessa hugmynd er skriflegt samþykki til útdráttar, skyndiminnis, birtingar verðs, myndanotkunar og áframvísunar mikilvægt næsta afhendingarskilyrði; skilmálalesturinn hér leysir það ekki af hólmi.

## 6. Sameiginleg kerfi og möguleg einföldun

| Niðurstaða | Staða og afleiðing |
|---|---|
| Juniper hjá Heimsferðum, Úrvali Útsýn, Sumarferðum og Plúsferðum | **[S]** Merkingar, sameiginlegir auðlindastígar og sambærileg pakkaferðaleit í HTML. **[Á]** Einn grunnmilliliður með vörumerkjastillingum gæti nýst. **[Ó]** Sameiginlegt API, sama gagnasafn, sama verð eða aðgangur með einum samningi. |
| Next.js hjá Evrópuferðum og Ameríkuferðum | **[S]** Sami lögaðili og sama tegund HTML/innbyggðra gagna. **[Á]** Sameiginleg efnisafhending gæti verið einföld. **[Ó]** Bókunarkerfi og sameiginlegt birgjaviðmót. Next.js er veframmi, ekki bókunarkerfi. |
| WordPress hjá Mundo, Fararsniði og Obeo | **[S]** Kerfisvísbendingar í HTML. **[Ó]** Sameiginlegt bókunarkerfi. Mundo hefur sérstaklega WP Travel Engine; sameiginlegt CMS eitt og sér nægir ekki til samnýtingar ferðavinnslu. |
| Bændaferðir og Súla | **[S]** Sama skráða félag/hjáheiti. **[Ó]** Sömu API eða vörugögn; Súla ekki prófuð sérstaklega. |
| Aventura, Visitor og Icelandair | **[Ó]** Engin sameiginleg bókunarvél staðfest. Amadeus-tenging Visitor er ekki sönnun um sama framenda og aðrir. |

Ekki fannst eitt opinbert, skjalfest ferðagagna-API sem nær yfir úrtakið. Bændaferðir hafa staðfest vefkall og Aventura staðfestar JSON-skrár; önnur REST-/JSON-ummerki eru ekki staðfest ferðaviðmót.

## 7. Hvað þyrfti fyrsta yfirlitið að samræma?

**[Á]** Geyma þarf aðskilin hugtök: ferðalýsingu, dagsetta brottför, verðtilboð fyrir ákveðna samsetningu og framboðsmælingu. Annars yrði hótel, ferðahugmynd og staðfest pakkaferð ranglega sama vara.

Lágmarksfærslan ætti að hafa auðkenni gagnagjafa, söluheiti, lögaðila/skipuleggjanda, upprunaslóð, heiti, áfangastaði, ferðaflokk, brottfararstað, dagsetningar, daga **og** nætur, verð, gjaldmiðil, verðgerð, farþega-/herbergisforsendur, innifalið, bókunarhlekk og sóknar-/uppfærslutíma. Framboð þarf eigin stöðu: `unknown`, auglýsingamerking, fyrirspurn, uppselt eða staðfest við samþykkta leit.

Vantar gögn skal geyma það sem óþekkt. Ekki fylla í með núlli, ekki túlka bókunarhnapp sem laus sæti og ekki endurnefna dagsetningu heimferðar sem lendingartíma á Íslandi án fluggagna. Varðveita þarf URL-fragment Aventura; það inniheldur leitarforsendur þótt það sé ekki sent með venjulegu HTTP-kalli.

Fyrsta útgáfa gæti sýnt heiti, flokk, áfangastað, dagsetningar þegar þær fást, auglýst verð með forsendum, aldur upplýsinga og hlekk. Verð án fullnægjandi einingar eða fluginnihalds ætti ekki að raða sem samanburðarhæfu „ódýrasta verði“. Sama hótel eða sama flug hjá tveimur vörumerkjum er heldur ekki sjálfkrafa sama tilboð.

## 8. Rökstutt hagkvæmnismat og næsti áfangi

**Staðfestur tæknilegur grunnur:** HTML nægði til að lesa mikið kynningarefni hjá 16 af 18 söluvefjum í beinu úrtaki. Það þýðir ekki að öll ellefu umbeðin svið hafi fengist hjá þeim öllum. Þrjár dýptarprófanir gáfu raunveruleg, nothæf ferðagögn og sýndu tvær einfaldar gagnaleiðir: HTML með litlu vefkalli og opinberar JSON-skrár. Fjögur stærri vörumerki nota Juniper.

**Ályktun um umfang:** Heildaryfirlit yfir *auglýstar ferðir* er tæknilega raunhæft í áföngum. Fyrir *allar skrifstofur strax* eru of stór óprófuð atriði: ótæmandi markaðsskrá, 403-varnir hjá tveimur aðilum, takmarkandi notendaskilmálar, handskrifaðar ferðaupplýsingar, sérsniðnar ferðir og óstaðfest birgjaviðmót. Ekkert í prófuninni styður alhliða rauntímaverðleit.

**Ráðlagður fyrsti áfangi [Á]:** Afmarka 3–5 samþykkta gagnagjafa og dagsettar pakka-/sérferðir. Hefja samstarfsumræðu við FÍ um fjögur Juniper-vörumerki, Bændaferðir um skipulagt ferðayfirlit og Aventura um stöðuga JSON-afhendingu. Velja síðan einn eða tvo HTML-gjafa með skýrum verðforsendum. Þetta er tillaga; enginn þessara aðila hefur samþykkt samstarf og engin skilaboð voru send.

Til að taka ákvörðun um framleiðslu þarf að fá skýra heimild, staðfesta tæmandi afhendingu innan umsaminna vöruflokka, skilgreina verðeiningu og framboð, og fá prufugögn yfir fleiri brottfarir. Prófa þarf sérstaklega breytingar, uppseldar/aflýstar ferðir, liðnar ferðir, núllverð, fjölskylduverð og flug sem lendir daginn eftir heimferðardag.

**Lokamat:** Já, raunhæft er að byggja gagnlegt fyrsta ferðayfirlit úr hluta þessara skrifstofa og fjölga þeim með samstarfi. Nei, þessi könnun réttlætir ekki að fyrsta yfirlitið lofi öllum skrifstofum, öllu framboði eða staðfestu bókunarverði. Sú heildarsýn er mögulegt langtímaverkefni, háð viðskiptasamstarfi og sértækum gagnatengingum; hún fæst ekki með einum almennum vefskrapara.
