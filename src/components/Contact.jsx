"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import GoldScript from "./GoldScript";
import { useLang } from "./LanguageProvider";

export default function Contact() {
  const { lang } = useLang();

  /* ============================
        TEXTES MULTI-LANGUES
  ============================ */

  const t = {
    en: {
      title: "Contact Me",
      subtitle:
        "Oh great, you're still here! Got an idea? Let’s turn it into reality.",
      emailLabel: "Email me at:",
      phoneLabel: "Call me:",
      send: "Send",
      orWrite: "or write to me here",
      first: "First Name",
      last: "Last Name",
      message: "Message",
    },

    fr: {
      title: "Contactez-moi",
      subtitle:
        "Oh parfait, tu es toujours là ! Tu as une idée ? Transformons-la en réalité !",
      emailLabel: "Envoyez-moi un email :",
      phoneLabel: "Appelez-moi :",
      send: "Envoyer",
      orWrite: "ou vous pouvez m’écrire ici",
      first: "Prénom",
      last: "Nom",
      message: "Message",
    },
  }[lang];

  return (
    <section
      id="contact"
      className="py-20 bg-brand-bg dark:bg-darkbrand-bg transition-colors"
    >
      {/* ---------- TITLE ---------- */}
      <div className="flex justify-center mb-12 pt-6">
        <GoldScript className="text-5xl leading-[1.4] block">
          {t.title}
        </GoldScript>
      </div>

      <p className="text-center text-brand-text/70 dark:text-darkbrand-text/70 mt-2 mb-10">
        {t.subtitle}
      </p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">

        {/* =====================================
                     LEFT CARD
        ===================================== */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#D9A86C] text-white rounded-3xl p-10 shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-8">
            {t.title} !
          </h3>

          {/* EMAIL */}
          <div className="flex items-center gap-3 mb-4">
            <Mail size={20} />
            <a
              href="mailto:elabjani.yassmine@gmail.com"
              className="hover:underline text-white"
            >
              elabjani.yassmine@gmail.com
            </a>
          </div>

          {/* PHONE */}
          <div className="flex items-center gap-3">
            <Phone size={20} />
            <a
              href="tel:+212656971785"
              className="hover:underline text-white"
            >
              +212 6 56 97 17 85
            </a>
          </div>
        </motion.div>

        {/* =====================================
                     RIGHT FORM
        ===================================== */}
        <motion.form
          action="https://formspree.io/f/mpwkvqbj"
          method="POST"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            rounded-3xl p-10 shadow-lg
            bg-[#86663d] dark:bg-[#2E221D]
            border border-[#D9A86C]/40
            transition-colors
          "
        >
          {/* --- First row --- */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder={t.first}
              required
              className="
                w-full rounded-xl px-4 py-3
                border border-[#D9A86C]/40 dark:border-[#A9845C]/40
                bg-[#D9A86C] dark:bg-[#3A2A25]
                text-brand-text dark:text-white
                placeholder:text-brand-text/50 dark:placeholder:text-white/50
                focus:ring-2 focus:ring-[#D9A86C]
                outline-none
              "
            />

            <input
              type="text"
              name="lastName"
              placeholder={t.last}
              required
              className="
                w-full rounded-xl px-4 py-3
                border border-[#D9A86C]/40 dark:border-[#A9845C]/40
                bg-[#D9A86C] dark:bg-[#3A2A25]
                text-brand-text dark:text-white
                placeholder:text-brand-text/50 dark:placeholder:text-white/50
                focus:ring-2 focus:ring-[#D9A86C]
                outline-none
              "
            />
          </div>

          {/* --- Email --- */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="
              mt-4 w-full rounded-xl px-4 py-3
              border border-[#D9A86C]/40 dark:border-[#A9845C]/40
              bg-[#D9A86C] dark:bg-[#3A2A25]
              text-brand-text dark:text-white
              placeholder:text-brand-text/50 dark:placeholder:text-white/50
              focus:ring-2 focus:ring-[#D9A86C]
              outline-none
            "
          />

          {/* --- Message --- */}
          <textarea
            name="message"
            placeholder={t.message}
            required
            rows={6}
            className="
              mt-4 w-full rounded-xl px-4 py-3
              border border-[#D9A86C]/40 dark:border-[#A9845C]/40
              bg-[#D9A86C] dark:bg-[#3A2A25]
              text-brand-text dark:text-white
              placeholder:text-brand-text/50 dark:placeholder:text-white/50
              focus:ring-2 focus:ring-[#D9A86C]
              outline-none
            "
          />

          {/* --- BUTTON + ICON --- */}
          <div className="flex items-center gap-6 mt-6">
            <button
              type="submit"
              className="
                px-6 py-2 bg-[#D9A86C] hover:bg-[#C89155]
                transition rounded-full shadow-md text-white
              "
            >
              {t.send}
            </button>

            <span className="text-brand-text dark:text-darkbrand-text/80">
              {t.orWrite}
            </span>

            <a
              href="mailto:elabjani.yassmine@gmail.com"
              className="
                w-10 h-10 flex items-center justify-center 
                rounded-full 
                bg-[#D9A86C] dark:bg-[#3A2A25]
                shadow-md hover:shadow-lg
              "
            >
              <Mail size={20} className="text-brand-text dark:text-white" />
            </a>
          </div>
        </motion.form>

      </div>
    </section>
  );
}









// "use client";

// import { motion } from "framer-motion";
// import { Mail, Phone } from "lucide-react";
// import GoldScript from "./GoldScript";

// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="py-20 bg-brand-bg dark:bg-darkbrand-bg transition-colors"
//     >
//       {/* TITLE */}
//       <div className="flex justify-center mb-12 pt-6">
//         <GoldScript className="text-5xl leading-[1.4] block">
//           Contactez-moi
//         </GoldScript>
//       </div>

//       <p className="text-center text-brand-text/70 dark:text-darkbrand-text/70 mt-2 mb-10">
//         Oh parfait, tu es toujours là! Tu as une idée? Transformons la en réalité !
//       </p>

//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">

//         {/* -------- LEFT CARD ------- */}
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="bg-[#D9A86C] text-white rounded-3xl p-10 shadow-lg"
//         >
//           <h3 className="text-2xl font-semibold mb-8">Contactez-moi !</h3>

//           <div className="flex items-center gap-3 mb-4">
//             <Mail size={20} />
//             <a
//               href="mailto:elabjani.yassmine@gmail.com"
//               className="hover:underline text-white"
//             >
//               elabjani.yassmine@gmail.com
//             </a>
//           </div>

//           <div className="flex items-center gap-3">
//             <Phone size={20} />
//             <a
//               href="tel:+212656971785"
//               className="hover:underline text-white"
//             >
//               +212 6 56 97 17 85
//             </a>
//           </div>
//         </motion.div>

//         {/* -------- RIGHT FORM ------- */}
//         <motion.form
//           action="https://formspree.io/f/mpwkvqbj"
//           method="POST"
//           initial={{ opacity: 0, x: 30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="
//             rounded-3xl p-10 shadow-lg
//             bg-[#86663d] dark:bg-[#2E221D]
//             border border-[#D9A86C]/40
//             transition-colors
//           "
//         >
//           {/* First row */}
//           <div className="grid grid-cols-2 gap-4">
//             <input
//               type="text"
//               name="firstName"
//               placeholder="First Name"
//               required
//               className="
//                 w-full rounded-xl px-4 py-3
//                 border border-[#D9A86C]/40 dark:border-[#A9845C]/40
//                 bg-[#D9A86C] dark:bg-[#3A2A25]
//                 text-brand-text dark:text-white
//                 placeholder:text-brand-text/50 dark:placeholder:text-white/50
//                 focus:ring-2 focus:ring-[#D9A86C]
//                 outline-none
//               "
//             />

//             <input
//               type="text"
//               name="lastName"
//               placeholder="Last Name"
//               required
//               className="
//                 w-full rounded-xl px-4 py-3
//                 border border-[#D9A86C]/40 dark:border-[#A9845C]/40
//                 bg-[#D9A86C] dark:bg-[#3A2A25]
//                 text-brand-text dark:text-white
//                 placeholder:text-brand-text/50 dark:placeholder:text-white/50
//                 focus:ring-2 focus:ring-[#D9A86C]
//                 outline-none
//               "
//             />
//           </div>

//           {/* Email */}
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             required
//             className="
//               mt-4 w-full rounded-xl px-4 py-3
//               border border-[#D9A86C]/40 dark:border-[#A9845C]/40
//               bg-[#D9A86C] dark:bg-[#3A2A25]
//               text-brand-text dark:text-white
//               placeholder:text-brand-text/50 dark:placeholder:text-white/50
//               focus:ring-2 focus:ring-[#D9A86C]
//               outline-none
//             "
//           />

//           {/* Message */}
//           <textarea
//             name="message"
//             placeholder="Message"
//             required
//             rows={6}
//             className="
//               mt-4 w-full rounded-xl px-4 py-3
//               border border-[#D9A86C]/40 dark:border-[#A9845C]/40
//               bg-[#D9A86C] dark:bg-[#3A2A25]
//               text-brand-text dark:text-white
//               placeholder:text-brand-text/50 dark:placeholder:text-white/50
//               focus:ring-2 focus:ring-[#D9A86C]
//               outline-none
//             "
//           />

//           {/* BUTTON + ICON */}
//           <div className="flex items-center gap-6 mt-6">
//             <button
//               type="submit"
//               className="
//                 px-6 py-2 bg-[#D9A86C] hover:bg-[#C89155]
//                 transition rounded-full shadow-md text-white
//               "
//             >
//               Envoyer
//             </button>

//             <span className="text-brand-text dark:text-darkbrand-text/80">
//               ou vous pouvez m’écrire ici
//             </span>

//             <a
//               href="mailto:elabjani.yassmine@gmail.com"
//               className="
//                 w-10 h-10 flex items-center justify-center rounded-full
//                 bg-[#D9A86C] dark:bg-[#3A2A25]
//                 shadow-md hover:shadow-lg
//               "
//             >
//               <Mail size={20} className="text-brand-text dark:text-white" />
//             </a>
//           </div>
//         </motion.form>

//       </div>
//     </section>
//   );
// }









