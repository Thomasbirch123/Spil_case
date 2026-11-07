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
Hvis I har tid og lyst, kan I vise et spils detaljer i en <dialog>. Det er ikke et krav, og det er ikke en del af det, vi har gennemgået i undervisningen, så kun hvis I vil udfordre jer selv.

Husk to gode principper om søgning: Et søgefelt er et tekstfelt med en knap, der hedder ”Søg”, og brugeren skal kunne filtrere sine søgeresultater. 


