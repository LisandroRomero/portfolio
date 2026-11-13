import type { YearMonth } from "../utils/formatPeriod";

export interface Job {
  id: "unveil" | "utnTutor";
  company: string;
  /** "2025" o "2025-03". Con mes se muestra "mar 2025". */
  start: YearMonth;
  /** null = trabajo actual ("Actualidad" / "Present") */
  end: YearMonth | null;
  /** Máximo ~8: las que más pesan, no todas las que se tocaron */
  technologies: readonly string[];
}

export type JobId = Job["id"];

export const JOBS: readonly Job[] = [
  {
    id: "unveil",
    company: "Unveil Creators Corp",
    start: "2025-09",
    end: "2026-02",
    technologies: [
      "TypeScript",
      "Next.js",
      "Node.js",
      "Python",
      "FastAPI",
      "Supabase (PostgreSQL)",
      "Stripe",
      "Docker",
    ],
  },
  {
    id: "utnTutor",
    company: "Universidad Tecnológica Nacional (UTN)",
    start: "2025-03",
    end: "2025-09",
    technologies: [],
  },
];
