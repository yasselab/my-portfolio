"use client";

import { useLang } from "./LanguageProvider";
import Image from "next/image";
import { motion } from "framer-motion";
import GoldScript from "./GoldScript";

export default function Certifications() {
  const { lang } = useLang();

  const t = {
    en: {
      title: "Certifications",

      categories: [
        {
          issuer: "ORACLE",
          certImage: "/certs/oracle1.png",
          list: ["OCI Generative AI Professional – 2025"],
        },
        {
          issuer: "HP Life",
          certImage: "/certs/agile.png",
          list: ["Agile project management – 2024"],
        },
        {
          issuer: "M. CHERTI Zouhair",
          certImage: "/certs/pnl.png",
          list: ["Soft skills: Les intelligences émotionnelles et relationnelles. "],
        },
      ],
    },

    fr: { 
      title: "Certifications",

      categories: [
        {
          issuer: "ORACLE",
          certImage: "/certs/oracle1.png",
          list: ["OCI Generative AI Professional – 2025"],
        },
        {
          issuer: "HP Life",
           certImage: "/certs/agile.png",
          list: ["Agile project management – 2024"],
        },
        {
          issuer: "M. CHERTI Zouhair",
          certImage: "/certs/pnl.png",
          list: ["Soft skills: Les intelligences émotionnelles et relationnelles. "],
        },
      ],
    },
  }[lang];

  return (
    <section
      id="certifications"
      className="py-20 bg-brand-section/70 dark:bg-darkbrand-section/90"
    >
      {/* <h2 className="text-center text-3xl font-bold text-brand-text dark:text-darkbrand-text mb-14 tracking-wide">
        {t.title}
      </h2> */}
      <div className="flex justify-center mb-12 pt-6">
        <GoldScript className="text-5xl leading-[1.4] block">
          {t.title}
        </GoldScript>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        {t.categories.map((cat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="
              rounded-3xl overflow-hidden shadow-lg 
              bg-white/80 dark:bg-[#1a1415]/80 
              border border-[#F1D7B6]/30 dark:border-darkbrand-accent/30
              backdrop-blur-xl transition-all
            "
          >
            {/* IMAGE */}
            <div className="w-full h-52 bg-white flex items-center justify-center p-4">
              <Image
                src={cat.certImage}
                alt={cat.issuer}
                width={500}
                height={300}
                className="object-contain h-full w-auto"
              />
            </div>

            {/* BOTTOM AREA */}
            {/* <div className="bg-brand-bg/60 dark:bg-darkbrand-bg/70 px-6 py-5">
              <h3 className="text-center text-brand-accent dark:text-darkbrand-accent font-semibold mb-3 tracking-wide">
                {cat.issuer}
              </h3>

              <div className="h-[1px] w-full bg-brand-accent/30 dark:bg-darkbrand-accent/30 mb-4"></div>

              <ul className="space-y-2 text-[14px] text-brand-text/90 dark:text-darkbrand-text/80">
                {cat.list.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-brand-accent dark:text-darkbrand-accent">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div> */}
            <div className="bg-[#a38b6e] dark:bg-[#3b2f2f] px-6 py-5 rounded-b-3xl">
  {/* Issuer */}
  <h3 className="text-center text-brand-text dark:text-darkbrand-text font-semibold mb-3 tracking-wide">
    {cat.issuer}
  </h3>

  {/* Ligne */}
  <div className="h-[1px] w-full bg-[#2e271e]/40 mb-4"></div> 

  {/* Liste */}
  <ul className="space-y-2 text-[14px] text-brand-text dark:text-darkbrand-text/90">
    {cat.list.map((item, i) => (
      <li key={i} className="flex gap-2">
        <span className="text-[#fcfcfc]">✓</span>
        {item}
      </li>
    ))}
  </ul>
</div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}
