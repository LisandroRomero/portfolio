// Nombres de tecnologías: no se traducen. Los "conceptos" sí, por eso viven en i18n.
export const TECH_SKILLS = {
  frontend: ["JavaScript", "TypeScript", "React", "Next.js", "Redux", "HTML", "CSS", "Tailwind"],
  backend: ["Java", "Spring Boot", "Python", "FastAPI", "Node.js", "Express", "NestJS"],
  databases: ["MySQL", "PostgreSQL", "MongoDB", "Supabase"],
  tools: ["Git", "Docker", "Postman"],
} as const;

export type TechCategory = keyof typeof TECH_SKILLS;
export type SkillCategory = TechCategory | "concepts";

export const SKILL_CATEGORY_ORDER: readonly SkillCategory[] = [
  "frontend",
  "backend",
  "databases",
  "tools",
  "concepts",
];
