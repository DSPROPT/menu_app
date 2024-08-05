export const pizzas = [
  {
      id: "pizza-margherita",
      name: "Pizza Margherita",
      description: "Um clássico atemporal, nossa Pizza Margherita é uma sinfonia de tomates frescos e maduros ao sol, mozzarella cremosa e orégano aromático. Simples, mas profundamente deliciosa, esta pizza captura a essência da tradição culinária italiana.",
      ingredients: ["Tomate", "Mozzarella", "Orégano"],
      prices: { small: 12.5, medium: 16.5, large: 26.5 },
      imageKey: "pizza-margherita"
  },
  {
      id: "pizza-pepperoni",
      name: "Pizza de Pepperoni",
      description: "Saboreie os sabores ousados da nossa Pizza de Pepperoni, onde cada fatia é recheada com pepperoni picante e crocante, sobre uma base rica de tomate e mozzarella derretida, finalizada com um toque de orégano para um extra sabor.",
      ingredients: ["Tomate", "Mozzarella", "Pepperoni", "Orégano"],
      prices: { small: 13.9, medium: 17.9, large: 27.5 },
      imageKey: "pizza-pepperoni"
  },
  {
      id: "prosciutto-funghi",
      name: "Pizza de Presunto e Cogumelos",
      description: "Explore os prazeres saborosos da nossa Pizza de Presunto e Cogumelos, apresentando presunto finamente fatiado e cogumelos terrosos. Um toque de alho e orégano aromático eleva esta pizza, tornando cada mordida uma perfeita combinação de sabores.",
      ingredients: ["Tomate", "Mozzarella", "Presunto", "Cogumelos", "Alho", "Orégano"],
      prices: { small: 14.5, medium: 18.5, large: 29.5 },
      imageKey: "prosciutto-funghi"
  },
  {
      id: "pizza-di-salami",
      name: "Pizza de Salame",
      description: "Nossa Pizza de Salame oferece uma experiência de sabor robusta, combinando fatias de salame picante com cebolas doces, tudo sobre uma base clássica de tomate e mozzarella, com orégano para realçar os sabores ricos da carne.",
      ingredients: ["Tomate", "Mozzarella", "Salame", "Cebola", "Orégano"],
      prices: { small: 13.9, medium: 17.9, large: 28.5 },
      imageKey: "pizza-di-salami"
  },
  {
      id: "pizza-alla-bolognese",
      name: "Pizza à Bolonhesa",
      description: "Uma escolha robusta, a Pizza à Bolonhesa é uma festa de molho bolonhesa tradicional, pimentões mistos e cogumelos frescos, camadas com mozzarella. É uma opção rica e satisfatória para quem ama uma pizza recheada de carne e vegetais.",
      ingredients: ["Tomate", "Mozzarella", "Pimentões", "Cogumelos", "Cebolas", "Bolonhesa", "Orégano"],
      prices: { small: 13.9, medium: 18.5, large: 29.5 },
      imageKey: "pizza-alla-bolognese"
  },
  {
      id: "pizza-meraviglia",
      name: "Pizza Maravilha",
      description: "Nossa Pizza Maravilha é uma verdadeira maravilha, coberta com cogumelos suculentos, ovos cremosos e bacon crocante. Um toque de orégano amarra todos os sabores juntos, tornando-a uma delícia irresistível.",
      ingredients: ["Tomate", "Mozzarella", "Cogumelos", "Ovo", "Bacon", "Orégano"],
      prices: { small: 14.5, medium: 18.5, large: 29.5 },
      imageKey: "pizza-meraviglia"
  },
  {
      id: "pizza-di-pollo",
      name: "Pizza de Frango",
      description: "Desfrute da leveza e sabor da nossa Pizza de Frango, coberta com pedaços de frango tenro, bacon defumado e azeitonas pretas ricas. Uma base de tomate e mozzarella torna-a uma escolha deliciosa para os amantes de aves.",
      ingredients: ["Tomate", "Mozzarella", "Frango", "Bacon", "Azeitonas pretas", "Orégano"],
      prices: { small: 14.5, medium: 18.5, large: 29.5 },
      imageKey: "pizza-di-pollo"
  },
  {
      id: "pizza-di-tonno",
      name: "Pizza de Atum",
      description: "Mergulhe nos sabores do mar com nossa Pizza de Atum, onde pedaços de atum, bacon crocante e milho doce criam um delicioso contraste de texturas e sabores, tudo realçado pela frescura das cebolas e orégano.",
      ingredients: ["Tomate", "Mozzarella", "Atum", "Bacon", "Cebola", "Milho doce", "Orégano"],
      prices: { small: 14.5, medium: 18.5, large: 29.5 },
      imageKey: "pizza-di-tonno"
  },
  {
      id: "vegetariana",
      name: "Pizza Vegetariana",
      description: "Um jardim de sabores, nossa Pizza Vegetariana é rica em cogumelos, berinjelas, azeitonas e pimentões. Esta mistura vibrante sobre uma base de tomate e mozzarella oferece uma opção saudável e deliciosa para os amantes de vegetais.",
      ingredients: ["Tomate", "Mozzarella", "Cogumelos", "Berinjela", "Azeitonas", "Pimentões", "Orégano"],
      prices: { small: 13.9, medium: 17.9, large: 29.5 },
      imageKey: "vegetariana"
  },
  {
      id: "pizza-roma",
      name: "Pizza Roma",
      description: "Nossa Pizza Roma é um banquete de sabores com uma generosa cobertura de cogumelos, pepperoni, chorizo e presunto, complementada por cebolas e mozzarella. Esta pizza é um deleite para os carnívoros, oferecendo notas ricas e picantes.",
      ingredients: ["Tomate", "Mozzarella", "Cogumelos", "Pepperoni", "Chorizo", "Presunto", "Cebola", "Orégano"],
      prices: { small: 14.9, medium: 20.9, large: 30.9 },
      imageKey: "pizza-roma"
  },
  {
      id: "special-of-the-house",
      name: "Pizza Especial da Casa",
      description: "Delicie-se com a nossa pizza especial da casa com uma mistura única de carnes, alcaparras, azeitonas pretas e tomates secos. Um toque de alho e orégano torna esta pizza uma escolha ousada e saborosa.",
      ingredients: ["Tomate", "Mozzarella", "Carne", "Alcaparras", "Azeitonas pretas", "Tomates secos", "Alho", "Orégano"],
      prices: { small: 14.9, medium: 19.9, large: 29.9 },
      imageKey: "special-of-the-house"
  },
  {
      id: "gamberi-di-mare",
      name: "Pizza Gamberi di Mare",
      description: "Uma escolha luxuosa, nossa Pizza Gamberi di Mare apresenta camarões suculentos, molho cremoso e abacaxi tangy, cobertos com mozzarella. É uma mistura deliciosa de doce e salgado, perfeita para os amantes de frutos do mar.",
      ingredients: ["Tomate", "Mozzarella", "Camarões", "Creme", "Abacaxi", "Orégano"],
      prices: { small: 17.5, medium: 22.9, large: 34.9 },
      imageKey: "gamberi-di-mare"
  },
  {
      id: "pizza-di-bacalhau",
      name: "Pizza de Bacalhau",
      description: "Saboreie o gosto do oceano com a nossa Pizza de Bacalhau, onde flocos de bacalhau se misturam com azeitonas e pimentões, tudo enriquecido com um molho cremoso. Esta pizza oferece uma experiência única de frutos do mar.",
      ingredients: ["Tomate", "Mozzarella", "Bacalhau", "Azeitonas", "Pimentões", "Creme", "Orégano"],
      prices: { small: 17.5, medium: 22.9, large: 34.9 },
      imageKey: "pizza-di-bacalhau"
  },
  {
      id: "diavola",
      name: "Pizza Diavola",
      description: "Para os corajosos, nossa Pizza Diavola oferece um topping de salame picante com azeitonas pretas e um molho picante caseiro. É um prato ardente para os amantes de sabores intensos.",
      ingredients: ["Tomate", "Mozzarella", "Salame picante", "Azeitonas pretas", "Molho picante caseiro"],
      prices: { small: 14.9, medium: 22.9, large: 30.9 },
      imageKey: "diavola"
  },
  {
      id: "speciale-di-parma",
      name: "Pizza Especial de Parma",
      description: "Experimente a elegância da nossa Pizza Especial de Parma, com prosciutto di Parma luxuoso, queijo de búfala e tomates cereja. Um fio de óleo natural e manjericão fresco adicionam um toque refinado a esta seleção gourmet.",
      ingredients: ["Tomate", "Orégano", "Queijo de búfala", "Prosciutto di Parma", "Tomates cereja", "Manjericão", "Óleo natural"],
      prices: { small: 16.0, medium: 21.9, large: 32.9 },
      imageKey: "speciale-di-parma"
  },
  {
      id: "quattro-formaggi",
      name: "Pizza Quatro Queijos",
      description: "Um paraíso para os amantes de queijo, nossa Pizza Quatro Queijos combina mozzarella, gorgonzola, queijo fresco e Parmigiano. A textura rica e cremosa, combinada com uma base de tomate, torna cada mordida celestial.",
      ingredients: ["Tomate", "Mozzarella", "Gorgonzola", "Queijo fresco", "Parmigiano", "Orégano"],
      prices: { small: 15.5, medium: 20.5, large: 30.9 },
      imageKey: "quattro-formaggi"
  },
  {
      id: "gamberi-di-oro",
      name: "Pizza Gamberi di Oro",
      description: "Deleite-se com a decadência da nossa Pizza Gamberi di Oro, apresentando camarões dourados, bacon defumado e nosso molho especial. Esta pizza é uma versão luxuosa dos sabores clássicos.",
      ingredients: ["Tomate", "Mozzarella", "Camarões", "Bacon", "Molho especial", "Orégano"],
      prices: { small: 17.5, medium: 20.9, large: 30.9 },
      imageKey: "gamberi-di-oro"
  },
  {
      id: "prosciutto-rucola-pizza",
      name: "Pizza de Presunto e Rúcula",
      description: "Nossa Pizza de Presunto e Rúcula oferece um equilíbrio delicioso de presunto saboroso, rúcula apimentada e quadradinhos de queijo fresco, finalizada com um borrifo de vinagre balsâmico para um toque de doçura.",
      ingredients: ["Tomate", "Orégano", "Rúcula", "Presunto", "Queijo fresco em cubos", "Vinagre balsâmico"],
      prices: { small: 15.5, medium: 20.5, large: 30.9 },
      imageKey: "prosciutto-rucola-pizza"
  },
  {
      id: "sicilia",
      name: "Pizza Siciliana",
      description: "Embarque numa viagem saborosa com a nossa Pizza Siciliana, uma combinação de cogumelos, espinafre, presunto e Parmigiano. Esta pizza oferece uma mordida substancial e satisfatória a cada fatia.",
      ingredients: ["Tomate", "Mozzarella", "Cogumelos", "Espinafre", "Presunto", "Parmigiano", "Orégano"],
      prices: { small: 15.5, medium: 20.5, large: 30.9 },
      imageKey: "sicilia"
  },
  {
      id: "carbonara",
      name: "Pizza Carbonara",
      description: "Inspirada no clássico prato de massa, nossa Pizza Carbonara é um prazer cremoso com mozzarella, bacon fatiado e cogumelos. É uma opção rica e indulgente que certamente agradará.",
      ingredients: ["Creme", "Mozzarella", "Bacon fatiado", "Cogumelos", "Orégano"],
      prices: { small: 15.5, medium: 20.5, large: 30.9 },
      imageKey: "carbonara"
  },
  {
      id: "pizza-vegan",
      name: "Pizza Vegana",
      description: "Nossa Pizza Vegana é uma festa colorida para os sentidos, generosamente coberta com cebola vermelha, abobrinha, brócolis, cogumelos, abacaxi e pimentões. É uma escolha vibrante e saudável que entrega tanto em sabor quanto em nutrição.",
      ingredients: ["Tomate", "Orégano", "Cebola vermelha", "Abobrinha", "Brócolis", "Cogumelos", "Abacaxi", "Pimentões", "Rúcula"],
      prices: { small: 15.5, medium: 20.5, large: 30.9 },
      imageKey: "pizza-vegan"
  }
];
