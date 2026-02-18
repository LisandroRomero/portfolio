import { useLanguage } from "../context/languageContext";

function Experience() {
  const { translations } = useLanguage();
  

  return (
    <section id="experience">
      <h2>{translations.experience.title}</h2>

      {translations.experience.jobs.map((job, index) => (
        <div key={index} className="experience-card">
          <div className="experience-header">
            <div>
              <h3>{job.role}</h3>
              <h4>{job.company}</h4>
            </div>

            <span className="experience-period">{job.period}</span>
          </div>

          <p className="experience-description">{job.description}</p>

          <div className="experience-tech">
            {job.technologies.map((tech: string) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Experience;
