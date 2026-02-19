export const en = {
    hero: {
      title: "Lisandro Romero",
      role: "FullStack Developer",
      buttons: {
        github: "GitHub",
        linkedin: "LinkedIn",
        cv: "Download CV",
      },
    },
    about: {
      title: "About Me",
      description:[
        "I am currently in the last semester of the University Programming Degree at the National Technological University and a Full Stack Developer with experience in real-world projects.",
        "I work on scalable web applications, contributing to both frontend and backend, focusing on code quality, maintainability, and user experience.",
        "Currently I use Java, Spring Boot, Python, JavaScript, TypeScript, Node.js, and React / Next.js, integrating APIs, databases, and external services."

      ]
        ,
    },
    skills: {
      title: "Technologies",
      categories: {
        backend: "Backend",
        frontend: "Frontend",
        databases: "Databases",
        tools: "Tools",
        concepts: "Concepts",
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
        title: "Experience",
        jobs: [
          {
            role: "Full Stack Developer",
            company: "Unveil Creators Corp",
            period: "2025",
            description:
              "Contributed to the development of a SaaS product for comprehensive restaurant management, working on both frontend and backend in real production environments. Implemented automated reservation features integrated with WhatsApp and phone calls using conversational AI. Developed business logic for managing tables, zones, reservations, orders, payments, and users, ensuring system scalability and consistency. Integrated POS systems using Square and handled subscriptions and plans through Stripe. Participated in deployment, maintenance, and management of development, testing, and production environments.",
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
              "REST APIs",
              "Jira"
            ]
          },
          {
            role: "Programming Tutor",
            company: "National Technological University (UTN)",
            period: "2025",
            description:
              "Academic tutor for first-year students in the Programming Technician program. Assisted with exercises, explained core programming concepts, and supported students in developing computational thinking. Covered topics such control structures, algorithms, and development best practices.",
            technologies: [
              
              "Algorithms",
              "Programming Logic",
              "Best Practices"
            ]
          }
        ]
      },
  
      projects: {
        title: "Projects",
        items: [
          {
            name: "Library Management System",
            description:
              "Backend application developed in Java based on an object-oriented UML design. It manages books, users, and loans while applying layered architecture and OOP best practices.",
            technologies: ["Java", "OOP", "UML", "Layered Architecture", "MySQL"],
            demo: "https://mi-demo.com",
            repo: "https://github.com/tuusuario/mi-api"
          },
          {
            name: "Reservation REST API (FastAPI + Supabase)",
            description:
              "REST API built with FastAPI for managing reservations and users. Implements authentication, validations, and PostgreSQL persistence using Supabase. Designed following layered architecture and backend best practices.",
            technologies: [
              "Python",
              "FastAPI",
              "Supabase",
              "PostgreSQL",
              "Docker",
              "REST APIs"
            ],
            demo: "https://mi-demo.com",
            repo: "https://github.com/tuusuario/mi-api"
          },
          {
            name: "Task Management System",
            description:
              "Full stack application for task management with complete CRUD operations. Includes user authentication, state handling, and a modular design focused on scalability and maintainability.",
            technologies: [
              "React",
              "Node.js",
              "Express",
              "TypeScript",
              "MongoDB",
              "REST APIs"
            ],
            link: "#"
          }
        ]
      },
  
      contact: {
        title: "Contact",
        description:
          "Interested in working with me or learning more about my projects? Send me a message.",
        form: {
          name: "Name",
          email: "Email",
          message: "Message",
          send: "Send message"
        }
      }
      ,
  
      footer: {
        rights: "All rights reserved.",
        builtWith: "Built with React + TypeScript"
      }
      ,
    navbar: {
        home: "Home",
        about: "About",
        skills: "Skills",
        experience: "Experience",
        projects: "Projects",
        contact: "Contact"
      }
      
  };
  