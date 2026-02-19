import { useLanguage } from "../context/languageContext"

export default function NavBar(){
  const {lang, setLang, translations} = useLanguage()

  const toggleLanguage = ()=>{
    setLang(lang === "es" ? "en" : "es")
  } 

  return(
    <nav className="sticky top-0 z-50 border-b border-[#404040] bg-[#20202a]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        
        <ul className="flex items-center gap-8">
          <li>
            <a href="#hero" className="border-b-2 border-transparent pb-1 text-sm font-medium text-[#b0b0b0] transition-all duration-300 hover:border-[#ff6b35] hover:text-[#ff6b35]">
              {translations.navbar.home}
            </a>
          </li>
          <li>
            <a href="#about" className="border-b-2 border-transparent pb-1 text-sm font-medium text-[#b0b0b0] transition-all duration-300 hover:border-[#ff6b35] hover:text-[#ff6b35]">
              {translations.navbar.about}
            </a>
          </li>
          <li>
            <a href="#skills" className="border-b-2 border-transparent pb-1 text-sm font-medium text-[#b0b0b0] transition-all duration-300 hover:border-[#ff6b35] hover:text-[#ff6b35]">
              {translations.navbar.skills}
            </a>
          </li>
          <li>
            <a href="#experience" className="border-b-2 border-transparent pb-1 text-sm font-medium text-[#b0b0b0] transition-all duration-300 hover:border-[#ff6b35] hover:text-[#ff6b35]">
              {translations.navbar.experience}
            </a>
          </li>
          <li>
            <a href="#projects" className="border-b-2 border-transparent pb-1 text-sm font-medium text-[#b0b0b0] transition-all duration-300 hover:border-[#ff6b35] hover:text-[#ff6b35]">
              {translations.navbar.projects}
            </a>
          </li>
          <li>
            <a href="#contact" className="border-b-2 border-transparent pb-1 text-sm font-medium text-[#b0b0b0] transition-all duration-300 hover:border-[#ff6b35] hover:text-[#ff6b35]">
              {translations.navbar.contact}
            </a>
          </li>
        </ul>

        <button
          onClick={toggleLanguage}
          className="rounded-lg border-2 border-[#404040] px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-[#ff6b35] hover:text-[#ff6b35]"
        >
          {lang === "es" ? "EN" : "ES"}
        </button>
      </div>
    </nav>
  )
}
