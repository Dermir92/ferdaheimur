# UX/UI-yfirferð · 11. október 2026

Framkvæmt á staðbundinni frumgerð á `http://127.0.0.1:5173/`. Engin dreifing eða opinber birting var framkvæmd. Núverandi litir, letur og myndræn stefna haldast.

## Breytingar

- Aðalmynd á tölvu er 280 px há; leit og ferðayfirlit eru þéttari. Á síma er leitin í eðlilegu síðuflæði beint undir fyrirsögn.
- Tilgangurinn „Ferðir frá íslenskum ferðaskrifstofum á einum stað“ er áberandi, ásamt „Þú bókar hjá ferðaskrifstofunni.“ Slagorðið helst óbreytt.
- Kort deila efnisröðum á tölvu með CSS subgrid. Mynd, seljandi, heiti, dagsetningar/lengd, innifalið, verð og forsendur, viðbótarupplýsingar og áframvísun haldast í sömu röð. Á síma þéttast hvert kort sjálfstætt.
- Dagsetningar og verðforsendur eru 13 px á tölvu og 14 px á síma, með sterkari lit og vægi. Smátexti og síur eru dekkri. Reitir hafa skýrar merkingar, sýnilegan lyklaborðsfókus og stærri snertisvæði.
- Öll leit notar eitt sameiginlegt ástand. Áfangastaðakort og ferðaflokkar breyta aðeins eigin skilyrði. Stök fjarlæging síu og hreinsun færa fókus á niðurstöðufyrirsögn. „Finna ferð“ færir einnig skjáinn að niðurstöðum.
- Tóm leit útskýrir samsetningu skilyrða og býður að víkka leit að sama áfangastað þegar það skilar ferð. Einnig má sjá allar ferðir.
- Myndaskrá í `src/data/media.js` tengir eigin myndskreytingar við rétta áfangastaði. Óþekkt eða ósamræmd mynd notar hlutlausan bakgrunn. Coral Teide Mar notar hlutlausa lausn þar sem staðfest hótelmynd er ekki til staðar. Endurtekning Tenerife-myndar í fyrstu röð minnkar þannig.
- Tilbúin dæmi bjóða „Skoða vef …“ og vísa á heimasíðu skrifstofu. Raunfærslur bjóða „Skoða ferð hjá …“. Búdapest vísar nú á lýsandi ferðasíðu sem þegar var í könnunargögnunum; upprunalegur bókunarhlekkur er áfram í hráum upprunagögnum.
- Fjárhæðum, verðeiningum, óþekktum gildum og flokkun auglýsts verðs/frá-verðs var ekki breytt. Engar ferðaupplýsingar voru skáldaðar inn í raunfærslur.

## Raunverulega framkvæmd vafrapróf

Prófað í Codex In-app Browser við **1440 × 900** og **390 × 844**. Mældur viewport og kvarði voru sannreynd í vafra; tölvuprófið var við kvarða 1 (100%). Eftirfarandi aðgerðir voru framkvæmdar í báðum stærðum, með raunverulegum reitum og hnöppum:

| Flæði | Niðurstaða |
| --- | --- |
| Tenerife + nóvember 2026 + Finna ferð | 1 niðurstaða: Vetrarsól á Tenerife. Fókus á niðurstöðufyrirsögn; skjár færist að niðurstöðum. |
| Bæta við Sólarferðir + Heimsferðir + 5–9 nætur | Sama 1 niðurstaða; öll fimm skilyrðin haldast. |
| Breyta ferðaflokki úr sól í borg í aðalleit | 0 niðurstöður; áfangastaður, tímabil, skrifstofa og lengd haldast. Flokkaval í yfirliti samstillist aðalleit. |
| Víkka leit úr þessari tómu leit | 4 Tenerife-ferðir; áfangastaður helst, önnur skilyrði hreinsast með skýrri aðgerð. |
| Lægsta/hæsta verð | 7 niðurstöður í réttri röð, þrjár ósambærilegar færslur undanskildar með skýringu. |
| Hreinsa síur | 10 ferðir, næsta brottför, allir reitir og flokkar endurstilltir. |
| Japan + Finna ferð | 0 niðurstöður, skýr útskýring, „Sjá allar ferðir“ endurheimtir 10. Ógagnleg víkkun er falin. |
| Nóvember + borg + Aventura + 1–4 nætur, síðan Prag-áfangastaðakort | 1 niðurstaða: Helgarferð til Prag. Öll fjögur fyrri skilyrði haldast. |
| Fjarlægja tímabil með síuflögu | Aðeins tímabil hreinsast; fókus varðveitist á niðurstöðufyrirsögn. |
| Áframvísun raunferðar og tilbúins dæmis | Smellt á Búdapest/Aventura og dæmi/vef Aventura í báðum stærðum; á síma var raunferðarhlekkur einnig virkjaður með Enter. Staðbundin leit helst opin. `target="_blank"`, `noopener noreferrer` og réttar slóðir sannreynd í DOM. |
| Lyklaborð í aðalleit | Áfangastaður → Tab → tímabil → ör niður → Tab → flokkur → Tab → Enter. Rétt tímabil, niðurstöður og fókus. Sýnileg 3 px útlína á tímabili og flokki. |
| Skjábryggjur | `scrollWidth <= innerWidth` í öllum skráðum leitarskrefum, þar á meðal með mörgum síuflögum og opnum síum á síma. |

