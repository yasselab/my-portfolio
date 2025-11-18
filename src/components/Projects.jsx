"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLang } from "./LanguageProvider";
import GoldScript from "./GoldScript";

export default function Projects() {
  const { lang } = useLang();

  const t = {
    en: {
      sectionTitle: "Technical Projects",

      projects: [
        {
          title: "Cross-Platform Mobile Application with Integrated Backoffice",
          year: "In progress",
          image: "/projects/haqiq.png",
          tech: ["Flutter", "Springboot", "SpringData", "SpringSecurity", "Microservices", "PWA", "Angular", "Firebase", "MongoDB", "Kubernetes","Docker"],
          desc: [
            "A cross-platform mobile application using Flutter, paired with a dedicated backoffice built with Angular.",
            "The solution includes secure authentication, user management, real-time interactions, and a scalable backend powered by Spring Boot microservices."
          ]
        },
        {
          title: "Forexia – AI-Driven Forex Signal Generator",
          year: "2025",
          image: "/projects/forexia.png",
          tech: ["Playwright", "FinBERT", "SQLModel", "Ollama", "Docker", "RAG"],
          desc: [
            "Developed an end-to-end AI system for Forex news scraping and sentiment-based signal prediction using Playwright, BeautifulSoup, and FinBERT.",
            "Built REST APIs with FastAPI and SQLModel, containerized via Docker Compose with PostgreSQL and Ollama (Phi-3) for local AI reasoning."
          ]
        },

        {
          title: "PFA Project – AI-powered Competency Management Platform",
          year: "2025",
          image: "/projects/pfaproject.png",
          tech: [
            "Spring Boot",
            "FastAPI",
            "Spring Security",
            "React",
            "Axios",
            "Scikit-learn"
          ],
          desc: [
            "Developed a full-stack training management platform integrating a dynamic competency matrix and an AI-based recommendation engine.",
            "Implemented a FastAPI microservice for semantic recommendation using TF-IDF, domain-specific keywords and Sentence-Transformers.",
            "Built a Spring Boot backend (JWT, Spring Security, MySQL) and a React + TypeScript dashboard for KPI visualization."
          ]
        },

        {
          title: "Data Warehouse & Power BI Reporting",
          year: "2025",
          image: "/projects/datawarehouse.png",
          tech: ["SQL Server", "SSIS", "Power BI"],
          desc: [
            "Designed and implemented analytical data models.",
            "Performed ETL workflows using SQL Server Integration Services (SSIS).",
            "Developed interactive dashboards for business reporting."
          ]
        },

        {
          title: "ToMobilti – C2C Car Rental Mobile Application",
          year: "2025",
          image: "/projects/tomobilti.jpg",
          tech: ["React Native", "Spring Boot", "MySQL", "JWT", "Docker"],
          desc: [
            "Cross-platform mobile application supporting peer-to-peer and agency-based vehicle rentals.",
            "Implemented secure JWT authentication, role management, CRUD operations and Dockerized deployment."
          ]
        },

        {
          title: "NutriWise – Web-based Nutrition Tracking Application",
          year: "2025",
          image: "/projects/nutriwise.png",
          tech: ["JEE", "PostgreSQL", "Tomcat", "Maven"],
          desc: [
            "Full-stack Java EE nutrition tracking platform.",
            "Built using the MVC pattern with Maven deployment."
          ]
        },

        {
          title: "Stellar Classification – Machine Learning Project",
          year: "2024",
          image: "/projects/stellar.png",
          tech: ["SVM", "KNN", "Random Forest", "Decision Tree"],
          desc: ["Built ML models to classify stellar types from astrophysical data."]
        },
        {
          title: "Driver Fatigue Detection System – Embedded Project",
          year: "2025",
          image: "/projects/se.png",
          tech: ["STM32", "C/C++"],
          desc: ["A real-time embedded system designed to detect early signs of driver fatigue using physiological and behavioral indicators."]
        }
      ]
    },

    /* *********************************************************** */
    /* ************************ FRENCH *************************** */
    /* *********************************************************** */

    fr: {
      sectionTitle: "Projets Techniques",

      projects: [
        {
          title: "Application Mobile Multiplateforme avec Backoffice Intégré",
          year: "En cours",
          image: "/projects/haqiq.png",
          tech: ["Flutter", "Springboot", "SpringData", "SpringSecurity", "Microservices", "PWA", "Angular", "Firebase", "MongoDB", "Kubernetes","Docker"],
          desc: [
            "Une application mobile multiplateforme développée avec Flutter, accompagnée d’un backoffice dédié construit avec Angular.",
            "La solution inclut une authentification sécurisée, la gestion des utilisateurs, des interactions en temps réel et un backend évolutif utilisant une architecture microservices."
          ]
        },
        {
          title: "Forexia – Générateur IA de Signaux Forex",
          year: "2025",
          image: "/projects/forexia.png",
          tech: ["Playwright", "FinBERT", "SQLModel", "Ollama", "Docker", "RAG"],
          desc: [
            "Développement d’un système IA complet pour le scraping d’actualités Forex et la prédiction de signaux basée sur le sentiment (Playwright, BeautifulSoup, FinBERT).",
            "Création d’APIs REST avec FastAPI et SQLModel, conteneurisées avec Docker Compose (PostgreSQL + Ollama Phi-3) pour un raisonnement IA local."
          ]
        },

        {
          title: "Projet PFA – Plateforme IA de gestion des compétences",
          year: "2025",
          image: "/projects/pfaproject.png",
          tech: [
            "Spring Boot",
            "FastAPI",
            "Spring Security",
            "React",
            "Axios",
            "Scikit-learn"
          ],
          desc: [
            "Développement d’une plateforme full-stack intégrant une matrice dynamique de compétences et un service IA de recommandation.",
            "Création d’un microservice FastAPI pour la recommandation sémantique (TF-IDF, mots-clés métier, Sentence-Transformers).",
            "Développement d’un backend Spring Boot (JWT, Spring Security, MySQL) et d’un dashboard React + TypeScript pour les KPIs."
          ]
        },

        {
          title: "Data Warehouse & Reporting Power BI",
          year: "2025",
          image: "/projects/datawarehouse.png",
          tech: ["SQL Server", "SSIS", "Power BI"],
          desc: [
            "Conception et modélisation de systèmes décisionnels.",
            "Réalisation de flux ETL avec SSIS.",
            "Création de tableaux de bord dynamiques Power BI."
          ]
        },

        {
          title: "ToMobilti – Application Mobile de Location de Voitures",
          year: "2025",
          image: "/projects/tomobilti.jpg",
          tech: ["React Native", "Spring Boot", "MySQL", "JWT", "Docker"],
          desc: [
            "Application mobile cross-platform pour la location entre particuliers et agences.",
            "Mise en place d'une authentification JWT sécurisée, gestion des rôles, CRUD complet et environnement Dockerisé."
          ]
        },

        {
          title: "NutriWise – Application Web de Suivi Nutritionnel",
          year: "2025",
          image: "/projects/nutriwise.png",
          tech: ["JEE", "PostgreSQL", "Tomcat", "Maven"],
          desc: [
            "Application Java EE de suivi nutritionnel personnalisée.",
            "Développée sous MVC avec déploiement Maven."
          ]
        },

        {
          title: "Classification Stellaire – Projet Machine Learning",
          year: "2024",
          image: "/projects/stellar.png",
          tech: ["SVM", "KNN", "Random Forest", "Decision Tree"],
          desc: [
            "Création de modèles supervisés pour prédire les classes stellaires à partir de données astrophysiques."
          ]
        },
        {
          title: "Système embarqué de détection de fatigue du conducteur",
          year: "2025",
          image: "/projects/se.png",
          tech: ["STM32", "C/C++"],
          desc: ["Un système embarqué capable de détecter en temps réel les signes de fatigue du conducteur à partir d’indicateurs physiologiques et comportementaux."]
        }
      ]
    }
  }[lang];

  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="projects"
      className="py-20 bg-brand-section/50 dark:bg-darkbrand-section/80 transition-colors"
    >
      <div className="flex justify-center mb-12 pt-6">
        <GoldScript className="text-5xl leading-[1.4] block">
          {t.sectionTitle}
        </GoldScript>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
        {t.projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-brand-bg/80 dark:bg-darkbrand-bg/80 border border-brand-accent/20 dark:border-darkbrand-accent/20 shadow-lg rounded-3xl p-5 backdrop-blur-xl cursor-pointer"
            onClick={() => toggle(i)}
          >
            {/* TITLE */}
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-brand-text dark:text-darkbrand-text">
                {p.title}
              </h3>
              <span className="text-brand-accent dark:text-darkbrand-accent">
                {openIndex === i ? "▲" : "▼"}
              </span>
            </div>

            {/* YEAR */}
            <p className="text-sm text-brand-text/70 dark:text-darkbrand-text/70 mt-1">
              {p.year}
            </p>

            {/* EXPAND */}
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  {/* IMAGE */}
                  <div className="mt-4 h-44 w-full rounded-xl overflow-hidden shadow-md bg-white flex items-center justify-center">
                    <Image
                      src={p.image}
                      alt={p.title}
                      width={500}
                      height={200}
                      className="object-contain max-h-full max-w-full"
                    />
                  </div>

                  {/* DESCRIPTION */}
                  <ul className="mt-4 space-y-2 text-[15px] text-brand-text/80 dark:text-darkbrand-text/80">
                    {p.desc.map((line, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-brand-accent dark:text-darkbrand-accent mt-1">
                          •
                        </span>
                        {line}
                      </li>
                    ))}
                  </ul>

                  {/* TECH STACK */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs rounded-full bg-[#D9A86C]   "
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}




// dark:bg-[#D9A86C] border border-brand-accent/30 




// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

// export default function Projects() {
//   const projects = [
//     {
//       title: "Forexia – AI-Driven Forex Signal Generator",
//       year: "2025",
//       image: "/projects/forexia.png",
//       tech: ["Playwright", "FinBERT", "SQLModel", "Ollama", "Docker", "RAG"],
//       desc: [
//         "Developed an end-to-end AI system for Forex news scraping and sentiment-based signal prediction using Playwright, BeautifulSoup, and FinBERT.",
//         "Built REST APIs with FastAPI and SQLModel, containerized via Docker Compose with PostgreSQL and Ollama (Phi-3) for local AI reasoning.",
//       ],
//     },
//     {
//       title: "PFA project- Plateforme IA de gestion des compétences",
//       year: "2025",
//       image: "/projects/pfaproject.png",
//       tech: ["Springboot", "FastAPI", "SpringSecurity", "React", "axios", "sickit-learn"],
//       desc: [
//         "Developed a full stack training management  platform integrating a dynamic competency matrix and an AI-based recommendation service for the HR dpartment.",
//         "Built a FastAPI microservice for semantic recommendation of trainings, combining TF-IDF, domain-specific keywords, and Sentence-Transformers embeddings to match employee needs with available courses.",
//         " Developed a Spring Boot backend (JWT, Spring Security MySQL), and a React + TypeScript dashboard for KPI  tracking and visualization.",
//       ],
//     },

//     {
//       title: "Data Warehouse & Power BI Reporting",
//       year: "2025",
//       image: "/projects/datawarehouse.png",
//       tech: ["SQL Server", "SSIS", "Power BI"],
//       desc: [
//         "Designed and implemented analytical data models.",
//         "Performed ETL workflows using SQL Server Integration Services (SSIS).",
//         "Built dynamic dashboards in Power BI for business decision-making.",
//       ],
//     },

//     {
//       title: "ToMobilti – C2C Car Rental Mobile Application",
//       year: "2025",
//       image: "/projects/tomobilti.jpg",
//       tech: ["React Native", "Spring Boot", "MySQL", "JWT", "Docker"],
//       desc: [
//         "Cross-platform mobile application enabling peer-to-peer and agency-based car rentals.",
//         "Implemented secure JWT authentication, role-based access, CRUD operations and a Dockerized environment.",
//       ],
//     },

//     {
//       title: "NutriWise – Web-based Nutrition Tracking Application",
//       year: "2025",
//       image: "/projects/nutriwise.png",
//       tech: ["JEE", "PostgreSQL", "Tomcat", "Maven"],
//       desc: [
//         "Full-stack Java EE application for personalized nutrition tracking.",
//         "Built under the MVC architecture and deployed via Maven.",
//       ],
//     },

//     {
//       title: "Stellar Classification – Machine Learning Project",
//       year: "2024",
//       image: "/projects/stellar.png",
//       tech: ["SVM", "KNN", "Random Forest", "Decision Tree"],
//       desc: [
//         "Developed ML models predicting stellar classes using astrophysical datasets.",
//       ],
//     },
//   ];

//   const [openIndex, setOpenIndex] = useState(null);

//   const toggle = (i) => {
//     setOpenIndex(openIndex === i ? null : i);
//   };

//   return (
//     <section id="projects" className="py-20 bg-brand-section/50 dark:bg-darkbrand-section/80 transition-colors">
//       <h2 className="text-center text-3xl font-bold text-brand-text dark:text-darkbrand-text mb-12">
//         Technical Projects
//       </h2>

//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
//         {projects.map((p, i) => (
//           <motion.div
//             key={i}
//             whileHover={{ scale: 1.02 }}
//             transition={{ duration: 0.3 }}
//             className="bg-brand-bg/80 dark:bg-darkbrand-bg/80 border border-brand-accent/20 dark:border-darkbrand-accent/20 shadow-lg rounded-3xl p-5 backdrop-blur-xl cursor-pointer"
//             onClick={() => toggle(i)}
//           >
//             {/* Header */}
//             <div className="flex justify-between items-center">
//               <h3 className="text-lg font-semibold text-brand-text dark:text-darkbrand-text">{p.title}</h3>
//               <span className="text-brand-accent dark:text-darkbrand-accent">{openIndex === i ? "▲" : "▼"}</span>
//             </div>

//             {/* Year */}
//             <p className="text-sm text-brand-text/70 dark:text-darkbrand-text/70 mt-1">{p.year}</p>

//             {/* Expandable content */}
//             <AnimatePresence>
//               {openIndex === i && (
//                 <motion.div
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: "auto" }}
//                   exit={{ opacity: 0, height: 0 }}
//                   transition={{ duration: 0.4 }}
//                   className="overflow-hidden"
//                 >
//                   {/* IMAGE */}
//                   <div
//   className="
//     mt-4 h-44 w-full rounded-xl overflow-hidden shadow-md
//     bg-white flex items-center justify-center
//   "
// >
//   <Image
//     src={p.image}
//     alt={p.title}
//     width={500}
//     height={200}
//     className="object-contain max-h-full max-w-full"
//   />
// </div>


//                   {/* DESCRIPTION */}
//                   <ul className="mt-4 space-y-2 text-[15px] text-brand-text/80 dark:text-darkbrand-text/80">
//                     {p.desc.map((line, idx) => (
//                       <li key={idx} className="flex gap-2">
//                         <span className="text-brand-accent dark:text-darkbrand-accent mt-1">•</span>
//                         {line}
//                       </li>
//                     ))}
//                   </ul>

//                   {/* TECHNO STACK */}
//                   <div className="mt-4 flex flex-wrap gap-2">
//                     {p.tech.map((t) => (
//                       <span
//                         key={t}
//                         className="px-3 py-1 text-xs rounded-full bg-[#FDF3EC] dark:bg-[#151011] border border-brand-accent/30 dark:border-darkbrand-accent/30"
//                       >
//                         {t}
//                       </span>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }
