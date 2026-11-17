import type { Translations } from "./types";

export const es: Translations = {
  hero: {
    title: "Lisandro Romero",
    role: "Desarrollador full stack en Mendoza, Argentina",
    tagline:
      "Trabajo en todo el stack, pero donde más rindo es en el backend: modelar el negocio, diseñar la API y dejarla lista para un frontend en React o Next.js.",
    buttons: {
      github: "GitHub",
      linkedin: "LinkedIn",
      cv: "Descargar CV (PDF)",
    },
  },

  about: {
    title: "Sobre mí",
    description: [
      "Técnico Universitario en programación egresado de la UTN - FRM | Desarrollador Full Stack con experiencia en proyectos reales",
      "Trabajo en el desarrollo de aplicaciones web escalables, participando tanto en frontend como backend, con foco en la calidad del código, la mantenibilidad y la experiencia de usuario.",
      "Actualmente utilizo Java, Spring Boot, Python, JavaScript, TypeScript, NestJS, Node.js y React / Next.js, integrando APIs, bases de datos y servicios externos.",
    ],
  },

  skills: {
    title: "Tecnologías",
    categories: {
      backend: "Backend",
      databases: "Bases de datos",
      frontend: "Frontend",
      tools: "Herramientas",
    },
  },

  experience: {
    title: "Experiencia",
    present: "Actualidad",
    jobs: {
      unveil: {
        role: "Desarrollador full stack",
        highlights: [
          "Desarrollé funcionalidades de frontend y backend para un SaaS de gestión de restaurantes en producción.",
          "Implementé reservas automáticas por WhatsApp y por llamada telefónica, atendidas con IA conversacional.",
          "Modelé la lógica de negocio de mesas, zonas, reservas, órdenes, pagos y usuarios.",
          "Integré los sistemas de punto de venta con Square, y las suscripciones y planes con Stripe.",
          "Trabajé en los despliegues y en los entornos de desarrollo, testing y producción.",
        ],
      },
      utnTutor: {
        role: "Tutor de programación",
        highlights: [
          "Acompañé a alumnos ingresantes de la Tecnicatura en Programación en la resolución de ejercicios.",
          "Expliqué estructuras de control, algoritmos y buenas prácticas de código.",
        ],
      },
    },
  },

  projects: {
    title: "Proyectos",
    labels: {
      live: "Ver sitio",
      demo: "Ver demo",
      code: "Código",
      inProgress: "En desarrollo",
      privateRepo: "Repositorio privado. Si querés ver el código, pedímelo.",
    },
    items: {
      gameRanking: {
        description:
          "API REST para organizar torneos entre grupos de amigos: espacios multi-tenant, distintas modalidades de competencia y un ranking por puntos.",
        highlights: [
          "Modalidades Playoff y Round Robin completas: fixture, carga de resultados y tabla de posiciones.",
          "Puntos según la modalidad y cierre de torneo con campeones y desempate final.",
          "Autenticación JWT propia y validación de datos con class-validator.",
          "Tests unitarios con Jest y una bitácora con las decisiones de diseño.",
        ],
      },
      foodStore: {
        description:
          "Sistema de pedidos de comida hecho en un equipo de 4 personas: una tienda para clientes y un panel de administración en React, conectados a una API en Python.",
      },
      airland: {
        description:
          "E-commerce de zapatillas Air Force 1 hecho en un equipo de 5 personas, con frontend y backend en un monorepo. Tiene autenticación, panel de administración, ordenamiento de productos y pagos.",
      },
      pokeapp: {
        description:
          "SPA full stack en un monorepo que consume la PokeAPI. Permite ordenar las tarjetas, crear Pokémon con un formulario controlado y hacer el CRUD completo sobre PostgreSQL.",
      },
    },
  },

  contact: {
    title: "Contacto",
    description: "Si tenés una propuesta de trabajo o querés preguntarme algo sobre un proyecto, escribime.",
    form: {
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      send: "Enviar mensaje",
      sending: "Enviando...",
      success: "Mensaje enviado. Te respondo por email.",
      error: "No se pudo enviar el mensaje. Probá de nuevo o escribime por LinkedIn.",
    },
  },

  navbar: {
    home: "Inicio",
    about: "Sobre mí",
    skills: "Tecnologías",
    experience: "Experiencia",
    projects: "Proyectos",
    contact: "Contacto",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    switchLang: "Switch to English",
  },
};
