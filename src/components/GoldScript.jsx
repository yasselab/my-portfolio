export default function GoldScript({ children, className = "" }) {
  return (
    <h2
      className={`
        text-center text-4xl md:text-5xl 
        font-bold tracking-wide
        ${className}
      `}
      style={{
        fontFamily: "'Great Vibes', cursive",
        background: "linear-gradient(to bottom, #D9A86C, #C89155)",
        WebkitBackgroundClip: "text",
        color: "transparent",
        textShadow: "0 2px 6px rgba(255, 255, 255, 0.5)",
      }}
    >
      {children}
    </h2>
  );
}
