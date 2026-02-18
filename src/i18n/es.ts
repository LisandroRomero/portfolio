export const es = { 
    hero: {
        title: "Lisandro Romero",
        role: "FullStack Developer",       
        buttons: {
          github: "GitHub",
          linkedin: "LinkedIn",
          cv: "Descargar CV",
        }
    },
    about:{
        title:"Sobre Mi",
        description:[
            "Soy estudiante del ultimo semestre de la Tecnicatura Universitaria en programacion y Desarrollador Full Stack con experiencia en proyectos reales",
            " Trabajo en el desarrollo de aplicaciones web escalables, participando tanto en frontend como backend, con foco en la calidad del código, la mantenibilidad y la experiencia de usuario.",
            " Actualmente utilizo Java, Spring Boot, Python ,JavaScript, TypeScript, Node.js y React / Next.js, integrando APIs, bases de datos y servicios externos"

        ]
    },
    skills: {
        title: "Tecnologías",
        categories: {
          backend: "Backend",
          frontend: "Frontend",
          databases: "Bases de datos",
          tools: "Herramientas",
          concepts: "Conceptos"
        },
        items: {
            frontend:["JavaScript","React","Next.js","Redux","HTML","CSS","Tailwind"],
            backend: ["Java", "Spring Boot", "Python", "TypeScript","Express","Node.js"],
            databases: ["MySQL", "PostgreSQL", "MongoDB","Supabase"],
            tools: ["Git", "Docker", "Postman"],
            concepts: ["REST APIs", "Arquitectura en capas", "POO", "Testing"]
          },
      },

      experience: {
  title: "Experiencia",
  jobs: [
    {
      role: "Desarrollador Full Stack",
      company: "Unveil Creators Corp",
      period: "septiembre 2025 - Presente",
      description:
        "Participación en el desarrollo de un producto SaaS para la gestión integral de restaurantes, trabajando tanto en frontend como backend en entornos productivos. Implementación de funcionalidades de reservas automatizadas integradas con WhatsApp y llamadas telefónicas mediante IA conversacional. Desarrollo de lógica de negocio para la gestión de mesas, zonas, reservas, órdenes, pagos y usuarios, asegurando escalabilidad y consistencia del sistema. Integración con sistemas TPV utilizando Square y manejo de suscripciones y planes mediante Stripe. Participación en despliegues, mantenimiento y gestión de entornos de desarrollo, testing y producción.",
      technologies: [
        "Next.js",
        "React",
        "Node.js",
        "TypeScript",
        "JavaScript",
        "Python",
        "FastAPI",
        "Supabase (PostgreSQL)",
        "Stripe",
        "Docker",
        "AWS",
        "Vercel",
        "Git",
        "GitHub",
        "APIs REST",
        "Jira"
      ]
    },
    {
      role: "Tutor de Programación",
      company: "Universidad Tecnológica Nacional (UTN)",
      period: "marzo 2025 - julio 2025",
      description:
        "Tutor académico para alumnos ingresantes de la Tecnicatura en Programación. Asistencia en la resolución de ejercicios, explicación de conceptos fundamentales de programación y acompañamiento en la adaptación a la lógica de pensamiento computacional. Apoyo en temas de POO, estructuras de control, algoritmos y buenas prácticas de desarrollo.",
      technologies: [
        "Java",
        "POO",
        "Algoritmos",
        "Lógica de Programación",
        "Buenas Prácticas"
      ]
    }
  ]
},
    
      projects: {
        title: "Proyectos",
        description:
          "Algunos de los proyectos en los que trabajé, enfocados en desarrollo backend, APIs REST y buenas prácticas de arquitectura."
      },
    
      contact: {
        title: "Contacto",
        description:
          "¿Te interesa trabajar conmigo o querés saber más sobre mis proyectos? Podés contactarme a través de mis redes o por email."
      },
    
      footer: {
        builtWith: "Construido con React + TypeScript"
      },
      navbar: {
        home: "Inicio",
        about: "Sobre mí",
        skills: "Tecnologías",
        experience: "Experience",
        projects: "Proyectos",
        contact: "Contacto"
      }
      
}

export type Translations = typeof es;
