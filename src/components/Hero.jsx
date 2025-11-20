




//LANG SWITCH

"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const words = ["ELABJANI Yassmine", "Engineering Student", "Passionate About Full-stack developement and AI "];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);

  // ---- Machine à écrire (NE PAS TOUCHER) ----
  // useEffect(() => {
  //   if (index === words.length) return;

  //   const timeout = setTimeout(() => {
  //     setSubIndex((prev) => (forward ? prev + 1 : prev - 1));

  //     if (subIndex === words[index].length + 1 && forward) {
  //       setForward(false);
  //     }

  //     if (subIndex === 0 && !forward) {
  //       setForward(true);
  //       setIndex((prev) => (prev + 1) % words.length);
  //     }
  //   }, 120);

  //   return () => clearTimeout(timeout);
  // }, [subIndex, index, forward, words]);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24 grid lg:grid-cols-2 gap-16 items-center">

      {/* --- Colonne texte --- */}
      <div className="space-y-6">
        <p className="uppercase tracking-[0.25em] text-xs text-brand-accent/70">
          Hello, I’m
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-text leading-tight">
          {words[index].substring(0, subIndex)}
          <span className="border-r-2 border-brand-accent ml-1 animate-pulse" />
        </h1>

        <p className="text-[17px] text-brand-text/80 max-w-xl leading-relaxed">
          Software engineering, AI &amp; data enthusiast.
        </p>

        {/* Boutons principaux */}
        <div className="flex flex-wrap gap-4 pt-4">
          {/* View my work → projects */}
          <a
            href="#projects"
            className="px-7 py-3 rounded-full text-white text-sm font-medium
                       bg-gradient-to-r from-[#D9A86C] to-[#C89155]
                       shadow-soft hover:opacity-90 transition"
          >
            View my work
          </a>

          {/* Download CV */}
          <a
            href="/cv.pdf"
            download
            className="px-7 py-3 rounded-full text-white text-sm font-medium
                       bg-gradient-to-r from-[#D9A86C] to-[#C89155]
                       shadow-soft hover:opacity-90 transition"
          >
            Download my Resume
          </a>
        </div>

        {/* Icônes sociales */}
        {/* --- Icônes sociales EXACT FORMAT --- */}
<div className="flex items-center gap-4 pt-6  ml-20">

  {/* E-mail */}
  <a
    href="mailto:yassmine.elabjani@esi.ac.ma"
    className="h-12 w-12 rounded-full flex items-center justify-center
               bg-[#FBF8F4] border border-[#E5DDD4] 
               hover:shadow-md transition"
  >
    <svg width="22" height="22" fill="none" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16v14H4z" />
      <path d="M4 4l8 7 8-7" />
    </svg>
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/yassmine-elabjani-b5471a30a/"
    target="_blank"
    className="h-12 w-12 rounded-full flex items-center justify-center
               bg-[#FBF8F4] border border-[#E5DDD4]
               hover:shadow-md transition"
  >
    <svg width="22" height="22" fill="#1A1A1A" viewBox="0 0 24 24">
      <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5C1.9 5.5 1 4.6 1 3.5C1 2.4 1.9 1.5 3 1.5C4.1 1.5 4.98 2.4 4.98 3.5ZM1.2 8.5H4.8V22H1.2V8.5ZM8.5 8.5H12V10.3H12.1C12.7 9.2 14.2 8 16.4 8C21 8 22 10.9 22 15.2V22H18.3V15.9C18.3 13.7 17.8 12 15.7 12C13.5 12 12.7 13.6 12.7 15.8V22H9V8.5H8.5Z"/>
    </svg>
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/yasselab"
    target="_blank"
    className="h-12 w-12 rounded-full flex items-center justify-center
               bg-[#FBF8F4] border border-[#E5DDD4]
               hover:shadow-md transition"
  >
    <svg width="23" height="23" viewBox="0 0 24 24" fill="#1A1A1A">
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9c.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4c-.5-1.1-1.2-1.4-1.2-1.4c-1-.7.1-.7.1-.7c1.1.1 1.6 1.2 1.6 1.2c1 .1.9-.8.9-1c-2.6-.3-5.3-1.3-5.3-5.9c0-1.3.5-2.4 1.3-3.2c-.1-.3-.6-1.6.1-3.2c0 0 1-.3 3.3 1.2c.9-.2 1.9-.3 2.9-.3s2 .1 2.9.3c2.3-1.6 3.3-1.2 3.3-1.2c.7 1.6.2 2.9.1 3.2c.8.8 1.3 1.9 1.3 3.2c0 4.7-2.7 5.6-5.3 5.9c.4.4.8 1.1.8 2.3v3.3c0 .3.2.6.8.5C20.2 21.4 23.5 17.1 23.5 12C23.5 5.7 18.3.5 12 .5z"/>
    </svg>
  </a>

</div>

      </div>

      {/* --- Colonne photo avec animation moderne --- */}
      <div className="flex justify-center lg:justify-end">
        <div
          className="relative rounded-[2.2rem] p-3 bg-brand-section/80 dark:bg-darkbrand-section/80
                     shadow-soft transform transition-transform duration-500
                     hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl"
        >
          {/* halo doux derrière la photo */}
          <div className="absolute inset-0 blur-3xl bg-gradient-to-br from-[#D9A86C]/40 to-[#C89155]/10 opacity-60 -z-10" />
          <Image
            src="/me4.jpg"
            alt="Profile"
            width={400}
            height={600}
            className="rounded-[1.8rem] object-cover aspect-square"
            priority
          />
        </div>
      </div>
    </section>
  );
}








