export const pizzas = [
  {
      id: "pizza-margherita",
      name: "Pizza Margherita",
      description: "Un classique intemporel, notre Pizza Margherita est une symphonie de tomates fraîchement cueillies et mûries au soleil, de mozzarella crémeuse et d'origan aromatique. Simple mais profondément délicieuse, cette pizza capture l'essence de la tradition culinaire italienne.",
      ingredients: ["Tomate", "Mozzarella", "Origan"],
      prices: { small: 12.5, medium: 16.5, large: 26.5 },
      imageKey: "pizza-margherita"
  },
  {
      id: "pizza-pepperoni",
      name: "Pizza Pepperoni",
      description: "Savourez les saveurs audacieuses de notre Pizza Pepperoni, où chaque tranche est garnie de pepperoni épicé et croustillant, sur une base riche de tomate et mozzarella fondue, finie avec un soupçon d'origan pour un coup de fouet supplémentaire.",
      ingredients: ["Tomate", "Mozzarella", "Pepperoni", "Origan"],
      prices: { small: 13.9, medium: 17.9, large: 27.5 },
      imageKey: "pizza-pepperoni"
  },
  {
      id: "prosciutto-funghi",
      name: "Pizza Jambon et Champignons",
      description: "Explorez les délices savoureux de notre Pizza Prosciutto e Funghi, mettant en vedette du jambon finement tranché et des champignons terrestres. Une pointe d'ail et d'origan aromatique élève cette pizza, rendant chaque bouchée parfaitement équilibrée.",
      ingredients: ["Tomate", "Mozzarella", "Jambon", "Champignons", "Ail", "Origan"],
      prices: { small: 14.5, medium: 18.5, large: 29.5 },
      imageKey: "prosciutto-funghi"
  },
  {
      id: "pizza-di-salami",
      name: "Pizza Salami",
      description: "Notre Pizza di Salami offre une expérience gustative robuste, combinant des tranches de salami épicées avec des oignons doux, le tout étalé sur une base classique de tomate et mozzarella, avec des saupoudrages d'origan pour rehausser les saveurs riches de la viande.",
      ingredients: ["Tomate", "Mozzarella", "Salami", "Oignon", "Origan"],
      prices: { small: 13.9, medium: 17.9, large: 28.5 },
      imageKey: "pizza-di-salami"
  },
  {
      id: "pizza-alla-bolognese",
      name: "Pizza Bolognaise",
      description: "Un choix copieux, la Pizza alla Bolognese est un festin de sauce bolognaise traditionnelle, poivrons mélangés et champignons frais, superposés avec de la mozzarella. C'est une option riche et satisfaisante pour ceux qui aiment une pizza chargée de viande et de légumes.",
      ingredients: ["Tomate", "Mozzarella", "Poivrons", "Champignons", "Oignons", "Bolognaise", "Origan"],
      prices: { small: 13.9, medium: 18.5, large: 29.5 },
      imageKey: "pizza-alla-bolognese"
  },
  {
      id: "pizza-meraviglia",
      name: "Pizza Meraviglia",
      description: "Notre Pizza Meraviglia est une véritable merveille, garnie de champignons succulents, d'œufs crémeux et de bacon tranché croustillant. Un soupçon d'origan lie toutes les saveurs ensemble, en faisant un régal pour les papilles.",
      ingredients: ["Tomate", "Mozzarella", "Champignons", "Œuf", "Bacon tranché", "Origan"],
      prices: { small: 14.5, medium: 18.5, large: 29.5 },
      imageKey: "pizza-meraviglia"
  },
  {
      id: "pizza-di-pollo",
      name: "Pizza au Poulet",
      description: "Profitez de la légèreté et des saveurs de notre Pizza di Pollo, garnie de morceaux de poulet tendres, de bacon fumé et d'olives noires riches. Une base de tomate et de mozzarella en fait un choix délicieux pour les amateurs de volaille.",
      ingredients: ["Tomate", "Mozzarella", "Poulet", "Bacon", "Olives noires", "Origan"],
      prices: { small: 14.5, medium: 18.5, large: 29.5 },
      imageKey: "pizza-di-pollo"
  },
  {
      id: "pizza-di-tonno",
      name: "Pizza au Thon",
      description: "Plongez dans les saveurs de la mer avec notre Pizza di Tonno, où des morceaux de thon, du bacon croustillant et du maïs sucré créent un délicieux contraste de textures et de goûts, le tout rehaussé par la fraîcheur des oignons et de l'origan.",
      ingredients: ["Tomate", "Mozzarella", "Thon", "Bacon", "Oignon", "Maïs doux", "Origan"],
      prices: { small: 14.5, medium: 18.5, large: 29.5 },
      imageKey: "pizza-di-tonno"
  },
  {
      id: "vegetariana",
      name: "Pizza Végétarienne",
      description: "Un jardin de saveurs, notre Pizza Végétarienne est riche en champignons, aubergines, olives et poivrons. Ce mélange vibrant sur une base de tomate et mozzarella offre une option saine et délicieuse pour les amateurs de légumes.",
      ingredients: ["Tomate", "Mozzarella", "Champignons", "Aubergine", "Olives", "Poivrons", "Origan"],
      prices: { small: 13.9, medium: 17.9, large: 29.5 },
      imageKey: "vegetariana"
  },
  {
      id: "pizza-roma",
      name: "Pizza Roma",
      description: "Notre Pizza Roma est un festin de saveurs avec un généreux garnissage de champignons, de pepperoni, de chorizo et de jambon, complété par des oignons et de la mozzarella. Cette pizza est un délice pour les carnivores, offrant des notes riches et épicées.",
      ingredients: ["Tomate", "Mozzarella", "Champignons", "Pepperoni", "Chorizo", "Jambon", "Oignon", "Origan"],
      prices: { small: 14.9, medium: 20.9, large: 30.9 },
      imageKey: "pizza-roma"
  },
  {
      id: "special-of-the-house",
      name: "Pizza Spéciale Maison",
      description: "Laissez-vous tenter par notre pizza spéciale maison avec un mélange unique de viandes, câpres, olives noires et tomates séchées au soleil. Une touche d'ail et d'origan rend cette pizza audacieuse et savoureuse.",
      ingredients: ["Tomate", "Mozzarella", "Viande", "Câpres", "Olives noires", "Tomates séchées", "Ail", "Origan"],
      prices: { small: 14.9, medium: 19.9, large: 29.9 },
      imageKey: "special-of-the-house"
  },
  {
      id: "gamberi-di-mare",
      name: "Pizza Gamberi di Mare",
      description: "Un choix luxueux, notre Pizza Gamberi di Mare propose des crevettes succulentes, une sauce crémeuse et de l'ananas acidulé, le tout surmonté de mozzarella. C'est un mélange délicieux de sucré et salé, parfait pour les amateurs de fruits de mer.",
      ingredients: ["Tomate", "Mozzarella", "Crevettes", "Crème", "Ananas", "Origan"],
      prices: { small: 17.5, medium: 22.9, large: 34.9 },
      imageKey: "gamberi-di-mare"
  },
  {
      id: "pizza-di-bacalhau",
      name: "Pizza au Morue",
      description: "Savourez le goût de l'océan avec notre Pizza di Bacalhau, où des flocons de morue se mêlent aux olives et aux poivrons, le tout enrichi d'une sauce crémeuse. Cette pizza offre une expérience unique de fruits de mer.",
      ingredients: ["Tomate", "Mozzarella", "Morue", "Olives", "Poivrons", "Crème", "Origan"],
      prices: { small: 17.5, medium: 22.9, large: 34.9 },
      imageKey: "pizza-di-bacalhau"
  },
  {
      id: "diavola",
      name: "Pizza Diavola",
      description: "Pour ceux qui osent, notre Pizza Diavola propose une garniture de salami épicé avec des olives noires et une sauce épicée maison. C'est un régal ardent pour les amateurs de sensations fortes.",
      ingredients: ["Tomate", "Mozzarella", "Salami épicé", "Olives noires", "Sauce épicée maison"],
      prices: { small: 14.9, medium: 22.9, large: 30.9 },
      imageKey: "diavola"
  },
  {
      id: "speciale-di-parma",
      name: "Pizza Spéciale de Parme",
      description: "Vivez l'élégance de notre Pizza Spéciale di Parma, avec du jambon de Parme luxueux, du fromage de buffle et des tomates cerises. Un filet d'huile naturelle et du basilic frais ajoutent une touche raffinée à cette sélection gastronomique.",
      ingredients: ["Tomate", "Origan", "Fromage de buffle", "Jambon de Parme", "Tomates cerises", "Basilic", "Huile naturelle"],
      prices: { small: 16.0, medium: 21.9, large: 32.9 },
      imageKey: "speciale-di-parma"
  },
  {
      id: "quattro-formaggi",
      name: "Pizza Quatre Fromages",
      description: "Un paradis pour les amateurs de fromage, notre Pizza 4 Formaggi mélange mozzarella, gorgonzola, fromage frais et Parmigiano. La texture riche et crémeuse, associée à une base de tomate, rend chaque bouchée divine.",
      ingredients: ["Tomate", "Mozzarella", "Gorgonzola", "Fromage frais", "Parmigiano", "Origan"],
      prices: { small: 15.5, medium: 20.5, large: 30.9 },
      imageKey: "quattro-formaggi"
  },
  {
      id: "gamberi-di-oro",
      name: "Pizza Gamberi di Oro",
      description: "Laissez-vous tenter par la décadence de notre Pizza Gamberi di Oro, mettant en vedette des crevettes dorées, du bacon fumé et notre sauce spéciale. Cette pizza est une version luxueuse des saveurs classiques.",
      ingredients: ["Tomate", "Mozzarella", "Crevettes", "Bacon", "Sauce spéciale", "Origan"],
      prices: { small: 17.5, medium: 20.9, large: 30.9 },
      imageKey: "gamberi-di-oro"
  },
  {
      id: "prosciutto-rucola-pizza",
      name: "Pizza Jambon et Roquette",
      description: "Notre Pizza de Jambon avec Roquette offre un équilibre délicieux de jambon savoureux, de roquette poivrée et de carrés de fromage frais, finie avec un filet de vinaigre balsamique pour une touche de douceur.",
      ingredients: ["Tomate", "Origan", "Roquette", "Jambon", "Fromage frais en carrés", "Vinaigre balsamique"],
      prices: { small: 15.5, medium: 20.5, large: 30.9 },
      imageKey: "prosciutto-rucola-pizza"
  },
  {
      id: "sicilia",
      name: "Pizza Sicilienne",
      description: "Embarquez pour un voyage savoureux avec notre Pizza Sicilienne, un mélange de champignons, d'épinards, de jambon et de Parmigiano. Cette pizza offre une bouchée copieuse et satisfaisante à chaque tranche.",
      ingredients: ["Tomate", "Mozzarella", "Champignons", "Épinards", "Jambon", "Parmigiano", "Origan"],
      prices: { small: 15.5, medium: 20.5, large: 30.9 },
      imageKey: "sicilia"
  },
  {
      id: "carbonara",
      name: "Pizza Carbonara",
      description: "Inspirée du plat de pâtes classique, notre Pizza Carbonara est un délice crémeux avec mozzarella, bacon tranché et champignons. C'est une option riche et indulgente qui plaira à coup sûr.",
      ingredients: ["Crème", "Mozzarella", "Bacon tranché", "Champignons", "Origan"],
      prices: { small: 15.5, medium: 20.5, large: 30.9 },
      imageKey: "carbonara"
  },
  {
      id: "pizza-vegan",
      name: "Pizza Végane",
      description: "Notre Pizza Végane est un festin coloré pour les sens, généreusement garnie d'oignon rouge, de courgette, de brocoli, de champignons, d'ananas, de poivrons et de roquette. C'est un choix vibrant et sain qui offre à la fois en goût et en nutrition.",
      ingredients: ["Tomate", "Origan", "Oignon rouge", "Courgette", "Brocoli", "Champignons", "Ananas", "Poivrons", "Roquette"],
      prices: { small: 15.5, medium: 20.5, large: 30.9 },
      imageKey: "pizza-vegan"
  }
];
