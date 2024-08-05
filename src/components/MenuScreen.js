import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MenuItemCard from './MenuItemCard';
import PizzaItemCard from './PizzaItemCard';
import { menus } from './menu/menu';
import { menuTranslations } from './menu_translations';

const flags = {
  english: '/flags/english.png',
  spanish: '/flags/spanish.png',
  portuguese: '/flags/portuguese.png',
  german: '/flags/german.png',
  italian: '/flags/italian.png',
  french: '/flags/french.png',
  dutch: '/flags/dutch.png',
  russian: '/flags/russian.png',
  ukrainian: '/flags/ukrainian.png',
};






const menuTypes = ['entries', 'pizzas', 'salads', 'risottos', 'pastas', 'meats', 'fish', 'desserts'];

const MenuScreen = () => {
  const { state } = useLocation();
  const language = state?.language || 'english';
  const [menuType, setMenuType] = useState('entries');
  const [selectedLanguage, setSelectedLanguage] = useState(language);
  const [currentMenu, setCurrentMenu] = useState([]);

  useEffect(() => {
    const menuData = menus[menuType][selectedLanguage];
    setCurrentMenu(menuData || []);
  }, [selectedLanguage, menuType]);

  const renderMenuItem = (item) => {
    const commonProps = {
      ...item,
      language: selectedLanguage // Ensure the selected language is passed
    };
  
    if (menuType === 'pizzas') {
      return <PizzaItemCard key={item.id} {...commonProps} />;
    } else {
      return <MenuItemCard key={item.id} {...commonProps} />;
    }
  };
  

  return (
    <div
      className="bg-center min-h-screen"
      style={{
        backgroundImage: "url('/bg_1.jpg')",
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover'
      }}
    >
      <div className="container mx-auto">
        <div className="text-center py-4">
        {menuTypes.map(type => (
            <button key={type} onClick={() => setMenuType(type)}
              className={`mx-2 px-4 py-2 rounded-lg text-black font-medium ${menuType === type ? 'bg-green-500' : 'bg-gray-100 hover:bg-gray-300'}`}>
              {menuTranslations[selectedLanguage][type]}
            </button>
          ))}
        </div>

        <div className="flex justify-center my-2">
          {Object.keys(flags).map(lang => (
            <button key={lang} onClick={() => setSelectedLanguage(lang)} className="focus:outline-none mx-1">
              <img src={flags[lang]} alt={`${lang} flag`} className="w-10 h-8 rounded shadow" />
            </button>
          ))}
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {currentMenu.length > 0 ? currentMenu.map(renderMenuItem) : <p className="col-span-full text-center text-xl text-white">No items available</p>}
        </div>

        {menuType === 'pizzas' && (
          <div className="text-center my-4 p-4 bg-white bg-opacity-80 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-black mb-2">{menuTranslations[selectedLanguage].extraIngredients}:</h2>
            <p className="text-lg text-gray-700">{menuTranslations[selectedLanguage].ingredientsList.join(', ')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuScreen;
