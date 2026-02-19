import { useLanguage } from "../context/languageContext";

function Skills() {
  const { translations } = useLanguage();

  const { title, categories, items } = translations.skills;

  return (
    <section id="skills" className="bg-[#20202a] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-14 text-center text-3xl font-semibold text-white md:text-4xl relative">
          {title}
          <span className="absolute left-1/2 -bottom-3 h-[3px] w-14 -translate-x-1/2 rounded bg-[#ff6b35]"></span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Frontend */}
          <div className="rounded-xl border-2 border-[#ff6b35] bg-[#2a2a34] p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="mb-4 text-xl font-semibold text-white">
              {categories.frontend}
            </h3>
            <ul className="space-y-2 text-[#b0b0b0]">
              {items.frontend.map((skill: string) => (
                <li key={skill}>• {skill}</li>
              ))}
            </ul>
          </div>

          {/* Backend */}
          <div className="rounded-xl border-2 border-[#ff6b35] bg-[#2a2a34] p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="mb-4 text-xl font-semibold text-white">
              {categories.backend}
            </h3>
            <ul className="space-y-2 text-[#b0b0b0]">
              {items.backend.map((skill: string) => (
                <li key={skill}>• {skill}</li>
              ))}
            </ul>
          </div>

          {/* Databases */}
          <div className="rounded-xl border-2 border-[#ff6b35] bg-[#2a2a34] p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="mb-4 text-xl font-semibold text-white">
              {categories.databases}
            </h3>
            <ul className="space-y-2 text-[#b0b0b0]">
              {items.databases.map((skill: string) => (
                <li key={skill}>• {skill}</li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div className="rounded-xl border-2 border-[#ff6b35] bg-[#2a2a34] p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="mb-4 text-xl font-semibold text-white">
              {categories.tools}
            </h3>
            <ul className="space-y-2 text-[#b0b0b0]">
              {items.tools.map((skill: string) => (
                <li key={skill}>• {skill}</li>
              ))}
            </ul>
          </div>

          {/* Concepts */}
          <div className="rounded-xl border-2 border-[#ff6b35] bg-[#2a2a34] p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="mb-4 text-xl font-semibold text-white">
              {categories.concepts}
            </h3>
            <ul className="space-y-2 text-[#b0b0b0]">
              {items.concepts.map((skill: string) => (
                <li key={skill}>• {skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
