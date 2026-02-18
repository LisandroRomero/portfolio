import { useLanguage } from "../context/languageContext"


function About() {

    const {translations}= useLanguage()
    return (  
        <section id="about">
            <h2>{translations.about.title}</h2>
            {translations.about.description.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
        </section>
    );
}

export default About