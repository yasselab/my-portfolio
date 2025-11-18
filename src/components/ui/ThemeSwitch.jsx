//non utilisé
"use client";

import { useTheme } from "../ThemeProvider";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
      className="
        flex items-center justify-center
        h-8 w-8
        rounded-full
        border border-black/70 dark:border-white/80
        bg-white/90 dark:bg-transparent
        text-black dark:text-white
        shadow-sm hover:shadow-md
        transition
      "
    >
      {/* petit croissant de lune / soleil */}
      <span className="text-[14px] leading-none">
        {isDark ? "☀" : "☾"}
      </span>
    </button>
  );
}









// "use client";

// import { useTheme } from "../ThemeProvider";

// export default function ThemeSwitch() {
//   const { theme, setTheme } = useTheme();
//   const isDark = theme === "dark";

//   return (
//     <button
//       onClick={() => setTheme(isDark ? "light" : "dark")}
//       className="flex items-center gap-2 rounded-full border border-zinc-300 dark:border-zinc-600 bg-white/80 dark:bg-zinc-900/80 px-3 py-1 text-xs font-medium shadow-sm hover:shadow-md hover:-translate-y-[1px] transition"
//     >
//       <span className="w-5 h-5 rounded-full flex items-center justify-center bg-zinc-900 text-white dark:bg-amber-300 dark:text-zinc-900 text-[10px]">
//         {isDark ? "☀" : "☾"}
//       </span>
//       <span>{isDark ? "Light" : "Dark"}</span>
//     </button>
//   );
// }
