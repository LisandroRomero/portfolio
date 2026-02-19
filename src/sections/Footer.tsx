import { useLanguage } from "../context/languageContext";

function Footer() {
  const { translations: t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#404040] bg-[#2a2a34] px-6 py-10 text-center">
      <p className="text-sm text-[#b0b0b0]">
        © {year} Lisandro Romero. {t.footer.rights}
      </p>

      <p className="mt-2 text-sm text-[#b0b0b0]">
        {t.footer.builtWith}
      </p>

      <div className="mt-6 flex justify-center gap-6">
        <a
          href="https://github.com/LisandroRomero"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#b0b0b0] transition-colors hover:text-[#ff6b35]"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/lisandroromero18"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#b0b0b0] transition-colors hover:text-[#ff6b35]"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
