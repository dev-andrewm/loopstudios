import './App.css';
import { useState, useEffect } from 'react';

import Header from './components/layout/header/Header';
import Home from './components/pages/home/Home';
import Footer from './components/layout/footer/Footer';

import MenuCloseMobile from './components/layout/menuCloseMobile/MenuCloseMobile';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [menuCloseIsVisible, setMenuCloseIsVisible] = useState(false);
  const [menuItensIsVisible, setMenuItensIsVisible] = useState(false);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth]);

  return (
    <Router>
      <Header
        menuCloseIsVisible={menuCloseIsVisible}
        menuItensIsVisible={menuItensIsVisible}
        setMenuCloseIsVisible={setMenuCloseIsVisible}
        setMenuItensIsVisible={setMenuItensIsVisible}
        isSmallScreen={isSmallScreen}
      />
      <MenuCloseMobile
        menuCloseIsVisible={menuCloseIsVisible}
        setMenuItensIsVisible={setMenuItensIsVisible}
        setMenuCloseIsVisible={setMenuCloseIsVisible}
        isSmallScreen={isSmallScreen}
      />
      <Routes>
        <Route
          path="/"
          element={<Home isSmallScreen={isSmallScreen} />}
        ></Route>
      </Routes>
      <Footer isSmallScreen={isSmallScreen} />
    </Router>
  );
}

export default App;
