import { useLanguage } from "../context/languageContext"

function About() {

    const {translations}= useLanguage()

    return (  
        <section
          id="about"
          className="bg-[#20202a] px-6 py-20"
        >
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="mb-10 text-3xl font-semibold text-white md:text-4xl relative">
                    {translations.about.title}
                    <span className="absolute left-1/2 -bottom-3 h-[3px] w-14 -translate-x-1/2 rounded bg-[#ff6b35]"></span>
                </h2>

                <div className="rounded-xl border-2 border-[#ff6b35] bg-[#2a2a34] p-6 shadow-lg space-y-5 text-base leading-relaxed text-[#b0b0b0] md:text-lg">
                    {translations.about.description.map((text, index) => (
                        <p key={index}>
                            {text}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About
