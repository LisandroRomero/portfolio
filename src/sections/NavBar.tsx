import { useEffect, useState } from "react";
import { useLanguage } from "../context/languageContext";

export default function NavBar() {
  const { lang, setLang, translations } = useLanguage();
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLang(lang === "es" ? "en" : "es");
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const linkClass = (id: string) =>
    `block transition-colors duration-300 ${
      activeSection === id
        ? "text-[#ff6b35]"
        : "text-[#b0b0b0] hover:text-[#ff6b35]"
    }`;

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-[#20202a]/90 backdrop-blur border-b border-[#404040]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        
        <button
          onClick={toggleMenu}
          className="md:hidden text-white"
        >
          ☰
        </button>

        
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li><a href="#hero" className={linkClass("hero")}>{translations.navbar.home}</a></li>
          <li><a href="#about" className={linkClass("about")}>{translations.navbar.about}</a></li>
          <li><a href="#skills" className={linkClass("skills")}>{translations.navbar.skills}</a></li>
          <li><a href="#experience" className={linkClass("experience")}>{translations.navbar.experience}</a></li>
          <li><a href="#projects" className={linkClass("projects")}>{translations.navbar.projects}</a></li>
          <li><a href="#contact" className={linkClass("contact")}>{translations.navbar.contact}</a></li>
        </ul>

       
        <button
          onClick={toggleLanguage}
          className="rounded-lg border border-[#404040] px-3 py-1 text-sm text-white hover:border-[#ff6b35] hover:text-[#ff6b35] transition"
        >
          {lang === "es" ? "EN" : "ES"}
        </button>
      </div>

      
      {menuOpen && (
        <div className="md:hidden bg-[#20202a]/95 backdrop-blur border-t border-[#404040]">
          <ul className="flex flex-col gap-4 px-6 py-4 text-sm font-medium">
            <li><a onClick={toggleMenu} href="#hero" className={linkClass("hero")}>{translations.navbar.home}</a></li>
            <li><a onClick={toggleMenu} href="#about" className={linkClass("about")}>{translations.navbar.about}</a></li>
            <li><a onClick={toggleMenu} href="#skills" className={linkClass("skills")}>{translations.navbar.skills}</a></li>
            <li><a onClick={toggleMenu} href="#experience" className={linkClass("experience")}>{translations.navbar.experience}</a></li>
            <li><a onClick={toggleMenu} href="#projects" className={linkClass("projects")}>{translations.navbar.projects}</a></li>
            <li><a onClick={toggleMenu} href="#contact" className={linkClass("contact")}>{translations.navbar.contact}</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}