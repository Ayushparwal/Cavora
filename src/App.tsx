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

// ✅ Import the DSA Toolkit page
import DsaToolkit from './pages/dsa/DsaToolkit';



import ArrayToolkit from "./pages/dsa/ArrayToolkit"; 
  import SlidingWindow from "./pages/dsa/array/SlidingWindow";
  import TwoPointers from './pages/dsa/array/TwoPointers';
import StringToolkit from "./pages/dsa/StringToolkit";



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
                  <Route path="/dsa/array" element={<ArrayToolkit />} />
                       <Route path="/dsa/array/slidingwindow" element={<SlidingWindow />} />
                       <Route path="/dsa/array/twopointers" element={<TwoPointers />} />

                       
               <Route path="/dsa/string" element={<StringToolkit />} />



              

            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;




