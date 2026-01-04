/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "Next-js Portfolio",
    nameEs: "Next-js Portfolio",
    description: "Personal portfolio with Next.js",
    descriptionEs: "Portfolio personal con Next.js",
    date: "2025-12-26",
    demoLink: "https://fernando-ruiz-portfolio.vercel.app/",
  },
  {
    id: 2,
    name: "Chaskys",
    nameEs: "Chaskys",
    description: "Delivery app using React",
    descriptionEs: "Delivery app con React",
    date: "2025-12-11",
    demoLink: "https://chaskys.vercel.app/",
  },
  {
    id: 3,
    name: "Trattoria Bella",
    nameEs: "Trattoria Bella",
    description: "Frontend of a restaurant using React",
    descriptionEs: "Frontend de un restaurante con React",
    date: "2025-11-06",
    demoLink: "https://trattoria-orcin.vercel.app/",
  },
  {
    id: 4,
    name: "Library management",
    nameEs: "Gestión Biblioteca",
    description: "Frontend and backend using Node.js",
    descriptionEs: "Frontend y backend con Node.js",
    date: "2025-11-13",
    demoLink: "https://github.com/fernandoruiz2016/Gestion-biblioteca",
  }
];

export const BtnList = [
  { label: "Home", labelEs: "Inicio", link: "/", icon: "home", newTab: false },
  { label: "About", labelEs: "Sobre mí", link: "/about", linkEs: "/about", icon: "about", newTab: false },
  { label: "Projects", labelEs: "Projectos", link: "/projects", linkEs: "/projects", icon: "projects", newTab: false },
  { label: "Contact", labelEs: "Contacto", link: "/contact", linkEs: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    labelEs: "Github",
    link: "https://github.com/fernandoruiz2016",
    linkEs: "https://github.com/fernandoruiz2016",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    labelEs: "LinkedIn",
    link: "https://www.linkedin.com/in/fernando-ruiz-yamamoto/",
    linkEs: "https://www.linkedin.com/in/fernando-ruiz-yamamoto/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Resume",
    labelEs: "CV",
    link: "/resume.pdf",
    linkEs: "/resumeEs.pdf",
    icon: "resume",
    newTab: true,
  },
];


