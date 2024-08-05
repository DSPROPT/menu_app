export const pizzas = [
  {
      id: "pizza-margherita",
      name: "Pizza Margarita",
      description: "Un clásico atemporal, nuestra Pizza Margarita es una sinfonía de tomates frescos y madurados al sol, mozzarella cremosa y orégano aromático. Simple pero profundamente deliciosa, esta pizza captura la esencia de la tradición culinaria italiana.",
      ingredients: ["Tomate", "Mozzarella", "Orégano"],
      prices: { small: 12.5, medium: 16.5, large: 26.5 },
      imageKey: "pizza-margherita"
  },
  {
      id: "pizza-pepperoni",
      name: "Pizza de Pepperoni",
      description: "Disfruta de los sabores intensos de nuestra Pizza de Pepperoni, donde cada rebanada está cargada con pepperoni picante, sobre una base rica de tomate y mozzarella derretida, terminada con un toque de orégano para un extra sabor.",
      ingredients: ["Tomate", "Mozzarella", "Pepperoni", "Orégano"],
      prices: { small: 13.9, medium: 17.9, large: 27.5 },
      imageKey: "pizza-pepperoni"
  },
  {
      id: "prosciutto-funghi",
      name: "Pizza de Jamón y Champiñones",
      description: "Explora los deliciosos sabores de nuestra Pizza de Jamón y Champiñones, con jamón curado finamente rebanado y champiñones terrosos. Un toque de ajo y orégano aromático eleva esta pizza, haciendo que cada bocado sea una perfecta fusión de sabores.",
      ingredients: ["Tomate", "Mozzarella", "Jamón", "Champiñones", "Ajo", "Orégano"],
      prices: { small: 14.5, medium: 18.5, large: 29.5 },
      imageKey: "prosciutto-funghi"
  },
  {
      id: "pizza-di-salami",
      name: "Pizza de Salami",
      description: "Nuestra Pizza de Salami ofrece una experiencia gustativa robusta, combinando rebanadas de salami picante con cebolla dulce, todo sobre una base clásica de tomate y mozzarella, con orégano para realzar los ricos sabores de la carne.",
      ingredients: ["Tomate", "Mozzarella", "Salami", "Cebolla", "Orégano"],
      prices: { small: 13.9, medium: 17.9, large: 28.5 },
      imageKey: "pizza-di-salami"
  },
  {
      id: "pizza-alla-bolognese",
      name: "Pizza Boloñesa",
      description: "Una opción sustanciosa, la Pizza Boloñesa es un festín de salsa boloñesa tradicional, pimientos mixtos y champiñones frescos, todo cubierto con mozzarella. Es una opción rica y satisfactoria para aquellos que aman una pizza cargada de carne y vegetales.",
      ingredients: ["Tomate", "Mozzarella", "Pimientos", "Champiñones", "Cebollas", "Boloñesa", "Orégano"],
      prices: { small: 13.9, medium: 18.5, large: 29.5 },
      imageKey: "pizza-alla-bolognese"
  },
  {
      id: "pizza-meraviglia",
      name: "Pizza Maravilla",
      description: "Nuestra Pizza Maravilla es un verdadero deleite, cubierta con suculentos champiñones, huevo cremoso y tocino crujiente. Un toque de orégano une todos los sabores, convirtiéndola en una tentación irresistible.",
      ingredients: ["Tomate", "Mozzarella", "Champiñones", "Huevo", "Tocino", "Orégano"],
      prices: { small: 14.5, medium: 18.5, large: 29.5 },
      imageKey: "pizza-meraviglia"
  },
  {
      id: "pizza-di-pollo",
      name: "Pizza de Pollo",
      description: "Disfruta de la ligereza y el sabor de nuestra Pizza de Pollo, cubierta con trozos de pollo tierno, tocino ahumado y ricas aceitunas negras. Una base de tomate y mozzarella la convierte en una opción deliciosa para los amantes del pollo.",
      ingredients: ["Tomate", "Mozzarella", "Pollo", "Tocino", "Aceitunas negras", "Orégano"],
      prices: { small: 14.5, medium: 18.5, large: 29.5 },
      imageKey: "pizza-di-pollo"
  },
  {
      id: "pizza-di-tonno",
      name: "Pizza de Atún",
      description: "Sumérgete en los sabores del mar con nuestra Pizza de Atún, donde trozos de atún, tocino crujiente y maíz dulce crean un delicioso contraste de texturas y sabores, todo realzado por la frescura de la cebolla y el orégano.",
      ingredients: ["Tomate", "Mozzarella", "Atún", "Tocino", "Cebolla", "Maíz dulce", "Orégano"],
      prices: { small: 14.5, medium: 18.5, large: 29.5 },
      imageKey: "pizza-di-tonno"
  },
  {
      id: "vegetariana",
      name: "Pizza Vegetariana",
      description: "Un jardín de sabores, nuestra Pizza Vegetariana está cargada con champiñones, berenjenas, aceitunas y pimientos. Esta vibrante mezcla sobre una base de tomate y mozzarella ofrece una opción saludable y deliciosa para los amantes de los vegetales.",
      ingredients: ["Tomate", "Mozzarella", "Champiñones", "Berenjena", "Aceitunas", "Pimientos", "Orégano"],
      prices: { small: 13.9, medium: 17.9, large: 29.5 },
      imageKey: "vegetariana"
  },
  {
      id: "pizza-roma",
      name: "Pizza Roma",
      description: "Nuestra Pizza Roma es un festín de sabores con una generosa cobertura de champiñones, pepperoni, chorizo y jamón, complementada con cebolla y mozzarella. Esta pizza es un deleite para los carnívoros, ofreciendo notas ricas y especiadas.",
      ingredients: ["Tomate", "Mozzarella", "Champiñones", "Pepperoni", "Chorizo", "Jamón", "Cebolla", "Orégano"],
      prices: { small: 14.9, medium: 20.9, large: 30.9 },
      imageKey: "pizza-roma"
  },
  {
      id: "special-of-the-house",
      name: "Pizza Especial de la Casa",
      description: "Déjate seducir por nuestra pizza especial de la casa con una mezcla única de carnes, alcaparras, aceitunas negras y tomates secados al sol. Un toque de ajo y orégano hace de esta pizza una elección audaz y sabrosa.",
      ingredients: ["Tomate", "Mozzarella", "Carne", "Alcaparras", "Aceitunas negras", "Tomates secos", "Ajo", "Orégano"],
      prices: { small: 14.9, medium: 19.9, large: 29.9 },
      imageKey: "special-of-the-house"
  },
  {
      id: "gamberi-di-mare",
      name: "Pizza Gamberi di Mare",
      description: "Una elección lujosa, nuestra Pizza Gamberi di Mare presenta camarones jugosos, salsa cremosa y piña ácida, cubiertos con mozzarella. Es una deliciosa mezcla de dulce y salado, perfecta para los entusiastas del marisco.",
      ingredients: ["Tomate", "Mozzarella", "Camarones", "Crema", "Piña", "Orégano"],
      prices: { small: 17.5, medium: 22.9, large: 34.9 },
      imageKey: "gamberi-di-mare"
  },
  {
      id: "pizza-di-bacalhau",
      name: "Pizza de Bacalao",
      description: "Saborea el gusto del océano con nuestra Pizza de Bacalao, donde copos de bacalao se mezclan con aceitunas y pimientos, todo enriquecido con una salsa cremosa. Esta pizza ofrece una experiencia única de mariscos.",
      ingredients: ["Tomate", "Mozzarella", "Bacalao", "Aceitunas", "Pimientos", "Crema", "Orégano"],
      prices: { small: 17.5, medium: 22.9, large: 34.9 },
      imageKey: "pizza-di-bacalhau"
  },
  {
      id: "diavola",
      name: "Pizza Diavola",
      description: "Para los valientes, nuestra Pizza Diavola ofrece un topping de salami picante con aceitunas negras y una salsa picante casera. Es un plato ardiente para los amantes del picante.",
      ingredients: ["Tomate", "Mozzarella", "Salami picante", "Aceitunas negras", "Salsa picante casera"],
      prices: { small: 14.9, medium: 22.9, large: 30.9 },
      imageKey: "diavola"
  },
  {
      id: "speciale-di-parma",
      name: "Pizza Especial de Parma",
      description: "Experimenta la elegancia de nuestra Pizza Especial de Parma, con lujoso jamón de Parma, queso de búfala y tomates cherry. Un chorrito de aceite natural y albahaca fresca añaden un toque refinado a esta selección gourmet.",
      ingredients: ["Tomate", "Orégano", "Queso de búfala", "Jamón de Parma", "Tomates cherry", "Albahaca", "Aceite natural"],
      prices: { small: 16.0, medium: 21.9, large: 32.9 },
      imageKey: "speciale-di-parma"
  },
  {
      id: "quattro-formaggi",
      name: "Pizza Cuatro Quesos",
      description: "Un paraíso para los amantes del queso, nuestra Pizza Cuatro Quesos combina mozzarella, gorgonzola, queso fresco y parmigiano. La textura rica y cremosa, combinada con una base de tomate, hace que cada bocado sea celestial.",
      ingredients: ["Tomate", "Mozzarella", "Gorgonzola", "Queso fresco", "Parmigiano", "Orégano"],
      prices: { small: 15.5, medium: 20.5, large: 30.9 },
      imageKey: "quattro-formaggi"
  },
  {
      id: "gamberi-di-oro",
      name: "Pizza Gamberi di Oro",
      description: "Indúlgate en la decadencia de nuestra Pizza Gamberi di Oro, que presenta camarones dorados, tocino ahumado y nuestra salsa especial. Esta pizza es una versión lujosa de los sabores clásicos.",
      ingredients: ["Tomate", "Mozzarella", "Camarones", "Tocino", "Salsa especial", "Orégano"],
      prices: { small: 17.5, medium: 20.9, large: 30.9 },
      imageKey: "gamberi-di-oro"
  },
  {
      id: "prosciutto-rucola-pizza",
      name: "Pizza de Jamón y Rúcula",
      description: "Nuestra Pizza de Jamón y Rúcula ofrece un delicioso equilibrio de jamón sabroso, rúcula picante y cuadritos de queso fresco, terminada con un chorrito de vinagre balsámico para un toque de dulzura.",
      ingredients: ["Tomate", "Orégano", "Rúcula", "Jamón", "Queso fresco en cubos", "Vinagre balsámico"],
      prices: { small: 15.5, medium: 20.5, large: 30.9 },
      imageKey: "prosciutto-rucola-pizza"
  },
  {
      id: "sicilia",
      name: "Pizza Siciliana",
      description: "Embarca en un viaje de sabores con nuestra Pizza Siciliana, una combinación de champiñones, espinacas, jamón y parmigiano. Esta pizza ofrece un bocado sustancioso y satisfactorio con cada rebanada.",
      ingredients: ["Tomate", "Mozzarella", "Champiñones", "Espinacas", "Jamón", "Parmigiano", "Orégano"],
      prices: { small: 15.5, medium: 20.5, large: 30.9 },
      imageKey: "sicilia"
  },
  {
      id: "carbonara",
      name: "Pizza Carbonara",
      description: "Inspirada en el clásico plato de pasta, nuestra Pizza Carbonara es un deleite cremoso con mozzarella, tocino en lonchas y champiñones. Es una opción rica e indulgente que seguramente complacerá.",
      ingredients: ["Crema", "Mozzarella", "Tocino en lonchas", "Champiñones", "Orégano"],
      prices: { small: 15.5, medium: 20.5, large: 30.9 },
      imageKey: "carbonara"
  },
  {
      id: "pizza-vegan",
      name: "Pizza Vegana",
      description: "Nuestra Pizza Vegana es un festín de colores para los sentidos, generosamente cubierta con cebolla roja, calabacín, brócoli, champiñones, piña y pimientos. Es una opción vibrante y saludable que ofrece tanto en sabor como en nutrición.",
      ingredients: ["Tomate", "Orégano", "Cebolla roja", "Calabacín", "Brócoli", "Champiñones", "Piña", "Pimientos", "Rúcula"],
      prices: { small: 15.5, medium: 20.5, large: 30.9 },
      imageKey: "pizza-vegan"
  }
];
