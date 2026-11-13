import type { Translations } from "./types";

export const en: Translations = {
  hero: {
    title: "Lisandro Romero",
    role: "Full Stack Developer",
    status: "Open to work",
    tagline:
      "Full Stack Developer with a backend focus: I design solid APIs and connect them to React and Next.js interfaces.",
    buttons: {
      github: "GitHub",
      linkedin: "LinkedIn",
      cv: "Download CV",
    },
  },

  about: {
    title: "About Me",
    description: [
      "Recent graduate in Programming from the National Technological University (UTN - FRM) and Full Stack Developer with hands-on experience in real-world projects.",
      "I build scalable web applications across frontend and backend, with a focus on code quality, maintainability, and user experience.",
      "I currently work with Java, Spring Boot, Python, JavaScript, TypeScript, NestJS, Node.js, and React / Next.js, integrating APIs, databases, and external services.",
    ],
  },

  skills: {
    title: "Technologies",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      databases: "Databases",
      tools: "Tools",
      concepts: "Concepts",
    },
    concepts: ["REST APIs", "Layered Architecture", "OOP", "Testing"],
  },

  experience: {
    title: "Experience",
    present: "Present",
    jobs: {
      unveil: {
        role: "Full Stack Developer",
        highlights: [
          "Built frontend and backend features for a restaurant management SaaS running in production.",
          "Implemented automated reservations via WhatsApp and phone calls using conversational AI.",
          "Modeled the business logic for tables, zones, reservations, orders, payments, and users.",
          "Integrated POS systems with Square and handled subscriptions and plans with Stripe.",
          "Took part in deployments and in managing development, testing, and production environments.",
        ],
      },
      utnTutor: {
        role: "Programming Tutor",
        highlights: [
          "Mentored first-year students of the Programming Technician program while solving exercises.",
          "Explained control structures, algorithms, and best practices, helping students build computational thinking.",
        ],
      },
    },
  },

  projects: {
    title: "Projects",
    labels: {
      live: "Live site",
      demo: "Demo",
      code: "Code",
      inProgress: "In progress",
      privateRepo: "Private repository · code available on request",
    },
    items: {
      gameRanking: {
        description:
          "REST API for running tournaments among groups of friends: multi-tenant spaces, multiple competition formats, and a points-based ranking.",
        highlights: [
          "End-to-end Playoff and Round Robin formats: fixtures, result submission, and standings.",
          "Per-format points engine and tournament closing with champions and a final tiebreaker.",
          "Custom JWT authentication and input validation with class-validator.",
          "Unit tests with Jest and design decisions documented in a technical log.",
        ],
      },
      foodStore: {
        description:
          "Food order management system built by a team of four: a customer storefront and an admin dashboard in React, backed by a Python API.",
      },
      airland: {
        description:
          "Air Force 1 sneakers e-commerce built by a team of five, with frontend and backend in a monorepo. Features authentication, an admin dashboard, product sorting, and integrated payments.",
      },
      pokeapp: {
        description:
          "Full stack SPA (monorepo) that consumes the PokeAPI. Includes card sorting, Pokémon creation through a controlled form, and a complete CRUD backed by PostgreSQL.",
      },
    },
  },

  contact: {
    title: "Contact",
    description:
      "Interested in working with me or learning more about my projects? Send me a message.",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
      sending: "Sending...",
      success: "Thanks! Your message was sent. I'll get back to you soon.",
      error: "The message couldn't be sent. Please try again or reach me on LinkedIn.",
    },
  },

  footer: {
    rights: "All rights reserved.",
    builtWith: "Built with React + TypeScript",
  },

  navbar: {
    home: "Home",
    about: "About",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchLang: "Cambiar a español",
  },
};
