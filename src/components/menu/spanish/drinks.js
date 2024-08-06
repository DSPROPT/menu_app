export const drinks =  [
      { id: "pepsi", name: "Pepsi", price: "2€", description: "Refrescante bebida gaseosa.", ingredients: ["Agua carbonatada", "Azúcar", "Colorante de caramelo", "Ácido fosfórico", "Cafeína"], imageKey: "pepsi" },
      { id: "pepsi_max", name: "Pepsi Max", price: "2€", description: "Bebida gaseosa sin azúcar con sabor máximo.", ingredients: ["Agua carbonatada", "Edulcorantes", "Colorante de caramelo", "Ácido fosfórico", "Cafeína"], imageKey: "pepsi_max" },
      { id: "coca_cola", name: "Coca-Cola", price: "2€", description: "Bebida gaseosa clásica.", ingredients: ["Agua carbonatada", "Azúcar", "Colorante de caramelo", "Ácido fosfórico", "Cafeína"], imageKey: "coca_cola" },
      { id: "brisa_laranja", name: "Brisa Naranja", price: "2€", description: "Bebida gaseosa con sabor a naranja.", ingredients: ["Agua carbonatada", "Azúcar", "Jugo concentrado de naranja", "Ácido cítrico", "Aromas naturales"], imageKey: "brisa_laranja" },
      { id: "brisa_maracuja", name: "Brisa Maracuyá", price: "2€", description: "Bebida gaseosa con sabor a maracuyá.", ingredients: ["Agua carbonatada", "Azúcar", "Jugo concentrado de maracuyá", "Ácido cítrico", "Aromas naturales"], imageKey: "brisa_maracuja" },
      { id: "brisa_maca", name: "Brisa Manzana", price: "2€", description: "Bebida gaseosa con sabor a manzana.", ingredients: ["Agua carbonatada", "Azúcar", "Jugo concentrado de manzana", "Ácido cítrico", "Aromas naturales"], imageKey: "brisa_maca" },
      { id: "laranjada", name: "Laranjada", price: "2€", description: "Bebida gaseosa con sabor a naranja.", ingredients: ["Agua carbonatada", "Azúcar", "Jugo concentrado de naranja", "Ácido cítrico", "Aromas naturales"], imageKey: "laranjada" },
      { id: "compal_pessego", name: "Compal Melocotón", price: "2€", description: "Néctar de melocotón.", ingredients: ["Agua", "Puré de melocotón", "Azúcar", "Ácido cítrico", "Aromas naturales"], imageKey: "compal_pessego" },
      { id: "compal_maracuja", name: "Compal Maracuyá", price: "2€", description: "Néctar de maracuyá.", ingredients: ["Agua", "Puré de maracuyá", "Azúcar", "Ácido cítrico", "Aromas naturales"], imageKey: "compal_maracuja" },
      { id: "7up", name: "7UP", price: "2€", description: "Bebida gaseosa con sabor a limón y lima.", ingredients: ["Agua carbonatada", "Azúcar", "Ácido cítrico", "Aromas naturales"], imageKey: "7up" },
      { id: "agua_033l", name: "Agua 0.33L", price: "2€", description: "Agua natural refrescante.", ingredients: ["Agua"], imageKey: "agua_033l" },
      { id: "agua_15l", name: "Agua 1.5L", price: "3€", description: "Agua natural refrescante.", ingredients: ["Agua"], imageKey: "agua_15l" },   
      { id: "coral_020", name: "Coral 0.20", price: "1.50€", description: "Cerveza ligera y rubia.", ingredients: ["Agua", "Malta de cebada", "Lúpulo", "Levadura"], imageKey: "coral_020" },
      { id: "coral_030", name: "Coral 0.30", price: "2€", description: "Cerveza rubia refrescante.", ingredients: ["Agua", "Malta de cebada", "Lúpulo", "Levadura"], imageKey: "coral_030" },
      { id: "coral_050", name: "Coral 0.50", price: "3.5€", description: "Cerveza rubia completa.", ingredients: ["Agua", "Malta de cebada", "Lúpulo", "Levadura"], imageKey: "coral_050" },
      { id: "heineken", name: "Heineken", price: "2.50€", description: "Cerveza rubia internacional.", ingredients: ["Agua", "Malta de cebada", "Lúpulo", "Levadura"], imageKey: "heineken" },
      { id: "corona", name: "Corona", price: "5€", description: "Cerveza rubia mexicana.", ingredients: ["Agua", "Malta de cebada", "Granos no malteados", "Lúpulo"], imageKey: "corona" },   
      { id: "mojito", name: "Mojito", price: "6€", description: "Refrescante cóctel cubano con lima y menta.", ingredients: ["Ron blanco", "Azúcar", "Jugo de lima", "Agua con gas", "Menta"], imageKey: "mojito" },
      { id: "daikiri", name: "Daiquiri", price: "6€", description: "Cóctel clásico con ron, lima y azúcar.", ingredients: ["Ron blanco", "Azúcar", "Jugo de lima"], imageKey: "daikiri" },
      { id: "caipirinha", name: "Caipirinha", price: "5€", description: "Cóctel brasileño con cachaça y lima.", ingredients: ["Cachaça", "Azúcar", "Lima"], imageKey: "caipirinha" },
      { id: "sangria_copo", name: "Sangría en Vaso", price: "5.5€", description: "Sangría tradicional.", ingredients: ["Vino tinto", "Azúcar", "Jugo de naranja", "Agua con gas", "Frutas picadas"], imageKey: "sangria_copo" },
      { id: "sangria_1l_2l", name: "Sangría 1L y 2L", price: "16€ / 28€", description: "Jarra de sangría tradicional.", ingredients: ["Vino tinto", "Azúcar", "Jugo de naranja", "Agua con gas", "Frutas picadas"], imageKey: "sangria_1l_2l" },
      { id: "aperol_spritz", name: "Aperol Spritz", price: "6€", description: "Cóctel italiano con Aperol, Prosecco y agua con gas.", ingredients: ["Aperol", "Prosecco", "Agua con gas"], imageKey: "aperol_spritz" },
      { id: "mojito_maracuja", name: "Mojito Maracuyá", price: "6€", description: "Mojito con sabor a maracuyá.", ingredients: ["Ron blanco", "Azúcar", "Jugo de lima", "Agua con gas", "Menta", "Maracuyá"], imageKey: "mojito_maracuja" },
      { id: "poncha_regional", name: "Poncha Regional", price: "3.50€", description: "Cóctel tradicional de Madeira con brandy.", ingredients: ["Brandy", "Miel", "Jugo de limón"], imageKey: "poncha_regional" },
      { id: "poncha_maracuja", name: "Poncha Maracuyá", price: "3.50€", description: "Cóctel tradicional de Madeira con maracuyá.", ingredients: ["Brandy", "Miel", "Maracuyá"], imageKey: "poncha_maracuja" },      
      { id: "carolans", name: "Carolans", price: "4€", description: "Licor de crema irlandesa.", ingredients: ["Whisky irlandés", "Crema", "Miel"], imageKey: "carolans" },
      { id: "pinha_colada", name: "Piña Colada", price: "5€", description: "Cóctel tropical clásico con ron y leche de coco.", ingredients: ["Ron blanco", "Leche de coco", "Jugo de piña"], imageKey: "pinha_colada" },
      { id: "cuba_libre", name: "Cuba Libre (Ron)", price: "4€", description: "Cóctel clásico con ron y cola.", ingredients: ["Ron blanco", "Cola", "Jugo de lima"], imageKey: "cuba_livre_rum" },
      { id: "tequila_sunrise", name: "Tequila Sunrise", price: "5€", description: "Cóctel brillante con tequila y granadina.", ingredients: ["Tequila", "Jugo de naranja", "Granadina"], imageKey: "tequila_sunrise" },
      { id: "irishcoffee", name: "Café Irlandés", price: "4.95€", description: "Cóctel de café con whisky irlandés y crema.", ingredients: ["Whisky irlandés", "Café", "Azúcar", "Crema"], imageKey: "irishcoffee" },
      { id: "vodka", name: "Vodka", price: "4€", description: "Destilado clásico.", ingredients: ["Vodka"], imageKey: "vodka" },
      { id: "jack_daniels", name: "Jack Daniel's", price: "4.5€", description: "Popular whisky de Tennessee.", ingredients: ["Whisky de Tennessee"], imageKey: "jack_daniels" },
      { id: "black_level", name: "Black Level", price: "5.5€", description: "Whisky escocés suave.", ingredients: ["Whisky escocés"], imageKey: "black_level" },
      { id: "red_level", name: "Red Level", price: "4.5€", description: "Whisky escocés mezclado.", ingredients: ["Whisky escocés"], imageKey: "red_level" },
      { id: "nikita", name: "Nikita", price: "5€", description: "Refrescante cóctel de Madeira con cerveza y helado.", ingredients: ["Cerveza", "Helado de vainilla", "Piña"], imageKey: "nikita" },
      { id: "baileyscoffee", name: "Café con Baileys", price: "5€", description: "Cóctel cremoso de café con Baileys.", ingredients: ["Crema irlandesa Baileys", "Café"], imageKey: "baileyscoffee" }
    ];

  