import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Github, Eye, EyeOff } from 'lucide-react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!name || !email || !password) return alert('Please fill all fields');
    try {
      console.log('Signing up:', { name, email, password });
      setTimeout(() => navigate('/dashboard'), 1000);
    } catch (error) {
      alert('Signup failed.');
    }
  };

  const handleGoogleSignup = () => {
    alert('Google signup not implemented yet');
  };

  const handleGithubSignup = () => {
    alert('GitHub signup not implemented yet');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 max-w-md w-full"
      >
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">Create an Account</h2>
          <p className="text-gray-600 dark:text-gray-400">Join Cavora to unlock tools & insights</p>
        </motion.div>

        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 pl-11 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <User className="absolute top-3 left-3 h-5 w-5 text-gray-500 dark:text-gray-400" />
          </div>

          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 pl-11 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <Mail className="absolute top-3 left-3 h-5 w-5 text-gray-500 dark:text-gray-400" />
          </div>

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 pl-11 pr-11 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <Lock className="absolute top-3 left-3 h-5 w-5 text-gray-500 dark:text-gray-400" />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-2.5 right-3 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleSignup}
            className="w-full bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white font-semibold py-3 rounded-lg transition-all"
          >
            Sign Up
          </motion.button>
        </div>

        <div className="my-6 text-center text-gray-500 dark:text-gray-400 text-sm">or continue with</div>

        <div className="flex gap-4">
          <button
            onClick={handleGoogleSignup}
            className="flex-1 flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg py-2 hover:shadow-md transition-all"
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5 mr-2 dark:invert" />
            Google
          </button>
          <button
            onClick={handleGithubSignup}
            className="flex-1 flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg py-2 hover:shadow-md transition-all"
          >
            <Github className="h-5 w-5 mr-2" />
            GitHub
          </button>
        </div>

        <p className="text-center text-sm mt-6 text-gray-600 dark:text-gray-400">
          Already have an account?{' '}
          <span
            className="text-indigo-600 dark:text-cyan-400 font-medium cursor-pointer hover:underline"
            onClick={() => navigate('/login')}
          >
            Log in
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
