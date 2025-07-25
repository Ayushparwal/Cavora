import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import Cookies from './components/Cookie';
import Community from './components/Community';

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
      <Footer />
    </>
  );
};

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/community" element={<Community />} />
          <Route path="/cookies" element={<Cookies />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
