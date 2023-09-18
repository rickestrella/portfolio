import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  rogys,
  reactdashboard,
  tripguide,
  threejs,
  amparabox,
  cpn,
  tipti,
  logex,
} from "../assets";

import i18n from "../utils/i18n";

// English
const enConstants = {
  navLinks: [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ],

  services: [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React JS Developer",
      icon: mobile,
    },
    {
      title: "Vue Js",
      icon: creator,
    },
    {
      title: "Laravel Developer",
      icon: backend,
    },
  ],

  technologies: [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ],

  experiences: [
    {
      title: "Fullstack Developer",
      company_name: "Amparabox",
      icon: amparabox,
      iconBg: "#fff",
      date: "August 2021 - August 2023",
      points: [
        "Developed and maintained management platforms for brokers and reinsurance brokers using SQL, Laravel 5.6, Laravel 8, HTML5, CSS3, Bootstrap 5, Javascript, and JQuery.",
        "Collaborated with cross-functional teams to deliver projects on time.",
        "Assisted with debugging and resolving technical issues.",
        "Partnered with diverse teams comprising designers, product managers, and fellow developers to forge top-notch admin panels.",
        "Executing adaptable design and guaranteeing seamless performance across various browsers.",
        "Contributed to the development of new features to improve the user experience.",
        "Engaged in code evaluations and furnished valuable input to fellow developers during reviews.",
      ],
    },
    {
      title: "Help Desk",
      company_name: "CPN",
      icon: cpn,
      iconBg: "#fff",
      date: "Nov 2020 - Apr 2021",
      points: [
        "Offered proficient technical assistance to swiftly resolve a wide spectrum of hardware and software concerns, ensuring seamless functionality for users.",
        "Spearheaded the facilitation of data backup and recovery operations, safeguarding critical information and minimizing downtime in case of unexpected incidents.",
        "Acted as a frontline resource, promptly attending to user inquiries and providing step-by-step guidance to troubleshoot issues effectively.",
        "Collaborated closely with the IT team to identify recurring problems, contributing to the development of comprehensive solutions that enhanced overall system reliability.",
        "Took the initiative to develop and maintain an accessible knowledge base, empowering users to resolve minor concerns independently and expediently.",
        "Conducted informative workshops and training sessions for users, empowering them with the knowledge to navigate common technical challenges confidently.",
        "Maintained meticulous records of reported issues and their resolutions, facilitating a streamlined tracking system for future reference and improvement.",
      ],
    },
    {
      title: "Backend Developer",
      company_name: "Logex",
      icon: logex,
      iconBg: "#fff",
      date: "Oct 2018 - Jan 2019",
      points: [
        "Spearheading the creation and continual enhancement of dynamic web applications through proficient utilization of Joomla.",
        "Orchestrating seamless collaboration within the team to architect innovative solutions that cater to the company's needs.",
        "Playing an active role in elevating frontend development, fostering an environment of shared learning by delivering insightful feedback to fellow developers.",
        "Taking the initiative to contribute further as needed to ensure the success of projects and the overall advancement of the team.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Tipti",
      icon: tipti,
      iconBg: "#fff",
      date: "Apr 2018 - Oct 2018",
      points: [
        "Developed and maintaining web applications using Angular 4, ionic, ionic 3 and other related technologies.",
        "Worked together with diverse groups, including designers, product managers, and fellow developers, to produce top-notch products.",
        "Make sure that the design adapts well and works smoothly across different devices and web browsers.",
        "Joined code evaluations and gave valuable suggestions to fellow developers for improvement.",
      ],
    },
  ],

  projects: [
    {
        name: "React Dashboard",
        description:
            "Web-based platform that allows users to search and manage clients and users, providing a convenient and efficient solution for any needs. (In development)",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: reactdashboard,
        source_code_link: "https://github.com/",
    },
    {
        name: "E-Commerce",
        description:
            "E-commerce web application. (In development)",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "pink-text-gradient",
            },
        ],
        image: rogys,
        source_code_link: "https://github.com/",
    },
  ]
}

// Spanish

