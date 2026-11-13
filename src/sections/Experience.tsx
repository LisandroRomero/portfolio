import Reveal from "../components/ui/Reveal";
import Section from "../components/ui/Section";
import SectionTitle from "../components/ui/SectionTitle";
import Tag from "../components/ui/Tag";
import { useLanguage } from "../context/languageContext";
import { JOBS } from "../data/experience";
import { formatPeriod } from "../utils/formatPeriod";

function Experience() {
  const { translations: t, lang } = useLanguage();

  return (
    <Section id="experience">
      <Reveal>
        <SectionTitle>{t.experience.title}</SectionTitle>
      </Reveal>

      {/* Timeline: línea vertical + un punto por trabajo */}
      <ol className="relative space-y-12 border-l border-line">
        {JOBS.map((job) => {
          const text = t.experience.jobs[job.id];

          return (
            <li key={job.id} className="relative pl-8 md:pl-10">
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-[5px] h-[9px] w-[9px] rounded-full bg-accent ring-4 ring-accent/20"
              />
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-wider text-muted">
                  {formatPeriod(job.start, job.end, lang, t.experience.present)}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">{text.role}</h3>
                <p className="text-accent">{job.company}</p>

                <ul className="mt-4 max-w-3xl space-y-2 leading-relaxed text-muted">
                  {text.highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {job.technologies.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>
                )}
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}

export default Experience;
