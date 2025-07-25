import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Eye, EyeOff, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebase";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // ✅ Email/Password Login
  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // ✅ redirect to home or dashboard
    } catch (err: any) {
      setError(getFriendlyError(err.message));
    } finally {
      setLoading(false);
    }
  };

  // ✅ Google Login
  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (err: any) {
      setError(getFriendlyError(err.message));
    } finally {
      setLoading(false);
    }
  };

  // ✅ Forgot Password
  const handleForgotPassword = async () => {
    if (!email) return setError("Enter your email to reset password");
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent to your email");
    } catch (err: any) {
      setError(getFriendlyError(err.message));
    }
  };

  const getFriendlyError = (msg: string) => {
    if (msg.includes("auth/user-not-found"))
      return "User not found. Please sign up.";
    if (msg.includes("auth/wrong-password")) return "Incorrect password.";
    if (msg.includes("auth/too-many-requests"))
      return "Too many attempts. Try later.";
    return "Something went wrong. Please try again.";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 max-w-md w-full transition-colors duration-300"
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Login to Cavora
        </h2>

        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

        <div className="space-y-4">
          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 pl-11 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
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
              className="w-full px-4 py-3 pl-11 pr-11 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Lock className="absolute top-3 left-3 h-5 w-5 text-gray-500 dark:text-gray-400" />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-2.5 right-3 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>

          {/* Forgot Password */}
          <button
            onClick={handleForgotPassword}
            className="text-sm text-indigo-600 dark:text-cyan-400 hover:underline self-end block text-right"
          >
            Forgot password?
          </button>

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleLogin}
            disabled={loading || !email || !password}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Log In"}
          </motion.button>
        </div>

        {/* Divider */}
        <div className="my-6 text-center text-gray-500 dark:text-gray-400 text-sm">
          or
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center bg-white dark:bg-gray-700 text-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg py-2 hover:shadow-md transition-colors"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="h-5 w-5 mr-2"
          />
          Continue with Google
        </button>

        <p className="text-center text-sm mt-6 text-gray-600 dark:text-gray-400">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-indigo-600 dark:text-cyan-400 font-medium cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