const esConstants = {
  navLinks: [
    {
      id: 'about',
      title: 'Acerca de mí',
    },
    {
      id: 'work',
      title: 'Trabajo',
    },
    {
      id: 'contact',
      title: 'Contacto',
    },
  ],

  services: [
    {
      title: 'Desarrollador Web',
      icon: web,
    },
    {
      title: 'Desarrollador React JS',
      icon: mobile,
    },
    {
      title: 'Vue Js',
      icon: creator,
    },
    {
      title: 'Desarrollador Laravel',
      icon: backend,
    },
  ],

  technologies: [
    {
      name: 'HTML 5',
      icon: html,
    },
    {
      name: 'CSS 3',
      icon: css,
    },
    {
      name: 'JavaScript',
      icon: javascript,
    },
    {
      name: 'TypeScript',
      icon: typescript,
    },
    {
      name: 'React JS',
      icon: reactjs,
    },
    {
      name: 'Tailwind CSS',
      icon: tailwind,
    },
    {
      name: 'Node JS',
      icon: nodejs,
    },
    {
      name: 'MongoDB',
      icon: mongodb,
    },
    {
      name: 'Three JS',
      icon: threejs,
    },
    {
      name: 'git',
      icon: git,
    },
    {
      name: 'Vue Js',
      icon: git,
    },
    {
      name: 'docker',
      icon: docker,
    },
  ],

  experiences: [
    {
      title: 'Desarrollador Fullstack',
      company_name: 'Amparabox',
      icon: amparabox,
      iconBg: '#fff',
      date: 'Agosto 2021 - Agosto 2023',
      points: [
        'Desarrollé y mantuve plataformas de gestión para corredores y corredores de reaseguros utilizando SQL, Laravel 5.6, Laravel 8, HTML5, CSS3, Bootstrap 5, Javascript y JQuery.',
        'Colaboré con equipos multifuncionales para entregar proyectos a tiempo.',
        'Ayudé a depurar y resolver problemas técnicos.',
        'Colaboré con equipos diversos que incluían diseñadores, gerentes de productos y otros desarrolladores para crear paneles de administración de alta calidad.',
        'Realicé diseños adaptables y garantizé un rendimiento perfecto en diferentes navegadores.',
        'Contribuí al desarrollo de nuevas funciones para mejorar la experiencia del usuario.',
        'Participé en evaluaciones de código y brindé opiniones valiosas a otros desarrolladores durante las revisiones.',
      ],
    },
    {
      title: 'Asistencia Técnica',
      company_name: 'CPN',
      icon: cpn,
      iconBg: '#fff',
      date: 'Noviembre 2020 - Abril 2021',
      points: [
        'Ofrecí asistencia técnica eficiente para resolver rápidamente una amplia variedad de problemas de hardware y software, garantizando un funcionamiento sin problemas para los usuarios.',
        'Dirigí la facilitación de operaciones de copia de seguridad y recuperación de datos, protegiendo información crítica y minimizando el tiempo de inactividad en caso de incidentes inesperados.',
        'Actué como un recurso de primera línea, atendiendo rápidamente las consultas de los usuarios y brindando orientación paso a paso para resolver problemas de manera efectiva.',
        'Colaboré estrechamente con el equipo de TI para identificar problemas recurrentes, contribuyendo al desarrollo de soluciones integrales que mejoraron la confiabilidad del sistema en general.',
        'Tomé la iniciativa de desarrollar y mantener una base de conocimiento accesible, capacitando a los usuarios para resolver problemas menores de manera independiente y rápida.',
        'Realicé talleres y sesiones de capacitación informativas para los usuarios, brindándoles los conocimientos necesarios para abordar desafíos técnicos comunes con confianza.',
        'Mantuve registros detallados de los problemas informados y sus soluciones, facilitando un sistema de seguimiento eficiente para futuras referencias y mejoras.',
      ],
    },
    {
      title: 'Desarrollador Backend',
      company_name: 'Logex',
      icon: logex,
      iconBg: '#fff',
      date: 'Octubre 2018 - Enero 2019',
      points: [
        'Lideré la creación y mejora continua de aplicaciones web dinámicas mediante la utilización eficiente de Joomla.',
        'Orquesté una colaboración fluida dentro del equipo para diseñar soluciones innovadoras que satisfacen las necesidades de la empresa.',
        'Desempeñé un papel activo en la mejora del desarrollo frontend, fomentando un ambiente de aprendizaje compartido al brindar comentarios perspicaces a otros desarrolladores.',
        'Tomé la iniciativa de contribuir aún más según sea necesario para garantizar el éxito de los proyectos y el avance general del equipo.',
      ],
    },
    {
      title: 'Desarrollador Web',
      company_name: 'Tipti',
      icon: tipti,
      iconBg: '#fff',
      date: 'Abril 2018 - Octubre 2018',
      points: [
        'Desarrollé y mantuve aplicaciones web utilizando Angular 4, ionic, ionic 3 y otras tecnologías relacionadas.',
        'Trabajé en colaboración con grupos diversos, incluidos diseñadores, gerentes de productos y otros desarrolladores, para producir productos de alta calidad.',
        'Aseguré que el diseño se adapte bien y funcione sin problemas en diferentes dispositivos y navegadores web.',
        'Participé en evaluaciones de código y proporcioné sugerencias valiosas a otros desarrolladores para mejorar.',
      ],
    },
  ],

  projects: [
    {
      name: "React Dashboard",
      description:
        "Plataforma basada en la web que permite a los usuarios buscar, reservar y administrar información referente a clientes y usuarios. (Actualmente en desarrollo).",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: reactdashboard,
      source_code_link: "https://github.com/",
    },
    {
      name: "E-commerce",
      description:
        "Aplicación web de e-commerce. (Actualmente en desarrollo)",
      tags: [
        {
          name: "vuejs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: rogys,
      source_code_link: "https://github.com/",
    },
  ]
}

const {
  navLinks: enNavLinks,
  services: enServices,
  technologies: enTechnologies,
  experiences: enExperiences,
  testimonials: enTestimonials,
  projects: enProjects,
} = enConstants;

const {
  navLinks: esNavLinks,
  services: esServices,
  technologies: esTechnologies,
  experiences: esExperiences,
  testimonials: esTestimonials,
  projects: esProjects,
} = esConstants;

// Export constants based on current language
const navLinks = i18n.language === 'es' ? esNavLinks : enNavLinks;
const services = i18n.language === 'es' ? esServices : enServices;
const technologies = i18n.language === 'es' ? esTechnologies : enTechnologies;
const experiences = i18n.language === 'es' ? esExperiences : enExperiences;
const testimonials = i18n.language === 'es' ? esTestimonials : enTestimonials;
const projects = i18n.language === 'es' ? esProjects : enProjects;

const getExperiences = () => {
  return i18n.language === 'es' ? esExperiences : enExperiences;
}

const getServices = () => {
  return i18n.language === 'es' ? esServices : enServices;
}

const getProjects = () => {
  return i18n.language === "es" ? esProjects : enProjects;
}

const getNavLinks = () => {
  return i18n.language === 'es' ? esNavLinks : enNavLinks;
}

export { navLinks, services, technologies, experiences, testimonials, projects, getExperiences, getServices, getProjects, getNavLinks };