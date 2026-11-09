// Fælles spildata til både oversigten og den enkelte spildetalje.
// Vurderinger er udeladt, da projektet ikke har en verificeret datakilde til dem.
const games = [
    {
        id: "codenames", title: "Codenames", image: "assets/game-covers/codenames-forside.svg",
        category: "Selskabsspil", players: "4+ spillere", playerGroup: "5+", maxPlayers: 8, time: "Ca. 15 min.", timeMinutes: 15, difficulty: "Middel",
        info: "Et holdspil med ord og associationer. To spionmestre giver korte ledetråde, mens deres hold forsøger at finde de rigtige agenter blandt ordene på bordet.",
        rules: "Læg 25 ordkort i et 5 × 5 felt. Spionmestrene ser nøglekortet og skiftes til at give ét ord og ét tal som ledetråd. Holdet må gætte det angivne antal kort og eventuelt ét ekstra. Et neutralt kort afslutter turen, et modstanderord hjælper modstanderen, og mødet med snigmorderen taber straks spillet. Første hold, der finder alle sine agenter, vinder."
    },
    {
        id: "partners-duo", title: "Partners Duo", image: "assets/game-covers/partners-duo-forside.svg",
        category: "Brætspil", players: "2 spillere", playerGroup: "2", maxPlayers: 2, time: "Ca. 30–45 min.", timeMinutes: 45, difficulty: "Middel",
        info: "En udgave af Partners udviklet til to spillere. I flytter brikker rundt på spillepladen og forsøger at få jeres egne brikker sikkert i mål før modspilleren.",
        rules: "Hver spiller styrer sine egne brikker og bruger kort til at flytte dem. Nogle kort flytter frem, andre bytter brikker eller sender en modstander hjem. Brikker skal hele vejen rundt og ind i målområdet. Planlæg kortene, beskyt dine fremskridt, og få alle dine brikker i mål først."
    },
    {
        id: "hint", title: "HINT", image: "assets/game-covers/hint-hvid-forside.svg",
        category: "Selskabsspil", players: "4+ spillere", playerGroup: "5+", maxPlayers: 8, time: "Ca. 45 min.", timeMinutes: 45, difficulty: "Let",
        info: "Et holdbaseret selskabsspil, hvor I hjælper holdkammeraterne med at gætte ord ved at tale, tegne, mime eller nynne.",
        rules: "Holdene skiftes til at vælge et kort og en formidlingsform. Formidleren giver hints til kortets ord uden at bruge selve ordene. Holdet får point for korrekte svar, men skal samtidig undgå det forbudte ord. Når tiden er gået, fortsætter næste hold. Holdet med flest point til sidst vinder."
    },
    {
        id: "ticket-to-ride", title: "Ticket to Ride", image: "assets/game-covers/ticket-to-ride-forside.svg",
        category: "Brætspil", players: "2–5 spillere", playerGroup: "5+", maxPlayers: 5, time: "Ca. 30–60 min.", timeMinutes: 60, difficulty: "Middel",
        info: "Et strategisk brætspil om at bygge jernbaner mellem byer. I samler vognkort, overtager ruter og forsøger at forbinde destinationerne på jeres billetter.",
        rules: "På din tur vælger du én handling: træk vognkort, gør krav på en rute ved at aflevere kort i den rette farve, eller træk nye destinationsbilletter. Færdige forbindelser og sammenhængende ruter giver point, mens ufuldførte billetter giver minuspoint. Flest point vinder."
    },
    {
        id: "matador", title: "Matador", image: "assets/game-covers/matador-forside.svg",
        category: "Brætspil", players: "2–6 spillere", playerGroup: "5+", maxPlayers: 6, time: "60+ min.", timeMinutes: 120, difficulty: "Middel",
        info: "Det klassiske danske handelsspil, hvor I køber grunde, opkræver leje og forsøger at opbygge den stærkeste økonomi.",
        rules: "Slå med terningerne og flyt rundt på spillepladen. Ledige grunde kan købes; ejes feltet allerede, betaler du leje. Saml hele farvegrupper for at kunne bygge og øge lejen. Aftaler og handler er en vigtig del af spillet. Den sidste spiller, der ikke er gået fallit, vinder."
    },
    {
        id: "battleship", title: "Battleship", image: "assets/game-covers/battleship-forside.svg",
        category: "Strategispil", players: "2 spillere", playerGroup: "2", maxPlayers: 2, time: "Ca. 20–30 min.", timeMinutes: 30, difficulty: "Let",
        info: "Et taktisk spil for to, hvor I skjuler jeres flåde og forsøger at lokalisere modstanderens skibe ved hjælp af koordinater.",
        rules: "Placér skibene på dit eget gitter uden at vise placeringen. Skiftes til at kalde et koordinat. Modstanderen svarer 'ramt' eller 'forbi', og resultatet markeres på søgegitteret. Når alle felter på et skib er ramt, er det sænket. Den første, der sænker hele modstanderens flåde, vinder."
    },
    {
        id: "giant-pass-the-pigs", title: "Giant Pass the Pigs", image: "assets/game-covers/giant-pass-the-pigs-forside.svg",
        category: "Selskabsspil", players: "2+ spillere", playerGroup: "5+", maxPlayers: 8, time: "Ca. 20 min.", timeMinutes: 20, difficulty: "Let",
        info: "Kast de store oppustelige grise, og få point efter den stilling, de lander i. Du bestemmer selv, hvor længe du tør fortsætte din tur.",
        rules: "Kast begge grise, og beregn point efter deres landingspositioner. Du kan stoppe og gemme turens point eller kaste igen for at samle flere. Visse kombinationer nulstiller turens point, så det gælder om at kende det rette tidspunkt at give grisene videre. Første spiller til målet vinder."
    },
    {
        id: "more-or-less", title: "More or Less", image: "assets/game-covers/more-or-less-forside.svg",
        category: "Quizspil", players: "2+ spillere", playerGroup: "5+", maxPlayers: 8, time: "Ca. 20–30 min.", timeMinutes: 30, difficulty: "Let",
        info: "Et quizspil om at vurdere, om det rigtige tal er højere eller lavere end et tal, I allerede kender. Det handler om almen viden og god mavefornemmelse.",
        rules: "Læs et spørgsmål og det tilhørende udgangspunkt. Vælg, om det korrekte svar er mere eller mindre end tallet på kortet. Et rigtigt svar bringer dig videre; et forkert svar kan koste din tur eller dine point afhængigt af den valgte spilleform."
    },
    {
        id: "the-mind", title: "The Mind", image: "assets/game-covers/the-mind-forside.svg",
        category: "Samarbejdsspil", players: "2–4 spillere", playerGroup: "4", maxPlayers: 4, time: "Ca. 20 min.", timeMinutes: 20, difficulty: "Middel",
        info: "Et stille samarbejdsspil, hvor I uden at tale skal lægge nummererede kort i stigende rækkefølge på tværs af alle hænder.",
        rules: "Hver spiller får lige så mange kort som niveauets nummer. Uden at kommunikere om kortene lægger I dem ét ad gangen i stigende rækkefølge. Lægges et for højt kort, mistes et liv, og lavere kort kasseres. Gennemfør alle niveauer sammen for at vinde."
    },
    {
        id: "hitster", title: "Hitster Original", image: "assets/game-covers/hitster-forside.svg",
        category: "Musikspil", players: "2+ spillere", playerGroup: "5+", maxPlayers: 10, time: "Ca. 30 min.", timeMinutes: 30, difficulty: "Let",
        info: "Et musikspil, hvor kendte sange skal placeres i den rigtige kronologiske rækkefølge på din egen tidslinje.",
        rules: "Scan et musikkort med den tilhørende løsning, og lyt til sangen uden at se udgivelsesåret. Placér kortet på det sted på din tidslinje, hvor du tror, det hører hjemme. Vend kortet: er placeringen rigtig, beholder du det. Den første spiller, der når spillets aftalte antal korrekte kort, vinder."
    },
    {
        id: "det-daarlige-selskab", title: "Det Dårlige Selskab", image: "assets/game-covers/det-daarlige-selskab-forside.svg",
        category: "Selskabsspil", players: "3+ spillere", playerGroup: "5+", maxPlayers: 10, time: "Ca. 30–60 min.", timeMinutes: 60, difficulty: "Let",
        info: "Et dansk selskabsspil med skæve, ofte frække svar. Én spiller læser et spørgsmål op, og de andre forsøger at levere rundens bedste kombination.",
        rules: "Rundens oplæser trækker et spørgsmålskort. De øvrige spillere vælger et svarkort fra hånden og afleverer det skjult. Svarene blandes og læses højt, hvorefter oplæseren vælger sin favorit. Kortet giver point, og rollen som oplæser går videre."
    },
    {
        id: "bezzerwizzer", title: "Bezzerwizzer", image: "assets/game-covers/bezzerwizzer-forside.svg",
        category: "Quizspil", players: "2+ spillere", playerGroup: "5+", maxPlayers: 8, time: "Ca. 45–60 min.", timeMinutes: 60, difficulty: "Middel",
        info: "Et quizspil med mange emnekategorier, hvor viden kombineres med taktiske valg og muligheden for at udfordre modstanderne.",
        rules: "Træk kategoribrikker, og placér dem efter hvor sikker du er på emnerne. Besvar spørgsmål for at rykke frem. Brug de særlige taktiske brikker til at bytte kategorier eller udfordre en modstanders svar. Første spiller eller hold over målstregen vinder."
    }
];

const products = games;
