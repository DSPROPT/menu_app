import React from 'react';
import { useNavigate } from 'react-router-dom';

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

// Translations for the welcome message and other strings
const translations = {
  en: {
    welcome: "Welcome to Our Restaurant",
    selectLanguage: "Select your language:",
  },
  es: {
    welcome: "Bienvenido a Nuestro Restaurante",
    selectLanguage: "Selecciona tu idioma:",
  },
  pt: {
    welcome: "Bem-vindo ao Nosso Restaurante",
    selectLanguage: "Selecione seu idioma:",
  },
  de: {
    welcome: "Willkommen in unserem Restaurant",
    selectLanguage: "Wählen Sie Ihre Sprache:",
  },
  it: {
    welcome: "Benvenuti al nostro ristorante",
    selectLanguage: "Seleziona la tua lingua:",
  },
  fr: {
    welcome: "Bienvenue dans notre restaurant",
    selectLanguage: "Sélectionnez votre langue:",
  },
  nl: {
    welcome: "Welkom in ons restaurant",
    selectLanguage: "Selecteer uw taal:",
  },
  ru: {
    welcome: "Добро пожаловать в наш ресторан",
    selectLanguage: "Выберите ваш язык:",
  },
  uk: {
    welcome: "Ласкаво просимо до нашого ресторану",
    selectLanguage: "Оберіть вашу мову:",
  }
};


const Welcome = () => {
  const navigate = useNavigate();
  
  // Get the first part of the browser language code
  const browserLang = navigator.language.split('-')[0];
  
  // Find the closest supported language or default to English
  const lang = Object.keys(translations).includes(browserLang) ? browserLang : 'en';

  // Get translations based on the browser's language
  const { welcome, selectLanguage } = translations[lang];

  return (
    <div className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: "url('/bg_1.jpg')" }}>
      <div className="bg-white bg-opacity-60 p-8 rounded-lg shadow-xl text-center">
        <img src="/logo.png" alt="Restaurant Logo" className="mx-auto h-32 mb-4" />
        <h1 className="text-4xl font-bold mb-4">{welcome}</h1>
        <img src="/restaurant.jpg" alt="Restaurant" className="mx-auto h-64 mb-4" />
        <p className="text-xl mb-4">{selectLanguage}</p>
        <div className="flex">
          {Object.keys(flags).map(langKey => (
            <button key={langKey} onClick={() => navigate('/menu', { state: { language: langKey } })}
            className="focus:outline-none mx-1">
              <img src={flags[langKey]} alt={`${langKey} flag`} className="flag-image" />
            </button>
          ))}
        </div>
      {/* Footer - Stays at the bottom */}
      <footer className="w-full bg-cover bg-center text-white py-4 rounded-md" style={{
          backgroundImage: `linear-gradient(rgba(0, 100, 0, 0.6), rgba(0, 100, 0, 0.6)), url('https://wallpapers.com/images/hd/abstract-italy-flag-ggo2dh23l4nj8nrz.jpg')`
        }}>
          <p className="text-[12px] font-bold text-center">
            Copyright ©2024 All rights reserved | Site Created by 
            <a href="https://www.dss-pro.pt/" target="_blank" rel="noopener noreferrer" className="inline-block ml-2">
              <img src="https://www.dss-pro.pt/assets/dspro-IMkxotd7.svg" alt="DSPRO Logo" className="inline h-5" />
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Welcome;
