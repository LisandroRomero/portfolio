import profilepick from "../assets/profilepick.png"
import { useLanguage } from "../context/languageContext";
import cvEs from "../assets/CV-LisandroRomero.pdf"
import cvEn from "../assets/Lisandro_Romero_CV_EN.pdf"

function Hero() {

    const {translations, lang} = useLanguage();
    const cvFile = lang === "es" ? cvEs : cvEn

    return ( 
        <section
          id="hero"
          className="bg-[#20202a] flex px-6 pt-32 pb-16"
        >
            <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 md:flex-row md:items-center md">
                
                {/* Foto grande */}
                <div className="flex-shrink-0">
                    <img
                        src={profilepick}
                        alt="profile image"
                        className="h-56 w-56 rounded-full border-4 border-[#ff6b35] object-cover shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl md:h-64 md:w-64"
                    />
                </div>

                {/* Info */}
                <div className="text-center md:text-left">
                    <h1 className="mb-2 text-4xl font-bold text-white md:text-5xl">
                        {translations.hero.title}
                    </h1>

                    <h2 className="mb-3 text-xl font-medium text-[#ff6b35] md:text-2xl">
                        {translations.hero.role}
                    </h2>

                    <h3 className="mb-6 text-sm text-[#b0b0b0]">
                        Mendoza, Argentina
                    </h3>

                    <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                        <a
                            href="https://github.com/LisandroRomero"
                            target="_blank"
                            className="rounded-xl border-2 border-[#ff6b35] bg-[#ff6b35] px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#e55a2b] hover:border-[#e55a2b] hover:shadow-xl"
                        >
                            {translations.hero.buttons.github}
                        </a>

                        <a
                            href="https://linkedin.com/in/lisandroromero18"
                            target="_blank"
                            className="rounded-xl border-2 border-[#404040] px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6b35] hover:text-[#ff6b35]"
                        >
                            {translations.hero.buttons.linkedin}
                        </a>

                        <a
                            href={cvFile}
                            download
                            className="rounded-xl border-2 border-[#404040] px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6b35] hover:text-[#ff6b35]"
                        >
                            {translations.hero.buttons.cv}
                        </a>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Hero;
