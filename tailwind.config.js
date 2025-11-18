/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#F8E9E4",
          section: "#F4D4C8",
          accent: "#B6836F",
          chip: "#FDF3EC",
          text: "#2B2626",
          gold1: "#D9A86C",
          gold2: "#C89155",
        },
        darkbrand: {
          bg: "#151011",
          section: "#23171A",
          accent: "#D5B7AA",
          text: "#F7EFEA",
        },
      },
    },
  },
//GRIS
  theme: {
  extend: {
    colors: {
      brand: {
        bg: "#E7E7E7",          // GRIS CLAIR pour mode clair
        section: "#D9D9D9",
      },
      darkbrand: {
        bg: "#1A1A1A",         // GRIS FONCÉ pour mode sombre
        section: "#262626",
      }
    }
  }
}
,
  plugins: [],
};









// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: "class",
//   content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],

//   theme: {
//     extend: {
//       colors: {
//         brand: {
//           bg: "#F8E9E4",       // beige rosé
//           section: "#F4D4C8",  // rose dusty clair
//           accent: "#B6836F",   // rose-marron élégant
//           chip: "#FDF3EC",     // crème
//           text: "#2B2626",     // noir doux
//         },

//         darkbrand: {
//           bg: "#151011",       
//           section: "#23171A",
//           accent: "#D5B7AA",
//           text: "#F7EFEA",
//         },

//         // 🎨 Couleurs dorées globales
//         gold1: "#D9A86C",
//         gold2: "#C89155",
//       },

//       boxShadow: {
//         soft: "0 10px 40px rgba(0,0,0,0.1)",
//       },

//       borderRadius: {
//         xl2: "1.8rem",
//       },
//     },
//   },

//   plugins: [],
// };
