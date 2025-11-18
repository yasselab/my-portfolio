"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import GoldScript from "./GoldScript";

export default function Skills() {
  const categories = [
    {
      title: "Programming Languages",
      items: [
        { name: "Java", icon: "/icons/java.png" },
        { name: "Python", icon: "/icons/python.png" },
        { name: "C++", icon: "/icons/cpp.png" },
        { name: "C", icon: "/icons/c.png" },
        { name: "JavaScript", icon: "/icons/javascript.png" },
        { name: "TypeScript", icon: "/icons/typescript.png" },
      ],
    },
    {
      title: "Web & Application Development",
      items: [
        { name: "Spring Boot", icon: "/icons/spring.png" },
        { name: "Angular", icon: "/icons/angular.png" },
        { name: "React", icon: "/icons/react.png" },
        { name: "Next.js", icon: "/icons/nextjs.png" },
        { name: "Flutter", icon: "/icons/flutter.png" },
        { name: "FastAPI", icon: "/icons/fastapi.png" },
        { name: "Node.js", icon: "/icons/nodejs.png" },
        { name: "PWA", icon: "/icons/pwa.png" },
        { name: "REST APIs", icon: "/icons/rest.png" },
        { name: "Swagger", icon: "/icons/swagger.png" },
        { name: "Postman", icon: "/icons/postman.png" },
        { name: "Spring Security", icon: "/icons/springsecurity.png" },
        { name: "Spring Data", icon: "/icons/springdata.png" },
      ],
    },
    {
      title: "AI & NLP",
      items: [
        { name: "Machine Learning", icon: "/icons/ml.png" },
        { name: "Large Language Models", icon: "/icons/llm.png" },
        { name: "Hugging Face", icon: "/icons/huggingface.png" },
        { name: "FinBERT", icon: "/icons/finbert.png" },
        { name: "Playwright", icon: "/icons/playwright.png" },
        { name: "BeautifulSoup", icon: "/icons/beautifulsoup.png" },
        { name: "pgVector", icon: "/icons/pgvector.png" },
      ],
    },
    {
      title: "Databases & DevOps",
      items: [
        { name: "SQL", icon: "/icons/sql.png" },
        { name: "MySQL", icon: "/icons/mysql.png" },
        { name: "PostgreSQL", icon: "/icons/postgres.png" },
        { name: "NoSQL", icon: "/icons/nosql.png" },
        { name: "MongoDB", icon: "/icons/mongodb.png" },
        { name: "Docker", icon: "/icons/docker.png" },
        { name: "Git / GitHub / GitLab", icon: "/icons/git.png" },
        { name: "CI/CD", icon: "/icons/cicd.png" },
        { name: "Kubernetes", icon: "/icons/kubernetes.png" },
      ],
    },
    
    {
      title: "Modélisation",
      items: [
        { name: "UML", icon: "/icons/uml.png" },
        { name: "Merise", icon: "/icons/merise.png" },
        { name: "BPMN", icon: "/icons/bpmn.png" },
      ],
    },
    // {
    //   title: "Languages",
    //   items: [
    //     { name: "French (Bilingual)", icon: "/icons/fr.svg" },
    //     { name: "English (Professional)", icon: "/icons/en.svg" },
    //   ],
    // },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-brand-section/60 dark:bg-darkbrand-section/90 transition-colors"
    >
      <div className="flex justify-center mb-12 pt-6">
        <GoldScript className="text-5xl leading-[1.4] block">
          Technical Skills
        </GoldScript>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-10 px-6">
        {categories.map((category, idx) => {
          // on duplique la liste pour que le train soit continu
          const stripItems = [...category.items, ...category.items];

          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: idx * 0.1 }}
              className="
                skill-row
                bg-brand-bg/70 dark:bg-darkbrand-bg/70 
                shadow-lg rounded-3xl border border-brand-accent/20 dark:border-darkbrand-accent/20
                p-6 md:p-7 backdrop-blur-xl
              "
            >
              <h3 className="text-lg font-semibold text-brand-accent dark:text-darkbrand-accent mb-4">
                {category.title}
              </h3>

              {/* train horizontal */}
              <div className="relative overflow-hidden">
                <div className="skill-track flex gap-6">
                  {stripItems.map((item, i) => (
                    // <div
                    //   key={category.title + item.name + i}
                    //   className="
                    //     flex items-center gap-2 px-4 py-2
                    //     rounded-2xl bg-[#FDF3EC]/80 dark:bg-[#151011]/80
                    //     border border-[#D9A86C]/40
                    //     text-sm text-brand-text dark:text-darkbrand-text
                    //     shadow-sm cursor-default select-none
                    //   "
                    // >
                    //   {item.icon && (
                    //     <Image
                    //       src={item.icon}
                    //       alt={item.name}
                    //       width={22}
                    //       height={22}
                    //       className="opacity-90"
                    //     />
                    //   )}
                    //   <span>{item.name}</span>
                    // </div>
                    <div
  key={category.title + item.name + i}
  className="
    flex flex-col items-center justify-center
    px-4 py-3
    rounded-2xl 
    bg-[#E8BF8F]/80 dark:bg-[#151011]/80
    border border-[#D9A86C]/40
    text-sm 
    text-brand-text dark:text-darkbrand-text
    shadow-sm cursor-default select-none
    min-w-[110px]
  "
>
  {item.icon && (
    <Image
      src={item.icon}
      alt={item.name}
      width={80}     // 🔥 icône agrandie
      height={80}
      className="opacity-95"
    />
  )}

  <span className="mt-2 text-[13px] font-medium text-center">
    {item.name}
  </span>
</div>

                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
