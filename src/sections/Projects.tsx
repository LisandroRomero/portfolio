import ButtonLink from "../components/ui/ButtonLink";
import Card from "../components/ui/Card";
import Reveal from "../components/ui/Reveal";
import Section from "../components/ui/Section";
import SectionTitle from "../components/ui/SectionTitle";
import Tag from "../components/ui/Tag";
import { useLanguage } from "../context/languageContext";
import { PROJECTS, visibleProjects, type Project } from "../data/projects";

function Projects() {
  const { translations: t } = useLanguage();
  const { labels } = t.projects;

  const renderLinks = (project: Project) => {
    const { live, demo, repos } = project.links;
    if (!live && !demo && repos.length === 0) return null;

    return (
      <div className="flex flex-wrap gap-3">
        {live && (
          <ButtonLink href={live} variant="primary" external>
            {labels.live} ↗
          </ButtonLink>
        )}
        {demo && (
          <ButtonLink href={demo} variant="outline" external>
            {labels.demo} ↗
          </ButtonLink>
        )}
        {repos.map((repo) => (
          <ButtonLink key={repo.url} href={repo.url} external>
            {repo.label ?? labels.code}
          </ButtonLink>
        ))}
      </div>
    );
  };

  return (
    <Section id="projects">
      <Reveal>
        <SectionTitle>{t.projects.title}</SectionTitle>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects(PROJECTS).map((project, i) => {
          const text = t.projects.items[project.id];
          const featured = project.featured;

          return (
            <Reveal
              key={project.id}
              delay={featured ? 0 : i * 80}
              className={featured ? "md:col-span-2 lg:col-span-3" : ""}
            >
              <Card
                interactive
                className={`flex h-full flex-col gap-5 ${
                  featured ? "bg-linear-to-br from-accent-strong/15 to-transparent ring-1 ring-accent/20 md:p-8" : ""
                }`}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className={`font-semibold text-white ${featured ? "text-2xl" : "text-lg"}`}>
                    {project.name}
                  </h3>
                  {project.inProgress && (
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-[11px] text-accent">
                      {labels.inProgress}
                    </span>
                  )}
                </div>

                <div className={featured ? "grid gap-6 md:grid-cols-2" : ""}>
                  <p className="leading-relaxed text-muted">{text.description}</p>

                  {text.highlights && (
                    <ul className="space-y-2 text-sm leading-relaxed text-muted">
                      {text.highlights.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-auto flex flex-col gap-5">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Tag key={tech} variant={featured ? "accent" : "neutral"}>
                        {tech}
                      </Tag>
                    ))}
                  </div>

                  {renderLinks(project)}

                  {project.privateRepo && (
                    <p className="font-mono text-xs text-muted">🔒 {labels.privateRepo}</p>
                  )}
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

export default Projects;
