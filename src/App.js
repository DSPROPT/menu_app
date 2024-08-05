import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Welcome from './components/Welcome';
import MenuScreen from './components/MenuScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/menu" element={<MenuScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
