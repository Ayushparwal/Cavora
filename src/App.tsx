import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';

import Navbar from './components/Navbar';
import Hero from './components/Hero';

import TryOut from './components/TryOut';
// import Pricing from './components/Pricing';
import Footer from './components/Footer';

import PrivacyPolicy from './components/PrivacyPolicy';
import Cookies from './components/Cookie';
import Community from "./components/Community"; 



// Scroll handler inside HomePage
const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get('scrollTo');
    if (scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(scrollTo);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <section id="home"><Hero /></section>
      
      <section id="tryout"><TryOut /></section>
      {/* <section id="pricing"><Pricing /></section> */}
      <Footer />
    </>
  );
};

function App() {
  return (
    <ThemeProvider>
      
        <Router>
          <Navbar />
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              
              <Route path="/community" element={<Community />} />
              <Route path="/cookies" element={<Cookies />} />
              
            </Routes>
          </div>
        </Router>
      
    </ThemeProvider>
  );
}

export default App;
