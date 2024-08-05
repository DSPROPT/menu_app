export const pizzas = [
  {
      id: "pizza-margherita",
      name: "Margherita Pizza",
      description: "Een tijdloze klassieker, onze Pizza Margherita is een symfonie van versgeplukte, zongerijpte tomaten, romige mozzarella en aromatische oregano. Eenvoudig maar diep heerlijk, deze pizza vangt het hart van de Italiaanse culinaire traditie.",
      ingredients: ["Tomaat", "Mozzarella", "Oregano"],
      prices: { small: 12.5, medium: 16.5, large: 26.5 },
      imageKey: "pizza-margherita"
  },
  {
      id: "pizza-pepperoni",
      name: "Pepperoni Pizza",
      description: "Geniet van de gedurfde smaken van onze Pizza Pepperoni, waarbij elk stuk is gevuld met pittige, knapperige pepperoni, bovenop een rijke tomatenbasis en kleverige mozzarella, afgewerkt met een vleugje oregano voor een extra smaakimpuls.",
      ingredients: ["Tomaat", "Mozzarella", "Pepperoni", "Oregano"],
      prices: { small: 13.9, medium: 17.9, large: 27.5 },
      imageKey: "pizza-pepperoni"
  },
  {
      id: "prosciutto-funghi",
      name: "Ham en Champignons Pizza",
      description: "Ontdek de hartige geneugten van onze Pizza Prosciutto e Funghi, met dun gesneden, gerookte ham en aardse champignons. Een vleugje knoflook en aromatische oregano tilt deze pizza naar een hoger niveau, waardoor elke hap perfect is.",
      ingredients: ["Tomaat", "Mozzarella", "Ham", "Champignons", "Knoflook", "Oregano"],
      prices: { small: 14.5, medium: 18.5, large: 29.5 },
      imageKey: "prosciutto-funghi"
  },
  {
      id: "pizza-di-salami",
      name: "Salami Pizza",
      description: "Onze Pizza di Salami biedt een robuuste smaakervaring, waarbij pittige salamiplakjes gecombineerd worden met zoete uien, allemaal uitgespreid over een klassieke tomaten- en mozzarellabasis, met oregano-strooisels om de rijke vleessmaken te versterken.",
      ingredients: ["Tomaat", "Mozzarella", "Salami", "Ui", "Oregano"],
      prices: { small: 13.9, medium: 17.9, large: 28.5 },
      imageKey: "pizza-di-salami"
  },
  {
      id: "pizza-alla-bolognese",
      name: "Bolognese Pizza",
      description: "Een stevige keuze, de Pizza alla Bolognese is een feest van traditionele Bolognese saus, gemengde paprika's en verse champignons, gelaagd met mozzarella. Het is een rijke en bevredigende optie voor degenen die van een vleesrijke, met groenten verpakte pizza houden.",
      ingredients: ["Tomaat", "Mozzarella", "Paprika's", "Champignons", "Uien", "Bolognese", "Oregano"],
      prices: { small: 13.9, medium: 18.5, large: 29.5 },
      imageKey: "pizza-alla-bolognese"
  },
  {
      id: "pizza-meraviglia",
      name: "Meraviglia Pizza",
      description: "Onze Pizza Meraviglia is een echt wonder, bedekt met sappige champignons, romige eieren en knapperig gesneden spek. Een vleugje oregano brengt alle smaken samen, waardoor het een verrukkelijke traktatie is.",
      ingredients: ["Tomaat", "Mozzarella", "Champignons", "Ei", "Gesneden spek", "Oregano"],
      prices: { small: 14.5, medium: 18.5, large: 29.5 },
      imageKey: "pizza-meraviglia"
  },
  {
      id: "pizza-di-pollo",
      name: "Kip Pizza",
      description: "Geniet van de lichte en smaakvolle Pizza di Pollo, bedekt met malse kipstukjes, rokerig spek en rijke zwarte olijven. Een tomatenbasis en mozzarella maken het een heerlijke keuze voor pluimveeliefhebbers.",
      ingredients: ["Tomaat", "Mozzarella", "Kip", "Spek", "Zwarte Olijven", "Oregano"],
      prices: { small: 14.5, medium: 18.5, large: 29.5 },
      imageKey: "pizza-di-pollo"
  },
  {
      id: "pizza-di-tonno",
      name: "Tonijn Pizza",
      description: "Duik in de smaken van de zee met onze Pizza di Tonno, waar stukken tonijn, knapperig spek en zoete maïs een heerlijk contrast van texturen en smaken creëren, allemaal versterkt door de frisheid van uien en oregano.",
      ingredients: ["Tomaat", "Mozzarella", "Tonijn", "Spek", "Ui", "Zoete Maïs", "Oregano"],
      prices: { small: 14.5, medium: 18.5, large: 29.5 },
      imageKey: "pizza-di-tonno"
  },
  {
      id: "vegetariana",
      name: "Vegetarische Pizza",
      description: "Een tuin van smaken, onze Pizza Vegetariana is rijk aan champignons, aubergines, olijven en paprika's. Deze levendige mix op een tomaten- en mozzarellabasis biedt een gezonde en heerlijke optie voor groenteliefhebbers.",
      ingredients: ["Tomaat", "Mozzarella", "Champignons", "Aubergine", "Olijven", "Paprika's", "Oregano"],
      prices: { small: 13.9, medium: 17.9, large: 29.5 },
      imageKey: "vegetariana"
  },
  {
      id: "pizza-roma",
      name: "Roma Pizza",
      description: "Onze Pizza Roma is een feest van smaken met een royale topping van champignons, pepperoni, chorizo en ham, aangevuld met uien en mozzarella. Deze pizza is een genot voor carnivoren en biedt rijke en pittige noten.",
      ingredients: ["Tomaat", "Mozzarella", "Champignons", "Pepperoni", "Chorizo", "Ham", "Ui", "Oregano"],
      prices: { small: 14.9, medium: 20.9, large: 30.9 },
      imageKey: "pizza-roma"
  },
  {
      id: "special-of-the-house",
      name: "Huis Special Pizza",
      description: "Verwen uzelf met onze speciale huispizza met een unieke mix van vlees, kappertjes, zwarte olijven en zongedroogde tomaten. Een vleugje knoflook en oregano maakt deze pizza een gedurfde en smaakvolle keuze.",
      ingredients: ["Tomaat", "Mozzarella", "Vlees", "Kappertjes", "Zwarte Olijven", "Zongedroogde Tomaten", "Knoflook", "Oregano"],
      prices: { small: 14.9, medium: 19.9, large: 29.9 },
      imageKey: "special-of-the-house"
  },
  {
      id: "gamberi-di-mare",
      name: "Gamberi di Mare Pizza",
      description: "Een luxueuze keuze, onze Pizza Gamberi di Mare biedt sappige garnalen, romige saus en pittige ananas, bedekt met mozzarella. Het is een heerlijke mix van zoet en hartig, perfect voor zeevruchtenliefhebbers.",
      ingredients: ["Tomaat", "Mozzarella", "Garnalen", "Room", "Ananas", "Oregano"],
      prices: { small: 17.5, medium: 22.9, large: 34.9 },
      imageKey: "gamberi-di-mare"
  },
  {
      id: "pizza-di-bacalhau",
      name: "Kabeljauw Pizza",
      description: "Proef de smaak van de oceaan met onze Pizza di Bacalhau, waar vlokken kabeljauw mengen met olijven en paprika's, allemaal verrijkt met een romige saus. Deze pizza biedt een unieke zeevruchtenervaring.",
      ingredients: ["Tomaat", "Mozzarella", "Kabeljauw", "Olijven", "Paprika's", "Room", "Oregano"],
      prices: { small: 17.5, medium: 22.9, large: 34.9 },
      imageKey: "pizza-di-bacalhau"
  },
  {
      id: "diavola",
      name: "Diavola Pizza",
      description: "Voor degenen die durven, biedt onze Pizza Diavola een pittige salamitopping met zwarte olijven en een huisgemaakte pittige saus. Het is een vurige traktatie voor liefhebbers van hitte.",
      ingredients: ["Tomaat", "Mozzarella", "Pittige Salami", "Zwarte Olijven", "Huisgemaakte Pittige Saus"],
      prices: { small: 14.9, medium: 22.9, large: 30.9 },
      imageKey: "diavola"
  },
  {
      id: "speciale-di-parma",
      name: "Speciale Parma Pizza",
      description: "Ervaar de elegantie van onze Pizza Speciale di Parma, met luxe Parmaham, buffelkaas en kerstomaten. Verse basilicum en natuurlijke olie druppelen voegen een verfijnde toets toe aan deze gastronomische selectie.",
      ingredients: ["Tomaat", "Oregano", "Buffelkaas", "Parmaham", "Kerstomaten", "Basilicum", "Natuurlijke Olie"],
      prices: { small: 16.0, medium: 21.9, large: 32.9 },
      imageKey: "speciale-di-parma"
  },
  {
      id: "quattro-formaggi",
      name: "Vier Kazen Pizza",
      description: "Een paradijs voor kaasliefhebbers, onze Pizza 4 Formaggio combineert mozzarella, gorgonzola, verse kaas en Parmigiano. De rijke en romige textuur, gecombineerd met een tomatenbasis, maakt elke hap hemels.",
      ingredients: ["Tomaat", "Mozzarella", "Gorgonzola", "Verse Kaas", "Parmigiano", "Oregano"],
      prices: { small: 15.5, medium: 20.5, large: 30.9 },
      imageKey: "quattro-formaggi"
  },
  {
      id: "gamberi-di-oro",
      name: "Gamberi di Oro Pizza",
      description: "Verwen uzelf met de decadentie van onze Pizza Gamberi di Oro, met gouden garnalen, rokerig spek en onze speciale saus. Deze pizza is een luxueuze kijk op klassieke smaken.",
      ingredients: ["Tomaat", "Mozzarella", "Garnalen", "Spek", "Speciale Saus", "Oregano"],
      prices: { small: 17.5, medium: 20.9, large: 30.9 },
      imageKey: "gamberi-di-oro"
  },
  {
      id: "prosciutto-rucola-pizza",
      name: "Ham en Rucola Pizza",
      description: "Onze Pizza de Presunto com Rúcula biedt een heerlijke balans van hartige ham, peperige rucola en verse kaasblokjes, afgewerkt met een vleugje balsamicoazijn voor een vleugje zoetheid.",
      ingredients: ["Tomaat", "Oregano", "Rucola", "Ham", "Vers Kaasblokje", "Balsamicoazijn"],
      prices: { small: 15.5, medium: 20.5, large: 30.9 },
      imageKey: "prosciutto-rucola-pizza"
  },
  {
      id: "sicilia",
      name: "Sicilia Pizza",
      description: "Ga op een smaakvolle reis met onze Pizza Sicilia, een combinatie van champignons, spinazie, ham en Parmigiano. Deze pizza biedt een stevige en bevredigende hap bij elke beet.",
      ingredients: ["Tomaat", "Mozzarella", "Champignons", "Spinazie", "Ham", "Parmigiano", "Oregano"],
      prices: { small: 15.5, medium: 20.5, large: 30.9 },
      imageKey: "sicilia"
  },
  {
      id: "carbonara",
      name: "Carbonara Pizza",
      description: "Geïnspireerd door het klassieke pastagerecht, onze Pizza Carbonara is een romige verrukking met mozzarella, gesneden spek en champignons. Het is een rijke en verwennerijke optie die zeker zal bevallen.",
      ingredients: ["Room", "Mozzarella", "Gesneden Spek", "Champignons", "Oregano"],
      prices: { small: 15.5, medium: 20.5, large: 30.9 },
      imageKey: "carbonara"
  },
  {
      id: "pizza-vegan",
      name: "Vegan Pizza",
      description: "Onze Pizza Vegan is een kleurrijk feest voor de zintuigen, volgestapeld met rode ui, courgette, broccoli, champignons, ananas, en paprika's. Het is een levendige en gezonde keuze die zowel op smaak als voedingswaarde levert.",
      ingredients: ["Tomaat", "Oregano", "Rode Ui", "Courgette", "Broccoli", "Champignons", "Ananas", "Paprika's", "Rucola"],
      prices: { small: 15.5, medium: 20.5, large: 30.9 },
      imageKey: "pizza-vegan"
  }
];
