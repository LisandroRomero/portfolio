import { useLanguage } from "../context/languageContext";

function Projects() {
  const { translations: t } = useLanguage();

  return (
    <section id="projects" className="bg-[#20202a] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-14 text-center text-3xl font-semibold text-white md:text-4xl relative">
          {t.projects.title}
          <span className="absolute left-1/2 -bottom-3 h-[3px] w-14 -translate-x-1/2 rounded bg-[#ff6b35]"></span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {t.projects?.items?.map((project, index) => (
            <div
              key={index}
              className="rounded-xl border-2 border-[#ff6b35] bg-[#2a2a34] p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <h3 className="mb-3 text-xl font-semibold text-white">
                {project.name}
              </h3>

              <p className="mb-5 text-[#b0b0b0] leading-relaxed">
                {project.description}
              </p>

              <div className="mb-5 flex flex-wrap gap-2">
                {project.technologies?.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-md border border-[#ff6b35] px-2 py-1 text-sm text-[#ff6b35]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    className="rounded-lg border-2 border-[#ff6b35] px-4 py-2 text-sm font-medium text-[#ff6b35] transition-all duration-300 hover:bg-[#ff6b35] hover:text-white"
                  >
                    Demo
                  </a>
                )}

                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    className="rounded-lg border-2 border-[#404040] px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-[#ff6b35] hover:text-[#ff6b35]"
                  >
                    Código
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
