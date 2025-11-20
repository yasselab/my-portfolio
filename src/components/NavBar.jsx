"use client";

import ThemeToggle from "./ThemeToggle";
import LangSwitch from "./ui/LangSwitch";
import { useLang } from "./LanguageProvider";
import Image from "next/image";
import { motion } from "framer-motion";

export default function NavBar() {
  const { lang } = useLang();

  const labels =
    lang === "fr"
      ? ["À propos", "Expérience", "Compétences", "Projets", "Certifications", "Education", "Contact"]
      : ["About", "Experience", "Skills", "Projects", "Certifications", "Education", "Contact"];

  const ids = ["about", "experience", "skills", "projects", "certifications", "education", "contact"];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        sticky top-0 z-40
        bg-brand-bg/70 dark:bg-darkbrand-bg/70
        backdrop-blur-xl
        border-b border-black/5 dark:border-white/10
        shadow-[0_4px_10px_rgba(0,0,0,0.05)]
      "
    >
      <nav
        className="
          max-w-7xl mx-auto h-16
          flex items-center justify-between
          px-4 sm:px-6 lg:px-8
        "
      >
        {/* LOGO animé */}
        <motion.a
          href="#hero"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
          className="flex items-center"
        >
          <Image
            src="/logo2.png"
            alt="Yassmine Elabjani Logo"
            width={145}
            height={50}
            className="object-contain select-none"
          />
        </motion.a>

        {/* NAVIGATION LINKS */}
        <div className="hidden md:flex items-center gap-8 text-[11px] font-medium">
          {labels.map((label, i) => (
            <motion.a
              key={label}
              href={`#${ids[i]}`}
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 250, damping: 14 }}
              className="
                relative uppercase tracking-[0.18em]
                text-brand-text/80 dark:text-darkbrand-text/80
                hover:text-brand-accent dark:hover:text-darkbrand-accent
                transition-colors
              "
            >
              {label}

              {/* underline animation */}
              <span
                className="
                  absolute left-0 -bottom-1 
                  h-[2px] w-0 bg-[#D9A86C] 
                  transition-all duration-300
                  group-hover:w-full
                "
              />
            </motion.a>
          ))}
        </div>

        {/* SWITCHES */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LangSwitch />
        </div>
      </nav>
    </motion.header>
  );
}













// "use client";

// import ThemeToggle from "./ThemeToggle"; // ✅ vrai dark mode toggle
// import LangSwitch from "./ui/LangSwitch";
// import { useLang } from "./LanguageProvider";
// import Image from "next/image";

// export default function NavBar() {
//   const { lang } = useLang();

//   const labels =
//     lang === "fr"
//       ? ["À propos", "Expérience", "Compétences", "Projets", "Contact"]
//       : ["About", "Experience", "Skills", "Projects", "Contact"];

//   const ids = ["about", "experience", "skills", "projects", "contact"];

//   return (
//     <header
//       className="
//       sticky top-0 z-40
//       bg-brand-bg/80 dark:bg-darkbrand-bg/80
//       backdrop-blur-xl
//       border-b border-black/5 dark:border-white/10
//       transition-colors duration-300
//     "
//     >
//       <nav
//         className="
//         max-w-7xl mx-auto
//         h-16 flex items-center justify-between
//         px-4 sm:px-6 lg:px-8
//       "
//       >
//         {/* --- LOGO --- */}
//         <a href="#hero" className="flex items-center">
//           <Image
//             src="/logo2.png"
//             alt="Yassmine Elabjani Logo"
//             width={140}
//             height={45}
//             className="object-contain select-none drop-shadow-sm"
//             priority
//           />
//         </a>

//         {/* --- NAVIGATION LINKS --- */}
//         <div className="hidden md:flex items-center gap-8 text-[11px] font-medium">
//           {labels.map((label, i) => (
//             <a
//               key={label}
//               href={`#${ids[i]}`}
//               className="
//                 uppercase tracking-[0.20em]
//                 text-brand-text/80 dark:text-darkbrand-text/80
//                 hover:text-brand-accent dark:hover:text-darkbrand-accent
//                 transition
//               "
//             >
//               {label}
//             </a>
//           ))}
//         </div>

//         {/* --- SWITCHES (DARK MODE + LANGUE) --- */}
//         <div className="flex items-center gap-3">
//           <ThemeToggle />   {/* 🌙 / ☀️ bouton dark mode */}
//           <LangSwitch />    {/* FR / EN */}
//         </div>
//       </nav>
//     </header>
//   );
// }








