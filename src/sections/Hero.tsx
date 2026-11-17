import profilePhoto from "../assets/profile.webp";
import cvEn from "../assets/Lisandro-Romero-CV-EN.pdf";
import cvEs from "../assets/Lisandro-Romero-CV-ES.pdf";
import ButtonLink from "../components/ui/ButtonLink";
import { useLanguage } from "../context/languageContext";
import { LINKS } from "../data/links";

const CV = {
  es: { file: cvEs, name: "Lisandro-Romero-CV-ES.pdf" },
  en: { file: cvEn, name: "Lisandro-Romero-CV-EN.pdf" },
} as const;

function Hero() {
  const { translations: t, lang } = useLanguage();
  const cv = CV[lang];

  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-24">
      <img
        src={profilePhoto}
        alt="Lisandro Romero"
        width={96}
        height={96}
        fetchPriority="high"
        className="h-20 w-20 rounded-full object-cover md:h-24 md:w-24"
      />

      <h1 className="mt-8 text-4xl font-semibold tracking-tight md:text-6xl">{t.hero.title}</h1>
      <p className="mt-3 text-lg text-muted md:text-xl">{t.hero.role}</p>

      <p className="mt-8 max-w-2xl text-lg leading-relaxed md:text-xl md:leading-relaxed">
        {t.hero.tagline}
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
        <ButtonLink href={cv.file} download={cv.name} variant="primary">
          {t.hero.buttons.cv}
        </ButtonLink>
        <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="text-link text-sm">
          {t.hero.buttons.github}
        </a>
        <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-link text-sm">
          {t.hero.buttons.linkedin}
        </a>
      </div>
    </section>
  );
}

export default Hero;
