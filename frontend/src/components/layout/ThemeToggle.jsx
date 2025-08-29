import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  // Initialize directly from localStorage
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button onClick={() => setIsDark(!isDark)}>
      {isDark ? "Dark 🌙" : "Light ☀️"}
    </button>
  );
};

export default ThemeToggle;
