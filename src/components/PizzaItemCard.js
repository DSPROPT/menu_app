import React, { useState } from 'react';

// Assuming sizeTranslations and ingredientTranslations are defined and imported
const PizzaItemCard = ({ name, description, ingredients, prices, imageKey, language }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const imagePath = `./${imageKey}.jpg`;
  const safePrices = prices || { small: 'N/A', medium: 'N/A', large: 'N/A' };  // Handles missing prices gracefully

  const sizeTranslations = {
    english: { small: "Small", medium: "Medium", large: "Large" },
    spanish: { small: "Pequeña", medium: "Mediana", large: "Grande" },
    portuguese: { small: "Pequena", medium: "Média", large: "Grande" },
    german: { small: "Klein", medium: "Mittel", large: "Groß" },
    italian: { small: "Piccola", medium: "Media", large: "Grande" },
    french: { small: "Petite", medium: "Moyenne", large: "Grande" },
    dutch: { small: "Klein", medium: "Middel", large: "Groot" },
    russian: { small: "Маленькая", medium: "Средняя", large: "Большая" },
    ukrainian: { small: "Мала", medium: "Середня", large: "Велика" }
  };

  const ingredientTranslation = {
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

  return (
    <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
        <button className="imageButton w-full" onClick={() => setModalVisible(true)}>
            <img src={imagePath} alt={name} className="w-full object-cover h-48" />
        </button>
        <div className="info p-4">
            <h3 className="name text-2xl font-semibold">{name}</h3>
            <p className="description text-lg text-gray-700">{description}</p>
            <p className="ingredients text-lg text-gray-600">{ingredientTranslation[language]}: {ingredients.join(', ')}</p>
            <div className="price text-xl font-bold text-green-600 flex flex-col">
              <span>{sizeTranslations[language].small}: €{safePrices.small}</span>
              <span>{sizeTranslations[language].medium}: €{safePrices.medium}</span>
              <span>{sizeTranslations[language].large}: €{safePrices.large}</span>
          </div>
        </div>
        {modalVisible && (
          <div className="modal fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center" onClick={() => setModalVisible(false)}>
            <div className="modalContent w-full max-w-xl p-4 bg-white rounded-xl shadow-2xl" onClick={e => e.stopPropagation()}>
               <img src={imagePath} alt={`Detailed view of ${name}`} className="w-full h-auto" />
            </div>
          </div>
        )}
    </div>
  );
};

export default PizzaItemCard;
