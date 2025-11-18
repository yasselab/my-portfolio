import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Certifications from "@/components/Certifications";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-bg dark:bg-darkbrand-bg text-brand-text dark:text-darkbrand-text transition-colors duration-300">
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />

       {/* Bouton retour en haut */}
      <ScrollToTop />

      {/* Footer beige */}
      <footer className="py-6 text-center text-[13px] bg-[#86663d] text-[#000000] mt-10 rounded-t-3xl shadow-inner">
        © {new Date().getFullYear()} ELABJANI Yassmine
      </footer>

      {/* <footer className="py-6 text-center text-[12px] text-brand-text/70 dark:text-darkbrand-text/70">
        © {new Date().getFullYear()}  ELABJANI Yassmine 
      </footer> */}
    </main>
  );
}

