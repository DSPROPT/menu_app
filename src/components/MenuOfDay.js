import React from 'react';
import { menuTranslations } from './menu_translations';

const MenuOfDay = ({ language, menuOfDay }) => {
  const translations = menuTranslations[language];

  return (
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/bg_1.jpg')" }}>
      <div className="bg-opacity-80 bg-black flex justify-center items-center h-full p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-5xl w-full mx-4 flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <img src="/menu.jpg" alt="Menu of the Day" className="w-full h-auto rounded-lg shadow-md" />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4 text-green-600">{translations.menuOfDayTitle}</h1>
            <p className="text-xl mb-6">{translations.menuOfDayDescription} <span className="font-bold text-green-600">€11.80</span>!</p>
            <div className="text-left">
              <div className="mb-4">
                <h2 className="text-2xl font-semibold mb-2">{translations.starters}</h2>
                <ul className="list-disc list-inside">
                  {menuOfDay.starters.map(item => (
                    <li key={item.id} className="text-lg">{item.name}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <h2 className="text-2xl font-semibold mb-2">{translations.fish}</h2>
                <ul className="list-disc list-inside">
                  {menuOfDay.fish.map(item => (
                    <li key={item.id} className="text-lg">{item.name}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <h2 className="text-2xl font-semibold mb-2">{translations.meat}</h2>
                <ul className="list-disc list-inside">
                  {menuOfDay.meat.map(item => (
                    <li key={item.id} className="text-lg">{item.name}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <h2 className="text-2xl font-semibold mb-2">{translations.pasta}</h2>
                <ul className="list-disc list-inside">
                  {menuOfDay.pasta.map(item => (
                    <li key={item.id} className="text-lg">{item.name}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <h2 className="text-2xl font-semibold mb-2">{translations.vegetarian}</h2>
                <ul className="list-disc list-inside">
                  {menuOfDay.vegetarian.map(item => (
                    <li key={item.id} className="text-lg">{item.name}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">{translations.dessertOrTeaOrCoffee}</h2>
                <ul className="list-disc list-inside">
                  {menuOfDay.dessert.map(item => (
                    <li key={item.id} className="text-lg">{item.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuOfDay;
