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
    <section id="hero" className="relative isolate pt-36 pb-24 md:pt-44 md:pb-32">
      {/* Fondo: grilla + resplandor, a todo el ancho de la ventana */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute top-10 left-1/2 h-80 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-accent-hover/25 blur-3xl" />
        <div className="absolute top-40 left-[60%] h-60 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="grid items-center gap-12 md:grid-cols-[1fr_auto]">
        <div className="order-2 text-center md:order-1 md:text-left">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-3 py-1 text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {t.hero.status}
          </p>

          <h1 className="text-gradient pb-2 text-5xl font-bold tracking-tight md:text-7xl">
            {t.hero.title}
          </h1>

          <p className="mt-3 font-mono text-sm text-accent md:text-base">
            {t.hero.role} · Mendoza, Argentina
          </p>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted md:mx-0">
            {t.hero.tagline}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <ButtonLink href={LINKS.github} variant="primary" external>
              {t.hero.buttons.github}
            </ButtonLink>
            <ButtonLink href={LINKS.linkedin} external>
              {t.hero.buttons.linkedin}
            </ButtonLink>
            <ButtonLink href={cv.file} download={cv.name}>
              {t.hero.buttons.cv} ↓
            </ButtonLink>
          </div>
        </div>

        <div className="relative order-1 mx-auto md:order-2">
          <div aria-hidden="true" className="absolute -inset-4 rounded-full bg-accent-hover/30 blur-2xl" />
          <div className="relative rounded-full bg-linear-to-br from-accent via-accent-hover to-fuchsia-500 p-[3px]">
            <img
              src={profilePhoto}
              alt="Lisandro Romero"
              width={256}
              height={256}
              fetchPriority="high"
              className="h-44 w-44 rounded-full border-4 border-surface object-cover md:h-64 md:w-64"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
