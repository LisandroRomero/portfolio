import type { JobId } from "../data/experience";
import type { ProjectId } from "../data/projects";
import type { SkillCategory } from "../data/skills";

// Contrato que ambos idiomas deben cumplir. Si falta una clave (o un id de
// proyecto/trabajo agregado en src/data), TypeScript no compila.
export interface Translations {
  hero: {
    title: string;
    role: string;
    tagline: string;
    status: string;
    buttons: { github: string; linkedin: string; cv: string };
  };
  about: {
    title: string;
    description: string[];
  };
  skills: {
    title: string;
    categories: Record<SkillCategory, string>;
    concepts: string[];
  };
  experience: {
    title: string;
    present: string;
    jobs: Record<JobId, { role: string; highlights: string[] }>;
  };
  projects: {
    title: string;
    labels: { live: string; demo: string; code: string; inProgress: string; privateRepo: string };
    items: Record<ProjectId, { description: string; highlights?: string[] }>;
  };
  contact: {
    title: string;
    description: string;
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
      sending: string;
      success: string;
      error: string;
    };
  };
  footer: {
    rights: string;
    builtWith: string;
  };
  navbar: {
    home: string;
    about: string;
    skills: string;
    experience: string;
    projects: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
    switchLang: string;
  };
}
