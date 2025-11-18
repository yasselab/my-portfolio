"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Évite les problèmes d'hydratation
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full border bg-brand-chip dark:bg-darkbrand-section 
                 transition text-lg hover:scale-105"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
