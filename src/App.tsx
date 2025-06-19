import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import TryOut from './components/TryOut';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import Integrations from './components/Integrations';
import Cookies from './components/Cookie';



import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Runcode from "./pages/Runcode";




// ✅ Import the DSA Toolkit page
import DsaToolkit from './pages/dsa/DsaToolkit';






const HomePage = () => (
  <>
    <Hero />
    <Features />
    <TryOut />
    <Pricing />
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
              <Route path="/" element={<HomePage />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/integrations" element={<Integrations />} />
              <Route path="/cookies" element={<Cookies />} />
              
              {/* ✅ ALL Toolkit Route */}
              <Route path="/dsa" element={<DsaToolkit />} />
                  

              { /*login route*/}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/run-code" element={<Runcode />} />


              

            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;




