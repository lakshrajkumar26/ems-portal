

// src/pages/Login.jsx
import React, { useState, useEffect } from "react";

export default function Login() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode on body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-white transition-colors duration-300">
      Navbar
      <header className="flex justify-between items-center px-8 py-4">
        <h1 className="text-xl font-bold">SwapSkills</h1>
        <nav className="space-x-6 text-sm">
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Home</a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">About Us</a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Register</a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Login</a>
        </nav>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-6 px-3 py-1 rounded-full border border-gray-400 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {darkMode ? "🌙 Dark" : "☀️ Light"}
        </button>
      </header>

      {/* Left Section */}
      <div className="flex flex-1">
        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center gap-3">
            <span className="w-4 h-4 bg-green-500 rounded-full"></span>
            <p className="text-lg font-medium">Vaid PR Blogs</p>
          </div>
        </div>

        {/* Login Card */}
        <div className="flex-1 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-80 p-8 rounded-xl shadow-lg w-full max-w-md transition-colors duration-300">
            <h2 className="text-2xl font-bold mb-2 dark:text-white text-gray-900">
              Welcome to Vaid PR Blogs
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
              Log in to continue with blogs
            </p>

            <form>
              <div className="mb-4">
                <label className="block text-sm mb-2">Username</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm mb-2">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition"
              >
                Log in
              </button>
            </form>

            <div className="flex justify-between items-center mt-4 text-sm">
              <p>
                Not a member yet?{" "}
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Sign Up
                </a>
              </p>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                Forgot password
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
