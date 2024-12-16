import { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(null); // Inicialmente es null

  useEffect(() => {
    // Cargar el modo oscuro desde localStorage
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode) {
      setDarkMode(storedMode === "true");
    } else {
      // Si no hay valor en localStorage, usar la preferencia del sistema
      setDarkMode(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    if (darkMode === null) return;

    // Aplica el modo oscuro al body y guardarlo en localStorage
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  if (darkMode === null) {
    return null; 
  }

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-1 bg-gray-300 rounded-full"
    >
      {darkMode ? "🌙" : "☀️"}
    </button>
  );
};

export default DarkModeToggle;
