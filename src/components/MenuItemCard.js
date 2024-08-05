import React, { useState } from 'react';

const ingredientTranslations = {
  english: "Ingredients",
  spanish: "Ingredientes",
  portuguese: "Ingredientes",
  german: "Zutaten",
  italian: "Ingredienti",
  french: "Ingrédients",
  dutch: "Ingrediënten",
  russian: "Ингредиенты",
  ukrainian: "Інгредієнти"
};

const MenuItemCard = ({ name, description, ingredients, price, imageKey, language }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const imagePath = `./${imageKey}.jpg`;
  const ingredientsLabel = ingredientTranslations[language] || "Ingredients";

  return (
    <div className="card bg-white shadow-lg rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      <button className="imageButton w-full" onClick={() => setModalVisible(true)}>
        <img src={imagePath} alt={name} className="w-full object-cover h-48 hover:opacity-90" />
      </button>
      <div className="info p-4">
        <h3 className="name text-2xl font-semibold mb-1">{name}</h3>
        <p className="description text-lg text-gray-700 mb-1">{description}</p>
        <p className="ingredients text-lg text-gray-500 mb-2">{ingredientsLabel}: {ingredients.join(', ')}</p>
        <p className="price text-2xl font-bold text-green-600">{price}</p>
      </div>

      {modalVisible && (
        <div className="modal fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center" onClick={() => setModalVisible(false)}>
          <div className="modalContent w-full max-w-3xl p-4 bg-white rounded-xl shadow-2xl" onClick={e => e.stopPropagation()}>
            <img src={imagePath} alt={`Detailed view of ${name}`} className="w-full h-auto rounded-md" />
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuItemCard;
