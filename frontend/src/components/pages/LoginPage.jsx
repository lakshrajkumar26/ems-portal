// src/pages/Login.jsx
import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4">
        <h1 className="text-xl font-bold">SwapSkills</h1>
        <nav className="space-x-6 text-sm">
          <a href="#" className="hover:text-blue-400">Home</a>
          <a href="#" className="hover:text-blue-400">About Us</a>
          <a href="#" className="hover:text-blue-400">Register</a>
          <a href="#" className="hover:text-blue-400">Login</a>
        </nav>
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
          <div className="bg-gray-800 bg-opacity-80 p-8 rounded-xl shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-2">Welcome to Vaid PR Blogs</h2>
            <p className="text-gray-400 mb-6 text-sm">Log in to continue with blogs</p>

            <form>
              <div className="mb-4">
                <label className="block text-sm mb-2">Username</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm mb-2">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
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
                <a href="#" className="text-blue-400 hover:underline">
                  Sign Up
                </a>
              </p>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                forgot password
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
