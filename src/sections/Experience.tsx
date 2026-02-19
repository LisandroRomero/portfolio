import { useLanguage } from "../context/languageContext";

function Experience() {
  const { translations } = useLanguage();

  return (
    <section
      id="experience"
      className="max-w-5xl mx-auto px-6 py-16"
    >
      <h2 className="text-3xl font-bold mb-10 border-b border-[#404040] pb-4">
        {translations.experience.title}
      </h2>

      <div className="flex flex-col gap-8">
        {translations.experience.jobs.map((job, index) => (
          <div
            key={index}
            className="
              bg-[#2a2a34]
              border-2 border-[#ff6b35]
              rounded-xl
              p-6
              shadow-lg
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-2xl
              hover:border-[#e55a2b]
            "
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {job.role}
                </h3>
                <h4 className="text-[#ff6b35] font-medium">
                  {job.company}
                </h4>
              </div>

              <span className="text-sm text-gray-400 whitespace-nowrap">
                {job.period}
              </span>
            </div>

            <p className="mt-4 text-gray-300 leading-relaxed">
              {job.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {job.technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="
                    px-3 py-1
                    text-sm
                    bg-[#20202a]
                    border border-[#404040]
                    rounded-full
                    text-gray-200
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
