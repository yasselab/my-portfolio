"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50 transition-all duration-300
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      <div
        className="
          w-12 h-12 rounded-full shadow-lg cursor-pointer
          flex items-center justify-center
          bg-gradient-to-br from-[#C89155] via-[#D9A86C] to-[#C89155]

          hover:scale-110 transition-all duration-300
        "
      >
        <ArrowUp size={22} className="text-white" />
      </div>
    </button>
  );
}
