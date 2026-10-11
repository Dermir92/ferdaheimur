# Sannprófun — 11. október 2026

## Sjálfvirk próf

`npm test`: 15 próf standast. Þau ná til varðveislu raunverulegra fjárhæða og eininga, óstaðfests framboðs, merkingar tilbúinna gagna, samsettra sía, íslenskra stafa, verðröðunar, óþekktra dagsetninga og lengda, tómra niðurstaðna, URL-ástands, íslenskra sniða án ICU, vantaðra upplýsinga á korti, HTML-escaping, áframvísunarléna og villna í gagnasókn.

`npm run check`: JavaScript-setningafræði, JSON og allar fjórar staðbundnar myndaskrár standast.

`node scripts/smoke.mjs` með vefþjón í gangi: HTTP-svör forsíðu, eininga og mynda; aðgangur að rannsóknarskjölum, README og git-stillingum lokaður, líka með kóðuðum traversal-slóðum.

## Framkvæmd vafrapróf

Prófað í Chromium-vafra Codex á þessari tölvu með keyrandi staðbundnum Node-þjóni.

| Flæði | Niðurstaða |
| --- | --- |
| Upphafssíða | 10 ferðakort; myndir hlaðast; röðun eftir brottför. |
| Leit að Tenerife | 4 niðurstöður og rétt URL-ástand. |
| Tenerife + nóvember 2026 + sólarferð + Heimsferðir + 5–9 nætur | Ein niðurstaða: Vetrarsól á Tenerife. |
| Endurhleðsla samsettrar leitar | Sama niðurstaða og allar síur varðveittar. |
| Lægsta verð | 7 færslur, 159.900 → 329.900 kr.; 3 undanskildar, með skýringu. |
| Hæsta verð | Sama safn í öfugri verðröð. |
| Japan, engin samsvörun | Tóm leit með hreinsun sem endurheimtir allar 10 ferðir. |
| Borgarferðir | Búdapest og Helgarferð til Prag. |
| Til baka í vafra | Fyrra síuástand og allar ferðir endurheimt. |
| Upplýsingagluggi | Opnast og lokast; útskýrir áframvísun og verðforsendur. |
| Áfangastaðakort Prag | Leitin sýnir tvær viðeigandi ferðir. |
| 390 × 844 símaútlit | Leitarform, falanlegar síur og kort virka; ekkert lárétt yfirflæði. |
| 320 × 740 símaútlit | Kort, verð og aðalaðgerð rúmast; ekkert lárétt yfirflæði. |
| Símasíur: Aventura + 1–4 nætur | 2 niðurstöður; virkar síur og fjöldi uppfærast. |
| Gagnaskrá óaðgengileg | Villustaða, skýr texti og „Reyna aftur“. |
| Gagnaskrá endurheimt og reynt aftur | Niðurstöður endurheimtar, villustaða hverfur. |
| Raunverulegur Bændaferða-hlekkur | Rétt ferðaslóð, smellur prófaður; target=_blank og noopener noreferrer sannreynt. |
| Vafraskrá eftir eðlileg flæði | Engar JavaScript-villur eða viðvaranir. |

## Takmörk

Áframvísunarslóðir og nýr-flipi stilling eru sannreynd, en bókunarferli, endanlegt verð og lifandi framboð á ytri vefjum voru ekki sannprófuð. Innbyggði vafrinn afgreiðir ytri tengla utan prófunarflipans; engin krafa er gerð um að vefur seljanda sé tiltækur eða að ferð sé bókanleg. Ekkert var bókað og engin greiðsla framkvæmd.

Þetta eru afmörkuð próf í einum vafra með stærðarbreytingum, ekki tæmandi prófanir á öllum símum eða aðgengisvottun.

## Skjáskot

- [Tölvuútlit, heil síða](screenshots/desktop.jpg)
- [Forsíða](screenshots/home.jpg)
- [Símaútlit, heil síða](screenshots/mobile.jpg)
