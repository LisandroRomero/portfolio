import Section from "../components/ui/Section";
import { useLanguage } from "../context/languageContext";
import { SKILL_CATEGORY_ORDER, TECH_SKILLS } from "../data/skills";

function Skills() {
  const { translations: t } = useLanguage();

  return (
    <Section id="skills" title={t.skills.title}>
      <div className="grid gap-4 sm:grid-cols-2">
        {SKILL_CATEGORY_ORDER.map((category) => (
          <div
            key={category}
            className="rounded-xl border border-line bg-raised p-5 transition-colors duration-150 hover:border-accent/50"
          >
            <h3 className="mb-4 text-sm font-semibold text-accent">{t.skills.categories[category]}</h3>
            <ul className="flex flex-wrap gap-2">
              {TECH_SKILLS[category].map((skill) => (
                <li key={skill} className="rounded-md border border-line bg-surface px-2.5 py-1 text-sm">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
