import React, {useState, useEffect} from "react";

const ThemeToggle = () => {
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") || "light";
      setCurrentTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const newTheme = html.classList.toggle("dark") ? "dark" : "light";
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button onClick={toggleTheme} className="text-gray-900 dark:text-white">
      {currentTheme === "dark" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