Að auki á tölvu: endurhleðsla varðveitti allar síur úr URL, Til baka endurheimti fjarlægt tímabil og upplýsingagluggi opnaðist með Enter, lokaðist með Escape og skilaði fókus til upprunahnapps. Verðupplýsingar voru opnaðar á Sumarferða- og Bændaferðakortum: óstaðfest eining/tenging frá-verðs við dagsetningar og 86.900 kr. einbýlisálag voru áfram aðgengileg.

## Mælingar og útlit

- **1440 × 900, efst á síðu:** heiti allra fyrstu þriggja kortanna byrja við y ≈ 835; dagsetningar og lengd enda við y ≈ 890. Þau sjást því án skrúllunar. Kortin eru um 485 px há og verðraðir þeirra byrja í sömu hæð. Bil frá inniföldum atriðum að verðsvæði er 12 px.
- **390 × 844, efst á síðu:** aðalleit endar við y ≈ 493, ferðayfirlit byrjar við y ≈ 517 og fyrsta kort við y ≈ 717. Leit, yfirlitsstýringar og byrjun fyrsta korts sjást strax. Eftir Finna ferð sést heilt fyrsta kort með verðforsendum og áframvísun.
- Mæld snertihæð sýnilegra aðalstýringa á síma var að minnsta kosti 44 px; áframvísanir 48 px. Síureitirnir voru einnig 44 px háir.
- Reiknuð textalitaskil á föstum bakgrunni: dagsetningar 7,97:1, verðforsendur 7,82:1, óvirkir flokkar 6,91:1, aðalleitarhnappur 11,69:1 og áframvísun 8,66:1. Ljósgrænn smátexti mældist fyrst 4,32:1 og var dekkjaður í 5,51:1. Þetta er afmörkuð athugun, ekki full WCAG-úttekt; myndbakgrunnar voru skoðaðir sjónrænt.
- Engar console-villur eða viðvaranir sáust við lokayfirferð.

## Ytri áframvísanir

Allar fjórar raunverulegu slóðirnar voru opnaðar í sérstöku prófunartabbi, án bókunar eða innsláttar persónuupplýsinga:

| Færsla | Það sem var staðfest á vef seljanda |
| --- | --- |
| Bændaferðir, Vorgleði í Prag & Brno | Rétt heiti og 3.–10. maí 2027 á ferðasíðunni. |
| Aventura, Búdapest | Lýsandi Búdapest-síða með ferðaupplýsingum. |
| Aventura, Coral Teide Mar | Rétt hótelheiti á áfangasíðunni; upprunalegar leitarbreytur og fragment haldast. |
| Sumarferðir, Tenerife | Slóðin myndaði nýja seljandasetu og sýndi Tenerife, 14.–21. október 2026 og tvo fullorðna. |

Þetta staðfestir viðeigandi áfangasíður. Verð, sætaframboð, endanlegt ferðatilboð og bókunarferli seljenda voru **ekki** sannprófuð. Sjálf nýja-flipa-höndlun stýrikerfisins var ekki skoðuð; prófunarvafrinn hélt staðbundna tabbi opnu og áfangasíðurnar voru því opnaðar sérstaklega.

## Verkefnisathuganir

- `npm test`: **19/19** próf standast. Ný próf ná yfir varðveislu samsettra sía, víkkun leitar, hlutlaust myndefni og réttan tilgang hlekkja tilbúinna dæma.
- `npm run check`: JavaScript, JSON og myndaskrár standast.
- `node scripts/smoke.mjs`: **16** staðbundnar síður/skrár og **5** aðgangspróf standast.

## Skjáskot og gögn

- [Tölva, efst á síðu, 1440 × 900](screenshots/ux-desktop-1440x900.jpg)
- [Tölva, niðurstöður og verðforsendur, 1440 × 900](screenshots/ux-desktop-results-1440x900.jpg)
- [Sími, efst á síðu, 390 × 844](screenshots/ux-mobile-390x844.jpg)
- [Sími, niðurstöður og verðforsendur, 390 × 844](screenshots/ux-mobile-results-390x844.jpg)
- Skráð vafraástand og mælingar eru varðveitt staðbundið í `screenshots/ux-browser-evidence.json`; skráin er ekki send í GitHub-geymsluna. Niðurstöðurnar eru teknar saman hér að ofan.

## Óleyst og utan prófunar

Engin óleyst villa kom fram í framangreindum leitarskrefum. Próf fóru fram í einum vafra með hermdum skjástærðum, ekki á raunverulegum síma eða með skjálesara. Hleðslubilun/endurtenging var ekki framkölluð í vafra í þessari UX-yfirferð; gagnalagspróf sannreynir áfram villuboðun. CSS subgrid-varaleið var ekki sérstaklega prófuð í eldri vöfrum.

Myndefnið er áfram fjórar eigin myndskreytingar. Sama áfangastaðamynd getur endurtekið sig; engar viðbótarstaðfestar myndheimildir voru til staðar. Myndirnar eru ekki heimild um tiltekið hótel eða ferðaaðstöðu. Gögnin eru áfram afmarkað könnunarsýnishorn og sex tilbúin dæmi. Raungagnatengingar, birtingarheimildir og lifandi verð/framboð bíða áfram næsta áfanga.
