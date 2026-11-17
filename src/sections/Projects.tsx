import Section from "../components/ui/Section";
import { useLanguage } from "../context/languageContext";
import { PROJECTS, visibleProjects, type Project } from "../data/projects";

function Projects() {
  const { translations: t } = useLanguage();
  const { labels } = t.projects;

  const links = (project: Project) => {
    const { live, demo, repos } = project.links;
    return [
      ...(live ? [{ href: live, label: labels.live }] : []),
      ...(demo ? [{ href: demo, label: labels.demo }] : []),
      ...repos.map((repo) => ({
        href: repo.url,
        label: repo.label ? `${labels.code} (${repo.label})` : labels.code,
      })),
    ];
  };

  return (
    <Section id="projects" title={t.projects.title}>
      <ul className="space-y-14">
        {visibleProjects(PROJECTS).map((project) => {
          const text = t.projects.items[project.id];
          const projectLinks = links(project);

          return (
            <li key={project.id}>
              <h3 className="text-lg font-semibold">
                {project.name}
                {project.inProgress && (
                  <span className="ml-3 text-sm font-normal text-muted">{labels.inProgress}</span>
                )}
              </h3>

              <p className="mt-3 max-w-2xl leading-relaxed">{text.description}</p>

              {text.highlights && (
                <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 leading-relaxed marker:text-muted">
                  {text.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

              <p className="mt-4 text-sm text-muted">{project.technologies.join(", ")}</p>

              {projectLinks.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  {projectLinks.map(({ href, label }) => (
                    <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="text-link">
                      {label}
                    </a>
                  ))}
                </div>
              )}

              {project.privateRepo && <p className="mt-4 text-sm text-muted">{labels.privateRepo}</p>}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

export default Projects;
