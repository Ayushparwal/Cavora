import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon, LogOut, User as UserIcon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { auth } from '../firebase';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [hasInitialized, setHasInitialized] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setHasInitialized(true);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    navigate('/login');
  };

  const scrollToSection = (id: string) => {
    if (window.location.pathname !== '/') {
      navigate(`/?scrollTo=${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-gray-700/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="flex items-center space-x-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate('/')}
          >
            {/* Optional logo goes here */}
            <span className="text-xl font-bold text-gray-800 dark:text-white">Cavora</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors"
            >
              Pricing
            </button>

            {hasInitialized && (!user ? (
              <button
                onClick={() => navigate('/login')}
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors"
              >
                Log In
              </button>
            ) : (
              <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <UserIcon size={18} />
                {user.displayName || 'User'}
                <button
                  onClick={handleLogout}
                  className="ml-3 flex items-center gap-1 text-red-500 hover:underline"
                >
                  <LogOut size={16} /> Logout
                </button>
              </div>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('tryout')}
              className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white rounded-lg hover:from-cyan-600 hover:to-indigo-700 transition-all"
            >
              Try Cavora
            </motion.button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              ) : (
                <Sun className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              )}
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-lg mt-2 p-4 space-y-4"
          >
            <button onClick={() => scrollToSection('home')} className="block text-gray-700 dark:text-gray-300">Home</button>
            <button onClick={() => navigate('/privacy')} className="block text-gray-700 dark:text-gray-300">Privacy</button>

            {hasInitialized && (!user ? (
              <button
                onClick={() => {
                  navigate('/login');
                  setIsOpen(false);
                }}
                className="block text-gray-700 dark:text-gray-300"
              >
                Log In
              </button>
            ) : (
              <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <UserIcon size={18} />
                {user.displayName || 'User'}
                <button
                  onClick={handleLogout}
                  className="ml-2 text-red-500 hover:underline"
                >
                  <LogOut size={16} /> Logout
                </button>
              </div>
            ))}

            <button
              onClick={() => scrollToSection('tryout')}
              className="block text-white bg-gradient-to-r from-cyan-500 to-indigo-600 px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-indigo-700"
            >
              Try Cavora
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
