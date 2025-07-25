import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // ✅ Signup and redirect to cavora.tech/chat
  const handleSignup = async () => {
    if (!name || !email || !password) return alert("Please fill all fields");
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created:", userCredential.user);

      // ✅ Redirect to external URL (keeps user logged in)
      alert(`Welcome, ${name}!`);
      window.location.href = "https://cavora.tech/";
    } catch (error: any) {
      console.error("Signup error:", error.message);
      alert(error.message);
    }
  };

  // ✅ Google Signup and redirect
  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google user:", result.user);
      alert(`Welcome, ${result.user.displayName}`);
      window.location.href = "https://cavora.tech/";
    } catch (error: any) {
      console.error("Google signup error:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 max-w-md w-full"
      >
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Create an Account
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Join Cavora to unlock tools & insights
          </p>
        </div>

        <div className="space-y-4">
          {/* Full Name */}
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

          {/* Email */}
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

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
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
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Signup Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleSignup}
            className="w-full bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white font-semibold py-3 rounded-lg transition-all"
          >
            Sign Up
          </motion.button>
        </div>

        {/* OR Google Signup */}
        <div className="my-6 text-center text-gray-500 dark:text-gray-400 text-sm">
          or continue with
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleGoogleSignup}
            className="flex-1 flex items-center justify-center 
               bg-white text-gray-700 
               dark:bg-gray-700 dark:text-white 
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
      </motion.div>
    </div>
  );
};

export default Signup;
