import Card from "../components/ui/Card";
import Reveal from "../components/ui/Reveal";
import Section from "../components/ui/Section";
import SectionTitle from "../components/ui/SectionTitle";
import Tag from "../components/ui/Tag";
import { useLanguage } from "../context/languageContext";
import { SKILL_CATEGORY_ORDER, TECH_SKILLS, type SkillCategory } from "../data/skills";

// Bento: frontend y backend ocupan más espacio que el resto
const SPAN: Partial<Record<SkillCategory, string>> = {
  frontend: "md:col-span-3",
  backend: "md:col-span-3",
};

function Skills() {
  const { translations: t } = useLanguage();
  const { title, categories, concepts } = t.skills;

  return (
    <Section id="skills">
      <Reveal>
        <SectionTitle>{title}</SectionTitle>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-6">
        {SKILL_CATEGORY_ORDER.map((category, i) => {
          const skills = category === "concepts" ? concepts : TECH_SKILLS[category];

          return (
            <Reveal key={category} delay={i * 80} className={SPAN[category] ?? "md:col-span-2"}>
              <Card interactive className="h-full">
                <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
                  {categories[category]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

export default Skills;
