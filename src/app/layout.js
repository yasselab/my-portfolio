import "./globals.css";
import Providers from "@/components/Providers";
import { Great_Vibes } from "next/font/google";

export const metadata = {
  title: "ELABJANI Yassmine's Portfolio",
  description: "Portfolio personnel",
};

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-greatvibes",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${greatVibes.variable}
          bg-brand-bg dark:bg-darkbrand-bg
          transition-colors duration-300
        `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}









// import "./globals.css";
// import Providers from "@/components/Providers";
// import { Great_Vibes } from "next/font/google";

// export const metadata = {
//   title: "ELABJANI Yassmine's Portfolio",
//   description: "Portfolio personnel",
// };

// // Import de la police calligraphique
// const greatVibes = Great_Vibes({
//   weight: "400",
//   subsets: ["latin"],
//   variable: "--font-greatvibes",
// });

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body
//         className={`
//           ${greatVibes.variable}
//           bg-gradient-to-br from-brand-bg via-brand-section/40 to-brand-bg
//           dark:from-darkbrand-bg dark:via-darkbrand-section/30 dark:to-darkbrand-bg
//           transition-colors
//         `}
//       >
//         <Providers>{children}</Providers>
//       </body>
//     </html>
//   );
// }












// import "./globals.css";
// import Providers from "@/components/Providers";

// export const metadata = {
//   title: "ELABJANI Yassmine's Portfolio",
//   description: "Portfolio personnel",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body
//         className="
//           bg-gradient-to-br from-brand-bg via-brand-section/40 to-brand-bg
//           dark:from-darkbrand-bg dark:via-darkbrand-section/30 dark:to-darkbrand-bg
//           transition-colors
//         "
//       >
//         <Providers>{children}</Providers>
//       </body>
//     </html>
//   );
// }











// import "./globals.css";
// import Providers from "@/components/Providers";
// import {NextIntlClientProvider} from "next-intl";

// // On déclare les langues supportées
// export function generateStaticParams() {
//   return [{ locale: "fr" }, { locale: "en" }];
// }

// export default async function LocaleLayout({ children, params: { locale } }) {
//   // Import des messages FR / EN selon la locale
//   const messages = (await import(`@/messages/${locale}.json`)).default;

//   return (
//     <html lang={locale} suppressHydrationWarning>
//       <body className="
//         bg-gradient-to-br from-brand-bg via-brand-section/40 to-brand-bg
//         dark:from-darkbrand-bg dark:via-darkbrand-section/30 dark:to-darkbrand-bg
//         transition-colors
//       ">
        
//         {/* Fournisseur global (dark mode + langue) */}
//         <NextIntlClientProvider locale={locale} messages={messages}>
//           <Providers>
//             {children}
//           </Providers>
//         </NextIntlClientProvider>

//       </body>
//     </html>
//   );
// }

