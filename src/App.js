import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import MenuScreen from './components/MenuScreen';
import CookiePolicy from './components/CookiePolicy';

function App() {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  const handleAcceptCookies = () => {
    setCookiesAccepted(true);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/menu" element={<MenuScreen />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Routes>

          {!cookiesAccepted && (
            <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 rounded-lg shadow-md p-4 max-w-md text-center z-50">
              <h2 className="text-sm font-semibold">Cookies Consent</h2>
              <p className="text-[12px] text-gray-600">
                This website uses cookies to help you have a superior and more admissible browsing experience on the website.
                <a href="/cookie-policy" target="_blank" rel="noopener noreferrer" className="text-green-700 ml-1">Read more</a>
              </p>
              <div className="mt-4">
                <button
                  onClick={handleAcceptCookies}
                  className="px-4 py-2 bg-green-700 text-white text-[12px] rounded mr-2"
                >
                  Accept
                </button>
                <button
                  onClick={() => setCookiesAccepted(true)}
                  className="px-4 py-2 bg-gray-300 text-black text-[12px] rounded"
                >
                  Decline
                </button>
              </div>
            </div>
          )}
        </div>

        <footer className="w-full bg-cover bg-center text-white py-4" style={{
          backgroundImage: `linear-gradient(rgba(0, 100, 0, 0.6), rgba(0, 100, 0, 0.6)), url('https://wallpapers.com/images/hd/abstract-italy-flag-ggo2dh23l4nj8nrz.jpg')`
        }}>
          <p className="text-sm font-bold text-center">
            Copyright ©2024 All rights reserved | Site Created by 
            <a href="https://www.dss-pro.pt/" target="_blank" rel="noopener noreferrer" className="inline-block ml-2">
              <img src="https://www.dss-pro.pt/assets/dspro-IMkxotd7.svg" alt="DSPRO Logo" className="inline h-5" />
            </a>
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
