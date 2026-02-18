
import { useLanguage } from "../context/languageContext"

export default function NavBar(){
    const {lang, setLang,translations} = useLanguage()


    const toggleLanguage = ()=>{
        setLang(lang === "es"? "en":"es")
    } 
 return(
    <nav>
        <ul>
        <li><a href="#hero">{translations.navbar.home}</a></li>
        <li><a href="#about">{translations.navbar.about}</a></li>
        <li><a href="#skills">{translations.navbar.skills}</a></li>
        <li><a href="#experience">{translations.navbar.experience}</a></li>
        <li><a href="#projects">{translations.navbar.projects}</a></li>
        <li><a href="#contact">{translations.navbar.contact}</a></li>
      </ul>
        <button onClick={toggleLanguage}>
        {lang === "es" ? "EN" : "ES"}

        
      </button>
    </nav>
 )
}