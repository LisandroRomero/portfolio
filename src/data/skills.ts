// Nombres de tecnologías: no se traducen. Las categorías sí, por eso viven en i18n.
export const TECH_SKILLS = {
  backend: ["Java", "Spring Boot", "Python", "FastAPI", "Node.js", "Express", "NestJS"],
  databases: ["PostgreSQL", "MySQL", "MongoDB", "Supabase"],
  frontend: ["TypeScript", "JavaScript", "React", "Next.js", "Redux", "Tailwind", "HTML", "CSS"],
  tools: ["Git", "Docker", "Postman"],
} as const;

export type SkillCategory = keyof typeof TECH_SKILLS;

// Backend primero: es el foco del perfil
export const SKILL_CATEGORY_ORDER: readonly SkillCategory[] = ["backend", "databases", "frontend", "tools"];
