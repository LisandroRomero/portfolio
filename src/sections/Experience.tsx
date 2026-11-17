import Section from "../components/ui/Section";
import { useLanguage } from "../context/languageContext";
import { JOBS } from "../data/experience";
import { formatPeriod } from "../utils/formatPeriod";

function Experience() {
  const { translations: t, lang } = useLanguage();

  return (
    <Section id="experience" title={t.experience.title}>
      <ol className="space-y-12">
        {JOBS.map((job) => {
          const text = t.experience.jobs[job.id];

          return (
            <li key={job.id}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="text-lg font-semibold">
                  {text.role}, <span className="font-normal">{job.company}</span>
                </h3>
                <p className="text-sm text-muted">
                  {formatPeriod(job.start, job.end, lang, t.experience.present)}
                </p>
              </div>

              <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 leading-relaxed marker:text-muted">
                {text.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              {job.technologies.length > 0 && (
                <p className="mt-4 text-sm text-muted">{job.technologies.join(", ")}</p>
              )}
            </li>
          );
        })}
      </ol>
    </Section>
  );
}

export default Experience;
