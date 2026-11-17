import type { Translations } from "./types";

export const en: Translations = {
  hero: {
    title: "Lisandro Romero",
    role: "Full stack developer in Mendoza, Argentina",
    tagline:
      "I work across the stack, but the backend is where I do my best work: modeling the business, designing the API, and getting it ready for a React or Next.js frontend.",
    buttons: {
      github: "GitHub",
      linkedin: "LinkedIn",
      cv: "Download CV (PDF)",
    },
  },

  about: {
    title: "About",
    description: [
      "Recent graduate in Programming from the National Technological University (UTN - FRM) and Full Stack Developer with hands-on experience in real-world projects.",
      "I build scalable web applications across frontend and backend, with a focus on code quality, maintainability, and user experience.",
      "I currently work with Java, Spring Boot, Python, JavaScript, TypeScript, NestJS, Node.js, and React / Next.js, integrating APIs, databases, and external services.",
    ],
  },

  skills: {
    title: "Technologies",
    categories: {
      backend: "Backend",
      databases: "Databases",
      frontend: "Frontend",
      tools: "Tools",
    },
  },

  experience: {
    title: "Experience",
    present: "Present",
    jobs: {
      unveil: {
        role: "Full stack developer",
        highlights: [
          "Built frontend and backend features for a restaurant management SaaS running in production.",
          "Implemented automated reservations over WhatsApp and phone calls, handled by conversational AI.",
          "Modeled the business logic for tables, zones, reservations, orders, payments, and users.",
          "Integrated point-of-sale systems with Square, and subscriptions and plans with Stripe.",
          "Worked on deployments and on the development, testing, and production environments.",
        ],
      },
      utnTutor: {
        role: "Programming tutor",
        highlights: [
          "Helped first-year students of the Programming Technician program work through their exercises.",
          "Explained control structures, algorithms, and good coding practices.",
        ],
      },
    },
  },

  projects: {
    title: "Projects",
    labels: {
      live: "View site",
      demo: "Watch demo",
      code: "Code",
      inProgress: "In progress",
      privateRepo: "Private repository. Ask me if you'd like to see the code.",
    },
    items: {
      gameRanking: {
        description:
          "REST API for running tournaments among groups of friends: multi-tenant spaces, several competition formats, and a points-based ranking.",
        highlights: [
          "Complete Playoff and Round Robin formats: fixtures, result entry, and standings.",
          "Points per format and tournament closing with champions and a final tiebreaker.",
          "Custom JWT authentication and input validation with class-validator.",
          "Unit tests with Jest and a log of the design decisions.",
        ],
      },
      foodStore: {
        description:
          "Food ordering system built by a team of four: a customer storefront and an admin dashboard in React, connected to a Python API.",
      },
      airland: {
        description:
          "Air Force 1 sneaker e-commerce built by a team of five, with frontend and backend in a monorepo. It has authentication, an admin dashboard, product sorting, and payments.",
      },
      pokeapp: {
        description:
          "Full stack SPA in a monorepo that consumes the PokeAPI. You can sort the cards, create Pokémon through a controlled form, and run the full CRUD on PostgreSQL.",
      },
    },
  },

  contact: {
    title: "Contact",
    description: "If you have a job opportunity or a question about one of my projects, send me a message.",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
      sending: "Sending...",
      success: "Message sent. I'll reply by email.",
      error: "The message didn't go through. Try again or reach me on LinkedIn.",
    },
  },

  navbar: {
    home: "Home",
    about: "About",
    skills: "Technologies",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchLang: "Cambiar a español",
  },
};
