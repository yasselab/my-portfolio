"use client";

import { motion } from "framer-motion";
import { useLang } from "./LanguageProvider";

export default function AboutCard() {
  const { lang } = useLang();

  const t =
    lang === "fr"
      ? {
          title: "À propos de moi",
          text:
            "Je suis étudiante en Software Engineering, passionnée par le développement full-stack et l’IA appliquée. J’aime créer des solutions intelligentes et data-driven, alliant logique backend, déploiement cloud et interfaces modernes. Curieuse, analytique et orientée détail, je transforme les idées complexes en produits fiables, élégants et utiles.",
        }
      : {
          title: "About me",
          text:
            "I’m a Software Engineering student specializing in full-stack development and applied AI. I enjoy designing smart, data-driven solutions — from backend logic and cloud deployment to clean, intuitive user interfaces. Curious, analytical, and detail-oriented, I love turning complex ideas into elegant, reliable products that create real impact.",
        };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="
        relative p-10 rounded-3xl
        bg-gradient-to-br from-[#D9A86C] via-[#D9A86C] to-[#D9A86C]
        shadow-[0_8px_40px_rgba(217,168,108,0.25)]
        border border-[#D9A86C]/60
        backdrop-blur-lg
        hover:shadow-[0_12px_50px_rgba(200,145,85,0.32)]
        transition-all duration-700
      "
    >
      {/* Halo doré animé */}
      {/* <div className="
        absolute inset-0 -z-10 blur-3xl opacity-40
        bg-gradient-to-br from-[#884d05] via-[#884d05] to-transparent
        animate-pulse
      " /> */}

      {/* Titre */}
      <h2
        className="
          text-3xl font-bold tracking-wide
          text-brand-text
        "
      >
        <span className="bg-gradient-to-r from-[#2e1b05] to-[#805a32] bg-clip-text text-transparent">
          {t.title}
        </span>
      </h2>

      {/* Texte */}
      <p
        className="
          mt-4 text-[15px] leading-relaxed
          text-brand-text/85
        "
      >
        {t.text}
      </p>
    </motion.div>
  );
}
