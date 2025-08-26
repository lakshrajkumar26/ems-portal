// src/pages/HomePage.jsx
import React, { useState, useEffect } from "react";

// Theme Toggle Component
function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-3 py-1 rounded-lg border border-gray-400 dark:border-gray-600 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-white flex flex-col">
     
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Learn & Share Skills Easily
        </h2>
        <p className="max-w-2xl text-gray-600 dark:text-gray-400 mb-6">
          Connect with people around the world, exchange skills, and grow your knowledge.  
          Whether you’re a beginner or a pro, SwapSkills is the place to learn and share.
        </p>
        <div className="space-x-4">
          <a
            href="#register"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition"
          >
            Get Started
          </a>
          <a
            href="#features"
            className="px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-900 rounded-lg shadow-lg transition dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-16 bg-gray-50 dark:bg-gray-800">
        <h3 className="text-3xl font-bold text-center mb-10">Why SwapSkills?</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-900">
            <h4 className="text-xl font-semibold mb-2">Skill Exchange</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Teach what you know, and learn what you want from others in the community.
            </p>
          </div>
          <div className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-900">
            <h4 className="text-xl font-semibold mb-2">Global Community</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Connect with learners and experts worldwide and build your network.
            </p>
          </div>
          <div className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-900">
            <h4 className="text-xl font-semibold mb-2">Flexible Learning</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Learn at your own pace through sessions, chats, or video lessons.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-6 text-center border-t border-gray-300 dark:border-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} SwapSkills. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
