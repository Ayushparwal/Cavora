import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import TryOut from './components/TryOut';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Login from './components/Login';
import Signup from './components/Signup';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import Integrations from './components/Integrations';

const HomePage = () => (
  <>
    <Hero />
    <Features />
    <TryOut />
    <Pricing />
    <Contact />
    <Footer />
  </>
);

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Navbar />
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/integrations" element={<Integrations />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
