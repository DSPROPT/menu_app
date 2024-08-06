import React from 'react';

const DrinkItemCard = ({ name, description, image, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 m-6 flex flex-col items-center w-full">
      <div className="w-24 h-24 rounded-full overflow-hidden mb-6">
        <img src={image} alt={name} className="w-full h-full object-contain" />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-center">{name}</h3>
      <p className="text-gray-600 text-center">{description}</p>
      <p className="text-green-600 font-bold text-xl text-center">{price}</p>
    </div>
  );
};

export default DrinkItemCard;
