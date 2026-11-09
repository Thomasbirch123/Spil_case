# Spil_case

Den kodede del er en simpel side, hvor I afprøver det, I lærer i programmeringsundervisningen, på jeres egne spildata. Den skal ikke ligne Figma-prototypen 1:1, og den behøver ikke have samme visuelle ambitionsniveau.

Spillene ligger i en JavaScript-fil som et array af objekter, bygget ud fra jeres objekt- og attributkortlægning. Der er ingen database, og I skal ikke kunne tilføje, redigere eller slette spil.

Siden skal kunne:

Vise alle spil (fx som kort) ved hjælp af forEach
Søge i spillene med et tekstfelt og en knap (toLowerCase, trim, includes)
Filtrere med fx radioknapper og/eller checkbokse til kategori og et range-input til fx spilletid eller antal spillere (filter)
Sortere via en select-boks med foruddefinerede kriterier, fx titel eller spilletid (sort)
I skal desuden bruge mindst én mængdeoperation meningsfuldt, fx:

Bruge includes til at afgøre, om et spils kategori (element) findes blandt de valgte filterkriterier (mængden)
Kombiner flere filtre som en fællesmængde (spil, der passer på alle valgte filtre)
Kombiner flere attribut-værdier som en foreningsmængde (spil, der passer på mindst én af dem)
Detaljevisningen er i denne løsning lavet som en selvstændig side. Hvert kort på oversigten sender spillets id med i adressen, og `case_spil.js` finder det korrekte spil i det fælles array i `data.js`.

## Åbn løsningen

Åbn `index.html` i en browser. Klik på et af de 12 spil for at åbne detaljesiden. Reservationstogglen er kun en visuel prototype: den gemmer ingen reservation og viser ikke et badge ved profilikonet.

## Implementeret

- 12 spil med egne data og lokale SVG-forsider
- kort bygget med `forEach`
- søgning med tekstfelt og knappen “Søg” (`toLowerCase`, `trim`, `includes`)
- kombinerede filtre for spillere, kategori, spilletid og sværhedsgrad (`filter`, `includes`)
- sortering efter titel eller spilletid (`sort`)
- individuel detaljevisning med info, regler og en rent visuel reservationstilstand


