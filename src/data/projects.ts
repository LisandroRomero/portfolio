export interface RepoLink {
  url: string;
  /** Si no hay label se muestra "Código" / "Code" */
  label?: string;
}

export interface Project {
  id: "gameRanking" | "foodStore" | "airland" | "pokeapp";
  name: string;
  technologies: readonly string[];
  links: {
    /** Deploy en vivo: tiene prioridad visual sobre el video */
    live?: string;
    /** Video demo */
    demo?: string;
    repos: readonly RepoLink[];
  };
  /** Ocupa todo el ancho y va primero */
  featured?: boolean;
  inProgress?: boolean;
  /** Repo privado: muestra "código disponible a pedido" en lugar de links */
  privateRepo?: boolean;
  /** No se muestra en el sitio (datos y textos quedan listos para activarlo) */
  hidden?: boolean;
}

export type ProjectId = Project["id"];

export const visibleProjects = (projects: readonly Project[]) =>
  projects.filter((project) => !project.hidden);

export const PROJECTS: readonly Project[] = [
  {
    id: "gameRanking",
    name: "Game Ranking API",
    technologies: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "JWT", "Jest"],
    featured: true,
    inProgress: true,
    privateRepo: true,
    // Oculto hasta terminar la API: borrar esta línea para mostrarlo
    hidden: true,
    links: {
      repos: [],
    },
  },
  {
    id: "foodStore",
    name: "Food-Store",
    technologies: ["TypeScript", "React", "Tailwind CSS", "Zustand", "TanStack Query", "TanStack Form", "Python"],
    links: {
      demo: "https://youtu.be/NTcbaiYz9p8",
      repos: [
        { url: "https://github.com/PabloAVivas/Parcial2Prog4", label: "API" },
        { url: "https://github.com/LisandroRomero/Food-Store-Front-Admin", label: "Admin" },
        { url: "https://github.com/LisandroRomero/Food-Store-Front-Store", label: "Store" },
      ],
    },
  },
  {
    id: "airland",
    name: "AirLand",
    technologies: ["JavaScript", "Express", "React", "Redux", "Firebase"],
    links: {
      demo: "https://www.youtube.com/watch?v=ohav_dRQjIM",
      repos: [{ url: "https://github.com/lauticometti/AirLand" }],
    },
  },
  {
    id: "pokeapp",
    name: "PokeApp",
    technologies: ["JavaScript", "Express", "React", "Redux", "PostgreSQL"],
    links: {
      demo: "https://www.youtube.com/watch?v=6EAasKPHyyA",
      repos: [{ url: "https://github.com/LisandroRomero/Pokemon-PI" }],
    },
  },
];
