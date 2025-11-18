// "use client";

// import { usePathname, useRouter } from "next/navigation";

// export default function LangSwitch() {
//   const router = useRouter();
//   const pathname = usePathname();

//   const currentLocale = pathname.split("/")[1]; // "en" ou "fr"
//   const isFr = currentLocale === "fr";

//   const changeLang = () => {
//     const newLocale = isFr ? "en" : "fr";
//     const restOfPath = pathname.substring(3); // enlève "/fr" ou "/en"
//     router.push(`/${newLocale}${restOfPath}`);
//   };

//   return (
//     <button
//       onClick={changeLang}
//       className="flex items-center gap-2 rounded-full border border-zinc-300 dark:border-zinc-600 
//                  bg-white/80 dark:bg-zinc-900/80 px-3 py-1 text-xs font-medium 
//                  shadow-sm hover:shadow-md hover:-translate-y-[1px] transition"
//     >
//       <span className="text-lg">{isFr ? "🇫🇷" : "🇬🇧"}</span>
//       <span>{isFr ? "FR" : "EN"}</span>
//     </button>
//   );
// }








// LANG SWITCH
"use client";

import { useLang } from "../LanguageProvider";

export default function LangSwitch() {
  const { lang, setLang } = useLang();
  const isFr = lang === "fr";

  return (
    <button
      onClick={() => setLang(isFr ? "en" : "fr")}
      className="flex items-center gap-2 rounded-full border border-zinc-300 dark:border-zinc-600 bg-white/80 dark:bg-zinc-900/80 px-3 py-1 text-xs font-medium shadow-sm hover:shadow-md hover:-translate-y-[1px] transition"
    >
      <span className="text-lg">{isFr ? "🇫🇷" : "🇬🇧"}</span>
      <span>{isFr ? "FR" : "EN"}</span>
    </button>
  );
}
