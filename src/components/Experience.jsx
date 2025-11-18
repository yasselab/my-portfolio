"use client";

import { motion } from "framer-motion";
import { useLang } from "./LanguageProvider";
import Image from "next/image";
import TechBadge from "@/components/ui/TechBadge";
import SectionTitle from "./SectionTitle";
import GoldScript from "./GoldScript";


export default function Experience() {
  const { lang } = useLang();

  const t = {
    en: {
      title: "Professional Experience",

      role1: "AI & Full Stack Development Intern",
      location1: "Kénitra, Morocco",
      date1: "June 2025 – July 2025",
      desc1: [
        "Developed a full-stack training management platform integrating a dynamic competency matrix and an AI-based recommendation system for HR.",
        "Built a FastAPI microservice for semantic training recommendation using TF-IDF, domain-specific keywords and Sentence-Transformers embeddings.",
        "Implemented a Spring Boot backend (JWT, Spring Security, MySQL) and a React + TypeScript dashboard for KPI analytics.",
      ],
      tech1: [
        "FastAPI", "Python", "Sentence-Transformers",
        "Spring Boot", "JWT", "MySQL",
        "React", "TypeScript", "Docker", "Postman"
      ],

      role2: "Full Stack Developer – Doctoral Management System",
      location2: "Marrakech, Morocco",
      date2: "June 2024 – August 2024",
      desc2: [
        "Developed a Laravel application managing doctoral enrollment with authentication, role-based access, and application tracking.",
        "Built responsive Blade interfaces aligned with administrative workflows.",
      ],
      tech2: ["Laravel", "Blade", "MySQL", "PHP", "Bootstrap"],
    },

    fr: {
      title: "Expérience Professionnelle",

      role1: "Stagiaire en IA & Développement Full Stack",
      location1: "Kénitra, Maroc",
      date1: "Juin 2025 – Juillet 2025",
      desc1: [
        "Développement d’une plateforme full-stack de gestion des formations avec matrice de compétences dynamique et système de recommandation IA.",
        "Création d’un microservice FastAPI pour la recommandation sémantique (TF-IDF, mots-clés métier, embeddings Sentence-Transformers).",
        "Développement d’un backend Spring Boot (JWT, Spring Security, MySQL) et d’un dashboard React + TypeScript pour les KPIs.",
      ],
      tech1: [
        "React", "Spring Boot", "JWT", "Python",
        "Sentence-Transformers", "MySQL", "FastAPI",
        "TypeScript", "Docker", "Postman"
      ],

      role2: "Développeuse Full Stack – Système Doctoral",
      location2: "Marrakech, Maroc",
      date2: "Juin 2024 – Août 2024",
      desc2: [
        "Développement d’une application Laravel pour la gestion du doctorat (authentification, rôles, suivi des candidatures).",
        "Création d’interfaces Blade responsives adaptées aux besoins administratifs.",
      ],
      tech2: ["Laravel", "PHP", "MySQL", "Blade"],
    },
  }[lang];

  // Animation
  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="experience"
      className="py-20 bg-brand-bg dark:bg-darkbrand-bg transition-colors"
    >
      {/* <h2 className="text-center text-3xl font-bold text-brand-text dark:text-darkbrand-text mb-16">
        {t.title}
      </h2> */}
      {/* HERE */}
      {/* <SectionTitle>{t.title}</SectionTitle>  */}
     <div className="flex justify-center mb-12 pt-6">
  <GoldScript className="text-5xl leading-[1.4] block">
    {t.title}
  </GoldScript>
</div>






      <div className="relative max-w-5xl mx-auto">

        {/* VERTICAL TIMELINE */}
        <div className="absolute left-8 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#D9A86C] via-[#C89155] to-[#D9A86C] opacity-70 rounded-full" />

        {/* ======================= EXPERIENCE 1 ======================= */}
        <motion.div
          variants={cardVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative pl-20 mb-16"
        >
          {/* DOT */}
          <div className="absolute left-6 top-4 w-6 h-6 rounded-full bg-gradient-to-br from-[#D9A86C] to-[#C89155] shadow-xl" />

          {/* CARD */}
          <div className="
            bg-brand-section/70 dark:bg-darkbrand-section/80
            backdrop-blur-xl
            shadow-lg rounded-2xl p-6
            border border-[#D9A86C]/30 dark:border-[#C89155]/30
          ">
            {/* HEADER */}
            <div className="flex items-center gap-6 mb-4">
              <Image
                src="/experiences/stellantis.png"
                alt="Stellantis"
                width={150}
                height={150}
                className="object-contain rounded-xl shadow-md bg-white p-2"
              />
              <div>
                <h3 className="text-xl font-semibold text-brand-text dark:text-darkbrand-text">
                  {t.role1}
                </h3>
                <p className="text-sm text-brand-text/70 dark:text-darkbrand-text/70">
                  {t.location1} • {t.date1}
                </p>
              </div>
            </div>

            {/* DESCRIPTION */}
            <ul className="space-y-2 text-brand-text/85 dark:text-darkbrand-text/80">
              {t.desc1.map((line, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#D9A86C] mt-1">•</span>
                  {line}
                </li>
              ))}
            </ul>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-3 mt-4">
              {t.tech1.map((tech) => (
                <TechBadge key={tech} label={tech} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* ======================= EXPERIENCE 2 ======================= */}
        <motion.div
          variants={cardVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative pl-20"
        >
          {/* DOT */}
          <div className="absolute left-6 top-4 w-6 h-6 rounded-full bg-gradient-to-br from-[#D9A86C] to-[#C89155] shadow-xl" />

          <div className="
            bg-brand-section/70 dark:bg-darkbrand-section/80
            backdrop-blur-xl
            shadow-lg rounded-2xl p-6
            border border-[#D9A86C]/30 dark:border-[#C89155]/30
          ">
            {/* HEADER */}
            <div className="flex items-center gap-6 mb-4">
              <Image
                src="/experiences/cadiayyad.png"
                alt="Université Cadi Ayyad"
                width={150}
                height={150}
                className="object-contain rounded-xl shadow-md bg-white p-2"
              />
              <div>
                <h3 className="text-xl font-semibold text-brand-text dark:text-darkbrand-text">
                  {t.role2}
                </h3>
                <p className="text-sm text-brand-text/70 dark:text-darkbrand-text/70">
                  {t.location2} • {t.date2}
                </p>
              </div>
            </div>

            {/* DESCRIPTION */}
            <ul className="space-y-2 text-brand-text/85 dark:text-darkbrand-text/80">
              {t.desc2.map((line, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#D9A86C] mt-1">•</span>
                  {line}
                </li>
              ))}
            </ul>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-3 mt-4">
              {t.tech2.map((tech) => (
                <TechBadge key={tech} label={tech} />
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}









// "use client";

// import { motion } from "framer-motion";
// import { useLang } from "./LanguageProvider";
// import Image from "next/image";

// export default function Experience() {
//   const { lang } = useLang();

//   const t = {
//     en: {
//       title: "Professional Experience",

//       // Stellantis
//       role1: "AI & Full Stack Development Intern",
//       location1: "Kénitra, Morocco",
//       date1: "June 2025 – July 2025",
//       desc1: [
//         "Developed a full-stack training management platform integrating a dynamic competency matrix and an AI-based recommendation system for HR.",
//         "Built a FastAPI microservice for semantic training recommendation using TF-IDF, domain-specific keywords and Sentence-Transformers embeddings.",
//         "Implemented a Spring Boot backend (JWT, Spring Security, MySQL) and a React + TypeScript dashboard for KPI analytics.",
//       ],
//       tech1: [
//         "FastAPI", "Python", "Sentence-Transformers", "Spring Boot",
//         "JWT", "MySQL", "React", "TypeScript"
//       ],

//       // Cadi Ayyad
//       role2: "Full Stack Developer – Doctoral Management System",
//       location2: "Marrakech, Morocco",
//       date2: "June 2024 – August 2024",
//       desc2: [
//         "Developed a Laravel application managing doctoral enrollment with authentication, role-based access, and application tracking.",
//         "Built responsive Blade interfaces aligned with administrative workflows.",
//       ],
//       tech2: ["Laravel", "Blade", "MySQL", "PHP", "Bootstrap"],
//     },

//     fr: {
//       title: "Expérience Professionnelle",

//       // Stellantis
//       role1: "Stagiaire en IA & Développement Full Stack",
//       location1: "Kénitra, Maroc",
//       date1: "Juin 2025 – Juillet 2025",
//       desc1: [
//         "Développement d’une plateforme full-stack de gestion des formations avec matrice de compétences dynamique et système de recommandation IA.",
//         "Création d’un microservice FastAPI pour la recommandation sémantique (TF-IDF, mots-clés métier, embeddings Sentence-Transformers).",
//         "Développement d’un backend Spring Boot (JWT, Spring Security, MySQL) et d’un dashboard React + TypeScript pour les KPIs.",
//       ],
//       tech1: [
//         "React", "Spring Boot", "JWT",  "Python", "Sentence-Transformers", "MySQL", "FastAPI", "TypeScript" , "Docker", "postman"
//       ],

//       // Cadi Ayyad
//       role2: "Full Stack Developer – Système Doctoral",
//       location2: "Marrakech, Maroc",
//       date2: "Juin 2024 – Août 2024",
//       desc2: [
//         "Développement d’une application Laravel pour la gestion du doctorat (authentification, rôles, suivi des candidatures).",
//         "Création d’interfaces Blade responsives adaptées aux besoins administratifs.",
//       ],
//       tech2: ["Laravel", "PHP", "MySQL", "Blade"],
//     },
//   }[lang];

//   // Animation variants
//   const cardVariant = {
//     hidden: { opacity: 0, y: 40 },
//     show: { opacity: 1, y: 0 },
//   };

//   return (
//     <section
//       id="experience"
//       className="py-20 bg-brand-bg dark:bg-darkbrand-bg transition-colors"
//     >
//       <h2 className="text-center text-3xl font-bold text-brand-text dark:text-darkbrand-text mb-16 tracking-wide">
//         {t.title}
//       </h2>

//       <div className="relative max-w-5xl mx-auto">

//         {/* TIMELINE */}
//         <div className="absolute left-8 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#D9A86C] via-[#C89155] to-[#D9A86C] opacity-70 rounded-full"></div>

//         {/* ======== EXPERIENCE 1 — STELLANTIS ======== */}
//         <motion.div
//           variants={cardVariant}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//           className="relative pl-20 mb-16"
//         >
//           {/* Timeline dot */}
//           <div className="absolute left-6 top-4 w-6 h-6 bg-gradient-to-br from-[#D9A86C] to-[#C89155] rounded-full shadow-md"></div>

//           {/* Card */}
//           <div className="bg-brand-section/70 dark:bg-darkbrand-section/80 backdrop-blur-xl shadow-lg rounded-2xl p-6 border border-brand-accent/20 dark:border-darkbrand-accent/20">
            
//             {/* Top row: Logo + Info */}
//             <div className="flex items-center gap-5 mb-4">
//               <Image
//                 src="/experiences/stellantis.png"
//                 alt="Stellantis"
//                 width={180}
//                 height={180}
//                 className="object-contain rounded-xl shadow-md bg-white p-1"
//               />

//               <div>
//                 <h3 className="text-xl font-semibold text-brand-text dark:text-darkbrand-text">
//                   {t.role1}
//                 </h3>
//                 <p className="text-sm text-brand-text/70 dark:text-darkbrand-text/70">
//                   {t.location1} • {t.date1}
//                 </p>
//               </div>
//             </div>

//             {/* Description */}
//             <ul className="space-y-2 text-[15px] text-brand-text/80 dark:text-darkbrand-text/80">
//               {t.desc1.map((line, i) => (
//                 <li key={i} className="flex gap-2">
//                   <span className="mt-1 text-brand-accent">•</span>
//                   {line}
//                 </li>
//               ))}
//             </ul>

//             {/* Tech stack */}
//             <div className="flex flex-wrap gap-2 mt-4 w-full">


//               {t.tech1.map((tech) => (
//                 <span
//                   key={tech}
//                   className="px-3 py-1 text-xs rounded-full bg-brand-bg dark:bg-darkbrand-bg border border-brand-accent/30 dark:border-darkbrand-accent/30"
//                 > 
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </motion.div>

//         {/* ======== EXPERIENCE 2 — CADI AYYAD ======== */}
//         <motion.div
//           variants={cardVariant}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
//           className="relative pl-20"
//         >
//           {/* Timeline dot */}
//           <div className="absolute left-6 top-4 w-6 h-6 bg-gradient-to-br from-[#D9A86C] to-[#C89155] rounded-full shadow-md"></div>

//           {/* Card */}
//           <div className="bg-brand-section/70 dark:bg-darkbrand-section/80 backdrop-blur-xl shadow-lg rounded-2xl p-6 border border-brand-accent/20 dark:border-darkbrand-accent/20">
            
//             <div className="flex items-center gap-5 mb-4">
//               <Image
//                 src="/experiences/cadiayyad.png"
//                 alt="Université Cadi Ayyad"
//                 width={180}
//                 height={180}
//                 className="object-contain rounded-xl shadow-md bg-white p-1"
//               />

//               <div>
//                 <h3 className="text-xl font-semibold text-brand-text dark:text-darkbrand-text">
//                   {t.role2}
//                 </h3>
//                 <p className="text-sm text-brand-text/70 dark:text-darkbrand-text/70">
//                   {t.location2} • {t.date2}
//                 </p>
//               </div>
//             </div>

//             <ul className="space-y-2 text-[15px] text-brand-text/80 dark:text-darkbrand-text/80">
//               {t.desc2.map((line, i) => (
//                 <li key={i} className="flex gap-2">
//                   <span className="mt-1 text-brand-accent">•</span>
//                   {line}
//                 </li>
//               ))}
//             </ul>

//             {/* Tech stack */}
//             <div className="flex flex-wrap gap-2 mt-4">
//               {t.tech2.map((tech) => (
//                 <span
//                   key={tech}
//                   className="px-3 py-1 text-xs rounded-full bg-brand-bg dark:bg-darkbrand-bg border border-brand-accent/30 dark:border-darkbrand-accent/30"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
