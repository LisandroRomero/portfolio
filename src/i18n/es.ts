import type { Translations } from "./types";

export const es: Translations = {
  hero: {
    title: "Lisandro Romero",
    role: "Full Stack Developer",
    status: "Disponible para trabajar",
    tagline:
      "Desarrollador Full Stack con foco en backend: diseño APIs sólidas y las conecto con interfaces en React y Next.js.",
    buttons: {
      github: "GitHub",
      linkedin: "LinkedIn",
      cv: "Descargar CV",
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
      frontend: "Frontend",
      backend: "Backend",
      databases: "Bases de datos",
      tools: "Herramientas",
      concepts: "Conceptos",
    },
    concepts: ["REST APIs", "Arquitectura en capas", "POO", "Testing"],
  },

  experience: {
    title: "Experiencia",
    present: "Actualidad",
    jobs: {
      unveil: {
        role: "Desarrollador Full Stack",
        highlights: [
          "Desarrollé funcionalidades de frontend y backend para un SaaS de gestión integral de restaurantes en producción.",
          "Implementé reservas automatizadas por WhatsApp y llamadas telefónicas con IA conversacional.",
          "Modelé la lógica de negocio de mesas, zonas, reservas, órdenes, pagos y usuarios.",
          "Integré sistemas TPV con Square y gestioné suscripciones y planes con Stripe.",
          "Participé en despliegues y en la gestión de entornos de desarrollo, testing y producción.",
        ],
      },
      utnTutor: {
        role: "Tutor de Programación",
        highlights: [
          "Acompañé a alumnos ingresantes de la Tecnicatura en Programación en la resolución de ejercicios.",
          "Expliqué estructuras de control, algoritmos y buenas prácticas, ayudando a desarrollar el pensamiento computacional.",
        ],
      },
    },
  },

  projects: {
    title: "Proyectos",
    labels: {
      live: "Ver en vivo",
      demo: "Demo",
      code: "Código",
      inProgress: "En desarrollo",
      privateRepo: "Repositorio privado · código disponible a pedido",
    },
    items: {
      gameRanking: {
        description:
          "API REST para organizar torneos entre grupos de amigos: espacios multi-tenant, distintas modalidades de competencia y un ranking por puntos.",
        highlights: [
          "Modalidades Playoff y Round Robin de punta a punta: fixture, carga de resultados y tabla de posiciones.",
          "Motor de puntos por modalidad y cierre de torneo con campeones y desempate final.",
          "Autenticación JWT propia y validación de datos con class-validator.",
          "Tests unitarios con Jest y decisiones de diseño documentadas en una bitácora técnica.",
        ],
      },
      foodStore: {
        description:
          "Sistema de gestión de pedidos de comida desarrollado en un equipo de 4 personas: una tienda para clientes y un panel de administración en React, conectados a una API en Python.",
      },
      airland: {
        description:
          "E-commerce de zapatillas Air Force 1 desarrollado en un equipo de 5 personas, con frontend y backend en un monorepo. Incluye autenticación, panel de administrador, ordenamiento de productos y pagos integrados.",
      },
      pokeapp: {
        description:
          "SPA full stack (monorepo) que consume la PokeAPI. Incluye ordenamiento de tarjetas, creación de Pokémon mediante un formulario controlado y un CRUD completo sobre PostgreSQL.",
      },
    },
  },

  contact: {
    title: "Contacto",
    description:
      "¿Te interesa trabajar conmigo o querés saber más sobre mis proyectos? Enviame un mensaje.",
    form: {
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      send: "Enviar mensaje",
      sending: "Enviando...",
      success: "¡Gracias! Tu mensaje fue enviado. Te respondo a la brevedad.",
      error: "No se pudo enviar el mensaje. Probá de nuevo o escribime por LinkedIn.",
    },
  },

  footer: {
    rights: "Todos los derechos reservados.",
    builtWith: "Construido con React + TypeScript",
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
