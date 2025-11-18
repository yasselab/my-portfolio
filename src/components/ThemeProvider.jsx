//non utilisé
"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  // Charger le thème depuis localStorage
  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
    }
  }, []);

  // Appliquer le thème au changement
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}









// "use client";

// import { createContext, useContext, useEffect, useState } from "react";

// const ThemeContext = createContext();

// export const useTheme = () => useContext(ThemeContext);

// export default function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState("light");

//   // Charger le thème depuis localStorage au démarrage
//   useEffect(() => {
//     if (typeof window === "undefined") return;
//     const saved = window.localStorage.getItem("theme");
//     if (saved === "light" || saved === "dark") {
//       setTheme(saved);
//     }
//   }, []);

//   // Appliquer le theme sur <html> + sauvegarde
//   useEffect(() => {
//     if (typeof document === "undefined") return;
//     document.documentElement.classList.toggle("dark", theme === "dark");
//     window.localStorage.setItem("theme", theme);
//   }, [theme]);

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }
