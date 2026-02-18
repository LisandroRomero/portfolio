import profilepick from "../assets/profilepick.png"
import { useLanguage } from "../context/languageContext";
import cvEs from "../assets/CV-LisandroRomero.pdf"
import cvEn from "../assets/Lisandro_Romero_CV_EN.pdf"


function Hero() {

    const {translations, lang} = useLanguage();
    const cvFile = lang === "es" ? cvEs : cvEn

    return ( 
        <section id="hero">
            <h1>{translations.hero.title}</h1>
            <h2>{translations.hero.role}</h2>
            <h3>Mendoza, Argentina</h3>
            <img src={profilepick} alt="profile image" />

            <div>
                <a href="https://github.com/LisandroRomero" target="_blank">
                    {translations.hero.buttons.github}
                </a>

                <a href="https://linkedin.com/in/lisandroromero18" target="_blank">
                    {translations.hero.buttons.linkedin}
                </a>

                <a href={cvFile} download>
                    {translations.hero.buttons.cv}
                </a>
            </div>
        </section>
     );
}

export default Hero;