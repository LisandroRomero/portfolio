import { LINKS } from "../data/links";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 border-t border-line px-6 py-8 text-sm text-muted">
      <p>© {year} Lisandro Romero</p>
      <div className="flex gap-6">
        <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
          GitHub
        </a>
        <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
