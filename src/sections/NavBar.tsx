import { useEffect, useState } from "react";
import { useLanguage } from "../context/languageContext";

// id de la sección → clave del texto en translations.navbar
const NAV_ITEMS = [
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "contact", label: "contact" },
] as const;

export default function NavBar() {
  const { lang, setLang, translations: t } = useLanguage();
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleLanguage = () => setLang(lang === "es" ? "en" : "es");
  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { root: null, rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (id: string) =>
    `relative block py-1 transition-colors duration-300 ${
      activeSection === id ? "text-white" : "text-muted hover:text-white"
    }`;

  const renderLinks = (onClick?: () => void) =>
    NAV_ITEMS.map(({ id, label }) => (
      <li key={id}>
        <a
          href={`#${id}`}
          onClick={onClick}
          className={linkClass(id)}
          aria-current={activeSection === id ? "true" : undefined}
        >
          {t.navbar[label]}
          {activeSection === id && (
            <span className="absolute -bottom-1 left-0 hidden h-px w-full bg-accent md:block" />
          )}
        </a>
      </li>
    ));

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled || menuOpen
          ? "border-line bg-surface/70 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          aria-label={t.navbar.home}
          className="font-mono text-sm font-semibold tracking-wider text-white transition-colors hover:text-accent"
        >
          LR<span className="text-accent">.</span>
        </a>

        <div className="flex items-center gap-6">
          <ul className="hidden gap-6 text-sm md:flex">{renderLinks()}</ul>

          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={t.navbar.switchLang}
            className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted transition hover:border-accent/50 hover:text-white"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>

          <button
            type="button"
            onClick={toggleMenu}
            aria-label={menuOpen ? t.navbar.closeMenu : t.navbar.openMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="text-xl text-white md:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-line md:hidden">
          <ul className="flex flex-col gap-3 px-6 py-4 text-sm">{renderLinks(closeMenu)}</ul>
        </div>
      )}
    </nav>
  );
}
