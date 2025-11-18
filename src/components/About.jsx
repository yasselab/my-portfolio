"use client";

import { useEffect, useState } from "react";
import { useLang } from "./LanguageProvider";
import { motion } from "framer-motion";
import AboutCard from "./AboutCard"; // 🚀 intégré ici

export default function About() {
  const { lang } = useLang();

  const t =
    lang === "fr"
      ? { soft: "Soft Skills" }
      : { soft: "Soft Skills" };

  const skills =
    lang === "fr"
      ? ["Analytique", "Rigoureuse", "Esprit d'équipe", "Créative", "Proactive"]
      : ["Analytical", "Hardworking", "Team Player", "Creative", "Proactive"];

  const [angle, setAngle] = useState(0);

  // 💫 rotation super fluide
  useEffect(() => {
    let frameId;

    const animate = () => {
      setAngle((prev) => (prev + 0.35) % 360); // léger + fluide
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <motion.section
      id="about"
      className="
        py-24
        bg-brand-section/60 dark:bg-darkbrand-section/90
        border-y border-brand-accent/20 dark:border-darkbrand-accent/20
      "
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="
        max-w-7xl mx-auto px-6 lg:px-12
        grid grid-cols-1 lg:grid-cols-[1.3fr_60px_1fr]
        gap-16 items-center
      ">
        
        {/* LEFT — GOLD CARD */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        >
          <AboutCard /> 
        </motion.div>

        {/* CENTER DIVIDER */}
        <div className="hidden lg:flex justify-center">
          <div className="
            w-[2px] h-72
            bg-gradient-to-b from-[#D9A86C] via-[#C89155] to-[#D9A86C]
            opacity-90 rounded-full
          " />
        </div>

        {/* RIGHT — ROTATING SKILLS */}
        <motion.div
          className="relative h-[340px] flex flex-col items-center justify-center"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
        >
          <h3 className="uppercase tracking-[0.25em] text-xs mb-6 text-brand-accent dark:text-darkbrand-accent">
            {t.soft}
          </h3>

          {/* halo blanc / dark */}
          <div className="
            absolute inset-y-10 w-[260px]
            rounded-full bg-white/40 dark:bg-black/30 blur-3xl
            pointer-events-none
          " />

          {/* SOFT SKILLS CIRCLE */}
          <div className="relative h-[260px] w-[260px]">
            {skills.map((label, i) => {
              const radius = 95;
              const skillAngle = angle + i * (360 / skills.length);

              const x = radius * Math.cos((skillAngle * Math.PI) / 180);
              const y = radius * Math.sin((skillAngle * Math.PI) / 180);

              // skill en haut = zone 340° → 20°
              const normalized = (skillAngle % 360 + 360) % 360;
              const isTop = normalized > 340 || normalized < 20;

              return (
                <div
                  key={label}
                  className={`
                    absolute left-1/2 top-1/2 flex items-center justify-center
                    rounded-full transition-all duration-500 ease-out
                    ${
                      isTop
                        ? "h-28 w-28 text-[13px] font-semibold text-brand-text dark:text-white bg-gradient-to-br from-[#D9A86C] via-[#D9A86C] to-[#C89155] shadow-xl glow-gold scale-110"
                        : "h-16 w-16 text-[11px] bg-brand-bg/90 dark:bg-darkbrand-bg/80 text-brand-text/70 dark:text-darkbrand-text/70 shadow-md opacity-90"
                    }
                  `}
                  style={{
                    transform: `translate(${x}px, ${-y}px)`,
                  }}
                >
                  {label}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}










// "use client";

// import { useEffect, useState } from "react";
// import { useLang } from "./LanguageProvider";
// import { motion } from "framer-motion";
// import AboutCard from "./AboutCard";


// export default function About() {
//   const { lang } = useLang();

//   const t =
//     lang === "fr"
//       ? {
//           title: "À propos de moi",
//           text:
//             "Je suis passionnée par la data, le cloud et l’ingénierie logicielle. J’aime transformer des problématiques métiers en solutions techniques élégantes, robustes et maintenables.",
//           soft: "Soft Skills",
//         }
//       : {
//           title: "About me",
//           text:
//             "I am passionate about data, cloud and software engineering. I love turning business challenges into elegant, robust and maintainable technical solutions.",
//           soft: "Soft Skills",
//         };

//   const skills =
//     lang === "fr"
//       ? ["Analytique", "Rigoureuse", "Esprit d'équipe", "Créative", "Proactive"]
//       : ["Analytical", "Hardworking", "Team Player", "Creative", "Proactive"];

//   const [angle, setAngle] = useState(0);

//   // 💫 rotation FLUIDE avec requestAnimationFrame
//   useEffect(() => {
//     let frameId;


//     const animate = () => {
//       setAngle((prev) => (prev + 0.4) % 360); // petite incrémentation => très fluide
//       frameId = requestAnimationFrame(animate);
//     };

//     frameId = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(frameId);
//   }, []);

//   return (
//     <motion.section
//       id="about"
//       className="
//         py-20
//         bg-brand-section/60 dark:bg-darkbrand-section/90
//         border-y border-brand-accent/20 dark:border-darkbrand-accent/20
//       "
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.3 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//     >
//       <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[1fr_50px_1fr] gap-12 lg:gap-16 items-center">
//         {/* LEFT : TEXT */}
//         <motion.div
//           className="space-y-4"
//           initial={{ opacity: 0, x: -30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
//         >
//           <h2 className="text-3xl font-bold text-brand-text dark:text-darkbrand-text">
//             {t.title}
//           </h2>
//           <p className="text-brand-text/80 dark:text-darkbrand-text/80 text-[15px] leading-relaxed">
//             {t.text}
//           </p>
//         </motion.div>

//         {/* DIVIDER */}
//         <div className="hidden lg:flex justify-center">
//           <div className="w-[2px] h-64 bg-gradient-to-b from-[#D9A86C] via-[#C89155] to-[#D9A86C] opacity-80 rounded-full" />
//         </div>

//         {/* RIGHT : ROTATING SOFT SKILLS */}
//         <motion.div
//           className="relative h-[320px] flex flex-col items-center justify-center"
//           initial={{ opacity: 0, x: 30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//         >
//           <h3 className="uppercase tracking-[0.25em] text-xs mb-6 text-brand-accent dark:text-darkbrand-accent">
//             {t.soft}
//           </h3>

//           {/* halo de fond */}
//           <div className="absolute inset-y-10 w-[220px] rounded-full bg-white/40 dark:bg-black/30 blur-3xl pointer-events-none" />

//           <div className="relative h-[240px] w-[240px]">
//             {skills.map((label, i) => {
//               const radius = 90;
//               const skillAngle = angle + i * (360 / skills.length);

//               const x = radius * Math.cos((skillAngle * Math.PI) / 180);
//               const y = radius * Math.sin((skillAngle * Math.PI) / 180);

//               const normalized = (skillAngle % 360 + 360) % 360;
//               const isTop = normalized > 330 || normalized < 30; // zone haute

//               return (
//                 <div
//                   key={label}
//                   className={`
//                     absolute left-1/2 top-1/2 flex items-center justify-center
//                     rounded-full
//                     transition-all duration-400 ease-out
//                     ${
//                       isTop
//                         ? "h-28 w-28 text-[13px] font-semibold text-brand-text dark:text-white bg-gradient-to-br from-[#F8E9E4] via-[#D9A86C] to-[#C89155] glow-gold scale-110"
//                         : "h-16 w-16 text-[11px] bg-brand-bg/90 dark:bg-darkbrand-bg/80 text-brand-text/80 dark:text-darkbrand-text/75 shadow-md opacity-85"
//                     }
//                   `}
//                   style={{
//                     transform: `translate(${x}px, ${-y}px)`,
//                   }}
//                 >
//                   {label}
//                 </div>
//               );
//             })}
//           </div>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// }






