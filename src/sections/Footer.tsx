import { useLanguage } from "../context/languageContext";
import { LINKS } from "../data/links";

const linkClass = "transition-colors hover:text-white";

function Footer() {
  const { translations: t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted md:flex-row">
        <p>
          © {year} Lisandro Romero. {t.footer.rights}
          <span className="hidden md:inline"> · {t.footer.builtWith}</span>
        </p>

        <div className="flex gap-6">
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
            GitHub
          </a>
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
