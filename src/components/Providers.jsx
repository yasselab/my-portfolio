"use client";

import { ThemeProvider } from "next-themes";
import LanguageProvider from "./LanguageProvider";

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </ThemeProvider>
  );
}









// "use client";

// import { ThemeProvider } from "./ThemeProvider";
// import LanguageProvider from "./LanguageProvider";

// export default function Providers({ children }) {
//   return (
//     <ThemeProvider>
//       <LanguageProvider>{children}</LanguageProvider>
//     </ThemeProvider>
//   );
// }






