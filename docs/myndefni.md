# Myndefni

Allar fjórar PNG-myndirnar voru búnar til fyrir verkefnið með innbyggðu ImageGen-tóli 11. október 2026. Þær eru almennar áfangastaðamyndir og ekki staðfestar ljósmyndir af ferðaaðstöðu. Upprunalegar myndir og C2PA-lýsigögn haldast í PNG-skránum. Engin mynd ferðaskrifstofu var afrituð.

Skrár eru undir `public/images/`: `tenerife.png`, `prague.png`, `budapest.png` og `algarve.png`. Merki og tákn eru gerð beint í HTML/SVG í verkefninu. Kerfisletur eru notuð; engar ytri letur- eða myndabeiðnir fara frá síðunni.

## Birtingarreglur eftir UX-yfirferð

`src/data/media.js` skráir uppruna, leyfilega áfangastaði og alt-texta sem lýsir myndskreytingum. Ferðakort birta aðeins skráða mynd sem passar við áfangastað. Óþekkt eða ósamræmt myndefni notar hlutlausan bakgrunn með hnetti og heiti áfangastaðar. Coral Teide Mar notar þessa lausn þar sem engin staðfest hótelmynd er í verkefninu. Aðalmynd er merkt sem innblástur frá Kanaríeyjum. Almennar áfangastaðamyndir geta endurtekið sig; engin mynd er sett fram sem staðfesting á ferðaaðstöðu.

## Fyrirmæli myndgerðar

### Tenerife

Use case: photorealistic-natural. Create ONE premium editorial travel photograph, wide landscape format, for a travel discovery website. View down to a quiet golden sand beach and turquoise Atlantic water in Tenerife, Canary Islands, a few palm trees and warm cream coastal buildings at the left edge, distant rugged hazy headland, beautiful natural late afternoon sunshine, restrained film-like colors, realistic fine detail, no crowds. Composition: coastline sweeps diagonally from bottom left toward top right; blue sky in upper 30 percent with plenty of calm negative space, deep teal sea. No text, no logos, no borders, no watermarks. Save the generated image as an asset.

### Prag

Use case: photorealistic-natural. One wide editorial travel photograph for a premium travel search website. Prague, Czech Republic, authentic view of Charles Bridge across Vltava toward the old town and its red rooftops and church domes. Soft warm morning sunshine, light blue sky, natural understated colors, realistic photographic texture, no people prominent. Landscape 3:2 composition. No lettering, no logos, no frames, no watermarks.

### Búdapest

Use case: photorealistic-natural. Single wide editorial travel photograph of Budapest, Hungary, looking across the blue Danube toward the iconic Hungarian Parliament building in warm afternoon light, pale blue sky, intricate stone details, leafy riverside, relaxed travel magazine mood, understated natural colors, realistic photograph. Landscape composition, river in lower third, no text, no logos, no watermarks, no borders.

### Algarve

Use case: photorealistic-natural. Single premium editorial travel photograph of the Algarve coast, Portugal. Elevated view of golden limestone cliffs and sea arches at Praia da Marinha with a quiet sandy beach, clear turquoise water, Mediterranean shrubs on cliff tops, hazy blue sky, natural warm afternoon sunlight, realistic fine detail and restrained travel magazine colors. Wide landscape 3:2 format. No text, no logos, no watermarks.
