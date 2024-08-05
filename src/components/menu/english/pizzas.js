export const pizzas = [
  {
      id: "pizza-margherita",
      name: "Margherita Pizza",
      description: "A timeless classic, our Pizza Margherita is a symphony of freshly-picked, sun-ripened tomatoes, creamy mozzarella, and aromatic oregano. Simple yet profoundly delicious, this pizza captures the heart of Italian culinary tradition.",
      ingredients: ["Tomato", "Mozzarella", "Oregano"],
      prices: { small: 12.5, medium: 16.5, large: 26.5 },
      imageKey: "pizza-margherita"
  },
  {
      id: "pizza-pepperoni",
      name: "Pepperoni Pizza",
      description: "Indulge in the bold flavors of our Pizza Pepperoni, where each slice is packed with spicy, crispy pepperoni, layered atop a rich tomato base and gooey mozzarella, finished with a hint of oregano for an extra flavor kick.",
      ingredients: ["Tomato", "Mozzarella", "Pepperoni", "Oregano"],
      prices: { small: 13.9, medium: 17.9, large: 27.5 },
      imageKey: "pizza-pepperoni"
  },
  {
      id: "prosciutto-funghi",
      name: "Ham and Mushroom Pizza",
      description: "Explore the savory delights of our Pizza Prosciutto e Funghi, featuring thinly sliced, cured ham and earthy mushrooms. The hint of garlic and aromatic oregano elevates this pizza, making each bite a perfect blend of flavors.",
      ingredients: ["Tomato", "Mozzarella", "Ham", "Mushrooms", "Garlic", "Oregano"],
      prices: { small: 14.5, medium: 18.5, large: 29.5 },
      imageKey: "prosciutto-funghi"
  },
  {
      id: "pizza-di-salami",
      name: "Salami Pizza",
      description: "Our Pizza di Salami offers a robust taste experience, combining spicy salami slices with sweet onions, all spread over a classic tomato and mozzarella base, with oregano sprinklings to enhance the rich meaty flavors.",
      ingredients: ["Tomato", "Mozzarella", "Salami", "Onion", "Oregano"],
      prices: { small: 13.9, medium: 17.9, large: 28.5 },
      imageKey: "pizza-di-salami"
  },
  {
      id: "pizza-alla-bolognese",
      name: "Bolognese Pizza",
      description: "A hearty choice, the Pizza alla Bolognese is a feast of traditional Bolognese sauce, mixed peppers, and fresh mushrooms, layered with mozzarella. It's a rich and satisfying option for those who love a meaty, vegetable-packed pizza.",
      ingredients: ["Tomato", "Mozzarella", "Peppers", "Mushrooms", "Onions", "Bolognese", "Oregano"],
      prices: { small: 13.9, medium: 18.5, large: 29.5 },
      imageKey: "pizza-alla-bolognese"
  },
  {
      id: "pizza-meraviglia",
      name: "Meraviglia Pizza",
      description: "Our Pizza Meraviglia is a true wonder, topped with succulent mushrooms, creamy eggs, and crispy sliced bacon. A sprinkle of oregano ties all the flavors together, making it a mouth-watering treat.",
      ingredients: ["Tomato", "Mozzarella", "Mushrooms", "Egg", "Sliced Bacon", "Oregano"],
      prices: { small: 14.5, medium: 18.5, large: 29.5 },
      imageKey: "pizza-meraviglia"
  },
  {
      id: "pizza-di-pollo",
      name: "Chicken Pizza",
      description: "Enjoy the light and flavorful Pizza di Pollo, topped with tender chicken pieces, smoky bacon, and rich black olives. A tomato base and mozzarella cheese make it a delightful choice for poultry lovers.",
      ingredients: ["Tomato", "Mozzarella", "Chicken", "Bacon", "Black Olives", "Oregano"],
      prices: { small: 14.5, medium: 18.5, large: 29.5 },
      imageKey: "pizza-di-pollo"
  },
  {
      id: "pizza-di-tonno",
      name: "Tuna Pizza",
      description: "Dive into the flavors of the sea with our Pizza di Tonno, where chunks of tuna, crispy bacon, and sweet corn create a delightful contrast of textures and tastes, all enhanced by the freshness of onions and oregano.",
      ingredients: ["Tomato", "Mozzarella", "Tuna", "Bacon", "Onion", "Sweet Corn", "Oregano"],
      prices: { small: 14.5, medium: 18.5, large: 29.5 },
      imageKey: "pizza-di-tonno"
  },
  {
      id: "vegetariana",
      name: "Vegetarian Pizza",
      description: "A garden of flavors, our Pizza Vegetariana is rich with mushrooms, eggplants, olives, and peppers. This vibrant mix on a tomato and mozzarella base offers a wholesome and delicious option for veggie lovers.",
      ingredients: ["Tomato", "Mozzarella", "Mushrooms", "Eggplant", "Olives", "Peppers", "Oregano"],
      prices: { small: 13.9, medium: 17.9, large: 29.5 },
      imageKey: "vegetariana"
  },
  {
      id: "pizza-roma",
      name: "Roma Pizza",
      description: "Our Pizza Roma is a feast of flavors with a generous topping of mushrooms, pepperoni, chorizo, and ham, complemented by onions and mozzarella. This pizza is a carnivore's delight, offering rich and spicy notes.",
      ingredients: ["Tomato", "Mozzarella", "Mushrooms", "Pepperoni", "Chorizo", "Ham", "Onion", "Oregano"],
      prices: { small: 14.9, medium: 20.9, large: 30.9 },
      imageKey: "pizza-roma"
  },
  {
      id: "special-of-the-house",
      name: "House Special Pizza",
      description: "Indulge in our special house pizza with a unique blend of meats, capers, black olives, and sun-dried tomatoes. A touch of garlic and oregano makes this pizza a bold and flavorful choice.",
      ingredients: ["Tomato", "Mozzarella", "Meat", "Capers", "Black Olives", "Sun-Dried Tomatoes", "Garlic", "Oregano"],
      prices: { small: 14.9, medium: 19.9, large: 29.9 },
      imageKey: "special-of-the-house"
  },
  {
      id: "gamberi-di-mare",
      name: "Gamberi di Mare Pizza",
      description: "A luxurious choice, our Pizza Gamberi di Mare features succulent shrimp, creamy sauce, and tangy pineapple, topped with mozzarella. It's a delightful mix of sweet and savory, perfect for seafood enthusiasts.",
      ingredients: ["Tomato", "Mozzarella", "Shrimp", "Cream", "Pineapple", "Oregano"],
      prices: { small: 17.5, medium: 22.9, large: 34.9 },
      imageKey: "gamberi-di-mare"
  },
  {
      id: "pizza-di-bacalhau",
      name: "Codfish Pizza",
      description: "Savor the taste of the ocean with our Pizza di Bacalhau, where flakes of cod mingle with olives and peppers, all enriched with a creamy sauce. This pizza offers a unique seafood experience.",
      ingredients: ["Tomato", "Mozzarella", "Cod", "Olives", "Peppers", "Cream", "Oregano"],
      prices: { small: 17.5, medium: 22.9, large: 34.9 },
      imageKey: "pizza-di-bacalhau"
  },
  {
      id: "diavola",
      name: "Diavola Pizza",
      description: "For those who dare, our Pizza Diavola offers a spicy salami topping with black olives and a homemade spicy sauce. It’s a fiery treat for lovers of heat.",
      ingredients: ["Tomato", "Mozzarella", "Spicy Salami", "Black Olives", "Homemade Spicy Sauce"],
      prices: { small: 14.9, medium: 22.9, large: 30.9 },
      imageKey: "diavola"
  },
  {
      id: "speciale-di-parma",
      name: "Special Parma Pizza",
      description: "Experience the elegance of our Pizza Speciale di Parma, with luxurious Parma prosciutto, buffalo cheese, and cherry tomatoes. Fresh basil and natural oil drizzle add a refined touch to this gourmet selection.",
      ingredients: ["Tomato", "Oregano", "Buffalo Cheese", "Parma Prosciutto", "Cherry Tomatoes", "Basil", "Natural Oil"],
      prices: { small: 16.0, medium: 21.9, large: 32.9 },
      imageKey: "speciale-di-parma"
  },
  {
      id: "quattro-formaggi",
      name: "Four Cheese Pizza",
      description: "A cheese lover's paradise, our Pizza 4 Formaggio blends mozzarella, gorgonzola, fresh cheese, and Parmigiano. The rich and creamy texture, paired with a tomato base, makes every bite heavenly.",
      ingredients: ["Tomato", "Mozzarella", "Gorgonzola", "Fresh Cheese", "Parmigiano", "Oregano"],
      prices: { small: 15.5, medium: 20.5, large: 30.9 },
      imageKey: "quattro-formaggi"
  },
  {
      id: "gamberi-di-oro",
      name: "Gamberi di Oro Pizza",
      description: "Indulge in the decadence of our Pizza Gamberi di Oro, featuring golden shrimp, smoky bacon, and our special sauce. This pizza is a luxurious take on classic flavors.",
      ingredients: ["Tomato", "Mozzarella", "Shrimp", "Bacon", "Special Sauce", "Oregano"],
      prices: { small: 17.5, medium: 20.9, large: 30.9 },
      imageKey: "gamberi-di-oro"
  },
  {
      id: "prosciutto-rucola-pizza",
      name: "Ham and Arugula Pizza",
      description: "Our Pizza de Presunto com Rúcula offers a delightful balance of savory ham, peppery arugula, and fresh cheese squares, finished with a drizzle of balsamic vinegar for a touch of sweetness.",
      ingredients: ["Tomato", "Oregano", "Arugula", "Ham", "Squared Fresh Cheese", "Balsamic Vinegar"],
      prices: { small: 15.5, medium: 20.5, large: 30.9 },
      imageKey: "prosciutto-rucola-pizza"
  },
  {
      id: "sicilia",
      name: "Sicilia Pizza",
      description: "Embark on a flavorful journey with our Pizza Sicilia, a combination of mushrooms, spinach, ham, and Parmigiano. This pizza offers a hearty and satisfying bite with every slice.",
      ingredients: ["Tomato", "Mozzarella", "Mushrooms", "Spinach", "Ham", "Parmigiano", "Oregano"],
      prices: { small: 15.5, medium: 20.5, large: 30.9 },
      imageKey: "sicilia"
  },
  {
      id: "carbonara",
      name: "Carbonara Pizza",
      description: "Inspired by the classic pasta dish, our Pizza Carbonara is a creamy delight with mozzarella, sliced bacon, and mushrooms. It's a rich and indulgent option that's sure to please.",
      ingredients: ["Cream", "Mozzarella", "Sliced Bacon", "Mushrooms", "Oregano"],
      prices: { small: 15.5, medium: 20.5, large: 30.9 },
      imageKey: "carbonara"
  },
  {
      id: "pizza-vegan",
      name: "Vegan Pizza",
      description: "Our Pizza Vegan is a colorful feast for the senses, piled high with red onion, courgette, broccoli, mushrooms, pineapples, and peppers. It's a vibrant and healthy choice that delivers on both taste and nutrition.",
      ingredients: ["Tomato", "Oregano", "Red Onion", "Courgette", "Broccoli", "Mushrooms", "Pineapples", "Peppers", "Arugula"],
      prices: { small: 15.5, medium: 20.5, large: 30.9 },
      imageKey: "pizza-vegan"
  }
];
