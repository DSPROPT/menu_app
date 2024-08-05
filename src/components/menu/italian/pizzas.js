export const pizzas = [
  {
      id: "pizza-margherita",
      name: "Pizza Margherita",
      description: "Un classico senza tempo, la nostra Pizza Margherita è una sinfonia di pomodori freschi maturati al sole, mozzarella cremosa e origano aromatico. Semplice ma profondamente deliziosa, questa pizza cattura l'essenza della tradizione culinaria italiana.",
      ingredients: ["Pomodoro", "Mozzarella", "Origano"],
      prices: { small: 12.5, medium: 16.5, large: 26.5 },
      imageKey: "pizza-margherita"
  },
  {
      id: "pizza-pepperoni",
      name: "Pizza Pepperoni",
      description: "Lasciati tentare dai sapori intensi della nostra Pizza Pepperoni, dove ogni fetta è ricca di pepperoni piccante, su una base di pomodoro ricco e mozzarella filante, completata con un pizzico di origano per un extra tocco di sapore.",
      ingredients: ["Pomodoro", "Mozzarella", "Pepperoni", "Origano"],
      prices: { small: 13.9, medium: 17.9, large: 27.5 },
      imageKey: "pizza-pepperoni"
  },
  {
      id: "prosciutto-funghi",
      name: "Pizza Prosciutto e Funghi",
      description: "Esplora i piaceri sapidi della nostra Pizza Prosciutto e Funghi, che presenta prosciutto finemente affettato e funghi terrosi. Un tocco di aglio e origano aromatico eleva questa pizza, rendendo ogni morso una perfetta combinazione di sapori.",
      ingredients: ["Pomodoro", "Mozzarella", "Prosciutto", "Funghi", "Aglio", "Origano"],
      prices: { small: 14.5, medium: 18.5, large: 29.5 },
      imageKey: "prosciutto-funghi"
  },
  {
      id: "pizza-di-salami",
      name: "Pizza di Salame",
      description: "La nostra Pizza di Salame offre un'esperienza gustativa robusta, combinando fette di salame piccante con cipolle dolci, tutto su una base classica di pomodoro e mozzarella, con spolverate di origano per arricchire i sapori ricchi della carne.",
      ingredients: ["Pomodoro", "Mozzarella", "Salame", "Cipolla", "Origano"],
      prices: { small: 13.9, medium: 17.9, large: 28.5 },
      imageKey: "pizza-di-salami"
  },
  {
      id: "pizza-alla-bolognese",
      name: "Pizza alla Bolognese",
      description: "Una scelta sostanziosa, la Pizza alla Bolognese è un banchetto di salsa bolognese tradizionale, peperoni misti e funghi freschi, stratificati con mozzarella. È un'opzione ricca e soddisfacente per chi ama una pizza ricca di carne e verdure.",
      ingredients: ["Pomodoro", "Mozzarella", "Peperoni", "Funghi", "Cipolle", "Bolognese", "Origano"],
      prices: { small: 13.9, medium: 18.5, large: 29.5 },
      imageKey: "pizza-alla-bolognese"
  },
  {
      id: "pizza-meraviglia",
      name: "Pizza Meraviglia",
      description: "La nostra Pizza Meraviglia è un vero miracolo, ricoperta di funghi succulenti, uova cremose e pancetta croccante. Un tocco di origano lega tutti i sapori insieme, rendendola una delizia per il palato.",
      ingredients: ["Pomodoro", "Mozzarella", "Funghi", "Uovo", "Pancetta", "Origano"],
      prices: { small: 14.5, medium: 18.5, large: 29.5 },
      imageKey: "pizza-meraviglia"
  },
  {
      id: "pizza-di-pollo",
      name: "Pizza di Pollo",
      description: "Goditi la leggerezza e il sapore della nostra Pizza di Pollo, guarnita con pezzi di pollo teneri, pancetta affumicata e olive nere ricche. Una base di pomodoro e mozzarella la rende una scelta deliziosa per gli amanti del pollame.",
      ingredients: ["Pomodoro", "Mozzarella", "Pollo", "Pancetta", "Olive nere", "Origano"],
      prices: { small: 14.5, medium: 18.5, large: 29.5 },
      imageKey: "pizza-di-pollo"
  },
  {
      id: "pizza-di-tonno",
      name: "Pizza di Tonno",
      description: "Immergiti nei sapori del mare con la nostra Pizza di Tonno, dove pezzi di tonno, pancetta croccante e mais dolce creano un delizioso contrasto di texture e gusti, tutto esaltato dalla freschezza delle cipolle e dell'origano.",
      ingredients: ["Pomodoro", "Mozzarella", "Tonno", "Pancetta", "Cipolla", "Mais dolce", "Origano"],
      prices: { small: 14.5, medium: 18.5, large: 29.5 },
      imageKey: "pizza-di-tonno"
  },
  {
      id: "vegetariana",
      name: "Pizza Vegetariana",
      description: "Un giardino di sapori, la nostra Pizza Vegetariana è ricca di funghi, melanzane, olive e peperoni. Questo mix vibrante su una base di pomodoro e mozzarella offre un'opzione salutare e deliziosa per gli amanti delle verdure.",
      ingredients: ["Pomodoro", "Mozzarella", "Funghi", "Melanzane", "Olive", "Peperoni", "Origano"],
      prices: { small: 13.9, medium: 17.9, large: 29.5 },
      imageKey: "vegetariana"
  },
  {
      id: "pizza-roma",
      name: "Pizza Roma",
      description: "La nostra Pizza Roma è un festino di sapori con un generoso condimento di funghi, pepperoni, chorizo e prosciutto, completato da cipolle e mozzarella. Questa pizza è un delizia per i carnivori, offrendo note ricche e speziate.",
      ingredients: ["Pomodoro", "Mozzarella", "Funghi", "Pepperoni", "Chorizo", "Prosciutto", "Cipolla", "Origano"],
      prices: { small: 14.9, medium: 20.9, large: 30.9 },
      imageKey: "pizza-roma"
  },
  {
      id: "special-of-the-house",
      name: "Pizza Speciale della Casa",
      description: "Lasciati tentare dalla nostra pizza speciale della casa con un mix unico di carne, capperi, olive nere e pomodori secchi. Un tocco di aglio e origano rende questa pizza una scelta audace e saporita.",
      ingredients: ["Pomodoro", "Mozzarella", "Carne", "Capperi", "Olive nere", "Pomodori secchi", "Aglio", "Origano"],
      prices: { small: 14.9, medium: 19.9, large: 29.9 },
      imageKey: "special-of-the-house"
  },
  {
      id: "gamberi-di-mare",
      name: "Pizza Gamberi di Mare",
      description: "Una scelta lussuosa, la nostra Pizza Gamberi di Mare offre gamberi succulenti, salsa cremosa e ananas tangy, ricoperta di mozzarella. È un delizioso mix di dolce e salato, perfetto per gli amanti dei frutti di mare.",
      ingredients: ["Pomodoro", "Mozzarella", "Gamberi", "Panna", "Ananas", "Origano"],
      prices: { small: 17.5, medium: 22.9, large: 34.9 },
      imageKey: "gamberi-di-mare"
  },
  {
      id: "pizza-di-bacalhau",
      name: "Pizza di Baccalà",
      description: "Assapora il gusto dell'oceano con la nostra Pizza di Baccalà, dove fiocchi di baccalà si mescolano con olive e peperoni, tutto arricchito da una salsa cremosa. Questa pizza offre un'esperienza unica di frutti di mare.",
      ingredients: ["Pomodoro", "Mozzarella", "Baccalà", "Olive", "Peperoni", "Panna", "Origano"],
      prices: { small: 17.5, medium: 22.9, large: 34.9 },
      imageKey: "pizza-di-bacalhau"
  },
  {
      id: "diavola",
      name: "Pizza Diavola",
      description: "Per chi ama il piccante, la nostra Pizza Diavola offre un condimento di salame piccante con olive nere e una salsa piccante fatta in casa. È un trattamento ardente per gli amanti del calore.",
      ingredients: ["Pomodoro", "Mozzarella", "Salame piccante", "Olive nere", "Salsa piccante fatta in casa"],
      prices: { small: 14.9, medium: 22.9, large: 30.9 },
      imageKey: "diavola"
  },
  {
      id: "speciale-di-parma",
      name: "Pizza Speciale di Parma",
      description: "Vivi l'eleganza della nostra Pizza Speciale di Parma, con prosciutto di Parma lussuoso, formaggio di bufala e pomodori ciliegia. Un filo di olio naturale e basilico fresco aggiungono un tocco raffinato a questa selezione gourmet.",
      ingredients: ["Pomodoro", "Origano", "Formaggio di bufala", "Prosciutto di Parma", "Pomodori ciliegia", "Basilico", "Olio naturale"],
      prices: { small: 16.0, medium: 21.9, large: 32.9 },
      imageKey: "speciale-di-parma"
  },
  {
      id: "quattro-formaggi",
      name: "Pizza Quattro Formaggi",
      description: "Un paradiso per gli amanti del formaggio, la nostra Pizza Quattro Formaggi unisce mozzarella, gorgonzola, formaggio fresco e Parmigiano. La texture ricca e cremosa, abbinata a una base di pomodoro, rende ogni boccone divino.",
      ingredients: ["Pomodoro", "Mozzarella", "Gorgonzola", "Formaggio fresco", "Parmigiano", "Origano"],
      prices: { small: 15.5, medium: 20.5, large: 30.9 },
      imageKey: "quattro-formaggi"
  },
  {
      id: "gamberi-di-oro",
      name: "Pizza Gamberi di Oro",
      description: "Lasciati tentare dalla decadenza della nostra Pizza Gamberi di Oro, che presenta gamberi dorati, pancetta affumicata e la nostra salsa speciale. Questa pizza è una versione lussuosa dei sapori classici.",
      ingredients: ["Pomodoro", "Mozzarella", "Gamberi", "Pancetta", "Salsa speciale", "Origano"],
      prices: { small: 17.5, medium: 20.9, large: 30.9 },
      imageKey: "gamberi-di-oro"
  },
  {
      id: "prosciutto-rucola-pizza",
      name: "Pizza Prosciutto e Rucola",
      description: "La nostra Pizza Prosciutto e Rucola offre un delizioso equilibrio di prosciutto saporito, rucola pepata e quadrotti di formaggio fresco, completata con un goccio di aceto balsamico per un tocco di dolcezza.",
      ingredients: ["Pomodoro", "Origano", "Rucola", "Prosciutto", "Formaggio fresco a cubetti", "Aceto balsamico"],
      prices: { small: 15.5, medium: 20.5, large: 30.9 },
      imageKey: "prosciutto-rucola-pizza"
  },
  {
      id: "sicilia",
      name: "Pizza Siciliana",
      description: "Intraprendi un viaggio ricco di sapori con la nostra Pizza Siciliana, una combinazione di funghi, spinaci, prosciutto e Parmigiano. Questa pizza offre un morso corposo e soddisfacente ad ogni fetta.",
      ingredients: ["Pomodoro", "Mozzarella", "Funghi", "Spinaci", "Prosciutto", "Parmigiano", "Origano"],
      prices: { small: 15.5, medium: 20.5, large: 30.9 },
      imageKey: "sicilia"
  },
  {
      id: "carbonara",
      name: "Pizza Carbonara",
      description: "Ispirata al classico piatto di pasta, la nostra Pizza Carbonara è un delizioso piacere cremoso con mozzarella, pancetta affettata e funghi. È un'opzione ricca e indulgente che sicuramente piacerà.",
      ingredients: ["Panna", "Mozzarella", "Pancetta affettata", "Funghi", "Origano"],
      prices: { small: 15.5, medium: 20.5, large: 30.9 },
      imageKey: "carbonara"
  },
  {
      id: "pizza-vegan",
      name: "Pizza Vegana",
      description: "La nostra Pizza Vegana è un festa colorata per i sensi, abbondantemente guarnita con cipolla rossa, zucchine, broccoli, funghi, ananas e peperoni. È una scelta vivace e salutare che offre sia in termini di gusto che di nutrizione.",
      ingredients: ["Pomodoro", "Origano", "Cipolla rossa", "Zucchina", "Broccoli", "Funghi", "Ananas", "Peperoni", "Rucola"],
      prices: { small: 15.5, medium: 20.5, large: 30.9 },
      imageKey: "pizza-vegan"
  }
];
