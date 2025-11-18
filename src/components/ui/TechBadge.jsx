"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TechBadge({ label, icon }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
        boxShadow: "0 8px 20px rgba(217,168,108,0.35)",
      }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="
        flex items-center gap-2 
        px-4 py-1.5 
        rounded-full 
        border border-[#D9A86C]/40 
        bg-[#D9A86C]/70 dark:bg-[#151011]/70
        text-[13px] font-medium 
        text-brand-text dark:text-darkbrand-text
        shadow-sm 
        hover:bg-[#D9A86C] dark:hover:bg-[#23171A]
        transition-all cursor-default select-none
      "
    >
      {icon && (
        <Image
          src={icon}
          alt={label}
          width={16}
          height={16}
          className="opacity-80"
        />
      )}
      {label}
    </motion.div>
  );
}
