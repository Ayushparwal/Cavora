import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Eye, EyeOff, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ Added

// ✅ Firebase imports
import { auth, googleProvider } from "../firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // ✅ Hook for navigation

  // ✅ Email/Password Login
  const handleLogin = async () => {
    if (!email || !password) return alert("Please fill in all fields");
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in:", userCredential.user);
      alert(`Welcome back, ${userCredential.user.email}`);

      // ✅ Redirect to internal route
      navigate("https://cavora.tech"); 
    } catch (error: any) {
      console.error("Login error:", error.message);
      alert(error.message);
    }
  };

  // ✅ Google Login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google user:", result.user);
      alert(`Welcome, ${result.user.displayName}`);

      // ✅ Redirect internally
      navigate("https://cavora.tech");
    } catch (error: any) {
      console.error("Google login error:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4">
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
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
            Welcome Back
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Log in to continue to Cavora
          </p>
        </motion.div>

        <div className="space-y-4">
          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 pl-11 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Mail className="absolute top-3 left-3 h-5 w-5 text-gray-500 dark:text-gray-400" />
          </div>

          {/* Password Field */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-3 pl-11 pr-11 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Lock className="absolute top-3 left-3 h-5 w-5 text-gray-500 dark:text-gray-400" />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-2.5 right-3 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all"
          >
            Log In
          </motion.button>
        </div>

        {/* Social Login */}
        <div className="my-6 text-center text-gray-500 dark:text-gray-400 text-sm">
          or continue with
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleGoogleLogin}
            className="flex-1 flex items-center justify-center 
               bg-white dark:bg-gray-800 
               text-gray-700 dark:text-gray-200 
               border border-gray-300 dark:border-gray-600 
               rounded-lg py-2 hover:shadow-md transition-all"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="h-5 w-5 mr-2" 
            />
            <span className="font-medium">Google</span>
          </button>
        </div>

        <p className="text-center text-sm mt-6 text-gray-600 dark:text-gray-400">
          Don’t have an account?{" "}
          <span
            className="text-indigo-600 dark:text-cyan-400 font-medium cursor-pointer hover:underline"
            onClick={() => navigate("/signup")} // ✅ Internal navigation
          >
            Sign up
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
