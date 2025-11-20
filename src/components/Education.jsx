"use client";

import { motion } from "framer-motion";
import { useLang } from "./LanguageProvider";
import GoldScript from "./GoldScript";

export default function Education() {
  const { lang } = useLang();

  // ------------------- TRANSLATIONS -------------------
  const t = {
    en: {
      title: "Education",

      school1: "École des Sciences de l’Information (ESI)",
      degree1: "Master’s Degree in Engineering – Information Systems Engineering and Digital Transformation",
      date1: "September 2023 – Present",
      location1: "Rabat, Morocco",

      school2: "Lycée Ibn Timiya – Preparatory Classes for Engineering Schools (CPGE)",
      degree2: "Mathematics and Physics – Intensive Preparatory Program",
      date2: "September 2021 – June 2023",
      location2: "Marrakech, Morocco",
    },

    fr: {
      title: "Éducation",

      school1: "École des Sciences de l’Information (ESI)",
      degree1:
        "Diplôme en Ingénierie – Ingénierie des Systèmes d’Information et Transformation Digitale",
      date1: "Septembre 2023 – Présent",
      location1: "Rabat, Maroc",

      school2:
        "Lycée Ibn Timiya – Classes Préparatoires aux Grandes Écoles (CPGE)",
      degree2: "Mathématiques et Physique – Filière MP",
      date2: "Septembre 2021 – Juin 2023",
      location2: "Marrakech, Maroc",
    },
  }[lang];

  // Animation
  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="education"
      className="py-20 bg-brand-bg dark:bg-darkbrand-bg transition-colors"
    >
      {/* TITLE */}
      <div className="flex justify-center mb-12 pt-6">
        <GoldScript className="text-5xl leading-[1.4] block">
          {t.title}
        </GoldScript>
      </div>

      <div className="relative max-w-5xl mx-auto px-6">

        {/* TIMELINE LINE */}
        <div className="absolute left-8 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#D9A86C] via-[#C89155] to-[#D9A86C] opacity-70 rounded-full" />

        {/* ======================= SCHOOL 1 ======================= */}
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

          <div
            className="
              bg-brand-section/70 dark:bg-darkbrand-section/80
              backdrop-blur-xl
              shadow-lg rounded-2xl p-6
              border border-[#D9A86C]/30 dark:border-[#C89155]/30
            "
          >
            {/* HEADER */}
            {/* HEADER */}
<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
  <h3 className="text-xl font-semibold text-brand-text dark:text-darkbrand-text">
    {t.school1}
  </h3>

  <p className="
    text-sm text-brand-text/70 dark:text-darkbrand-text/70 
    mt-1 md:mt-0
    md:whitespace-nowrap
  ">
    {t.date1}
  </p>
</div>


            <p className="italic text-brand-text/75 dark:text-darkbrand-text/75">
              {t.degree1}
            </p>

            <p className="mt-2 text-brand-text/70 dark:text-darkbrand-text/70 italic">
              {t.location1}
            </p>
          </div>
        </motion.div>

        {/* ======================= SCHOOL 2 ======================= */}
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

          <div
            className="
              bg-brand-section/70 dark:bg-darkbrand-section/80
              backdrop-blur-xl
              shadow-lg rounded-2xl p-6
              border border-[#D9A86C]/30 dark:border-[#C89155]/30
            "
          >
            {/* HEADER */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
  <h3 className="text-xl font-semibold text-brand-text dark:text-darkbrand-text">
    {t.school2}
  </h3>

  <p className="
    text-sm text-brand-text/70 dark:text-darkbrand-text/70 
    mt-1 md:mt-0
    md:whitespace-nowrap
  ">
    {t.date2}
  </p>
</div>

            <p className="italic text-brand-text/75 dark:text-darkbrand-text/75">
              {t.degree2}
            </p>

            <p className="mt-2 text-brand-text/70 dark:text-darkbrand-text/70 italic">
              {t.location2}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
