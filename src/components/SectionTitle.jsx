"use client";

export default function SectionTitle({ children }) {
  return (
    <div className="text-center mb-14">
      {/* Title */}
      <h2
        className="
          text-3xl font-semibold
          text-[#C89155]   /* beige doré */
          dark:text-[#D9A86C]
          tracking-wide
        "
      >
        {children}
      </h2>

      {/* Underline */}
      <div className="flex justify-center mt-3">
        <div
          className="
            h-[3px] w-20 
            bg-[#E8D8C8] 
            dark:bg-[#A17F5A]
            rounded-full
          "
        ></div>
      </div>
    </div>
  );
}
