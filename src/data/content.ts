import { Project, JournalEntry, ExplorationItem, StatItem, ExperienceItem, EducationItem, SkillCategory } from '../types';

export const USER_INFO = {
  name: "Keerthivasan V",
  firstName: "Keerthivasan",
  lastName: "V",
  initials: "KV",
  tagline: "CRAFTING SCALABLE & HIGH-PERFORMANCE WEB EXPERIENCES",
  eyebrow: "AVAILABLE FOR HIRE // FULL-STACK",
  location: "India",
  email: "keerthivasanvbe@gmail.com",
  phone: "+91 93604 10038",
  whatsappUrl: "https://api.whatsapp.com/send?phone=+919360410038&text=Hi%20Keerthivasan,%20I'd%20like%20to%20discuss%20a%20project.",
  instagramUrl: "https://www.instagram.com/x_kv_01",
  linkedinUrl: "https://www.linkedin.com/in/keerthivasanv07",
  githubUrl: "https://github.com/keerthivasanv01",
  web3formsKey: "9a514b20-9293-4247-8300-c28760880d06",
  bio: "Full-Stack Developer & UI/UX Designer crafting modern web applications, high-performance architecture, and immersive digital experiences.",
  avatar: "/assets/img/hero.png",
  aboutImage: "/assets/img/pp2.jpg",
  resumeUrl: "/Keerthivasan_V_Resume.pdf"
};

export const HERO_ROLES = ["Full-Stack Dev", "UI/UX Designer", "Software Engineer", "React Specialist"];

export const HLS_STREAM_URL = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

export const PROJECTS: Project[] = [
  {
    id: "hospital-portal",
    title: "Hospital Portal",
    category: "React & Healthcare Management",
    year: "2025",
    image: "/assets/img/hospital.jpeg",
    colSpan: "md:col-span-7",
    aspect: "aspect-[16/10] md:aspect-[16/11]",
    description: "Healthcare management and hospital information portal with appointment booking, patient workflow, and responsive architecture.",
    tags: ["React JS", "Node.js", "REST APIs", "Tailwind CSS"],
    liveUrl: "https://lucknowheritagehospital.com"
  },
  {
    id: "movie-explorer",
    title: "Movie Explorer App",
    category: "React & REST API",
    year: "2024",
    image: "/assets/img/work5.webp",
    colSpan: "md:col-span-5",
    aspect: "aspect-[4/3] md:aspect-[16/11]",
    description: "Interactive cinema discovery app with real-time movie ratings, search indexing, genre filtering, and responsive card views.",
    tags: ["React JS", "TMDB API", "CSS Grid", "Axios"],
    liveUrl: "https://keerthivasanv01.github.io/react-movie-apps"
  },
  {
    id: "travel-website",
    title: "Travel Website",
    category: "Interactive Tourism Platform",
    year: "2024",
    image: "/assets/img/work1.webp",
    colSpan: "md:col-span-5",
    aspect: "aspect-[4/3] md:aspect-[16/11]",
    description: "Modern tourism landing page with destination showcases, interactive trip planners, booking forms, and fluid scroll animations.",
    tags: ["HTML5", "CSS3", "JavaScript", "UI Design"],
    liveUrl: "https://keerthivasanv01.github.io/travel-website"
  },
  {
    id: "ecommerce-store",
    title: "E-Commerce Store",
    category: "Storefront & Cart Engine",
    year: "2024",
    image: "/assets/img/work2.jpg",
    colSpan: "md:col-span-7",
    aspect: "aspect-[16/10] md:aspect-[16/11]",
    description: "Comprehensive product catalog with shopping cart management, product filtering, responsive checkout UI, and smooth animations.",
    tags: ["Full-Stack", "JavaScript", "Responsive UI", "CSS3"],
    liveUrl: "https://keerthivasanv01.github.io/E-Commerce"
  }
];

export const EXPLORATIONS: ExplorationItem[] = [
  {
    id: "spotify-redesign",
    title: "Spotify App Redesign",
    category: "Figma UI/UX Concept",
    image: "/assets/img/work4.jpg",
    rotation: -4,
    offsetY: -30,
    liveUrl: "https://www.figma.com/file/ATDAvmzijsrwn2QTO8Sblb/spotify?type=design&node-id=0%3A1&mode=design&t=7cfPo77T5xsY2YNs-1"
  },
  {
    id: "linkedin-clone",
    title: "LinkedIn UI Clone",
    category: "Social Network Web App",
    image: "/assets/img/work3.jpg",
    rotation: 3,
    offsetY: 60,
    liveUrl: "https://keerthivasanv01.github.io/linkedin-clone"
  },
  {
    id: "hospital-system",
    title: "Hospital Web System",
    category: "Production Web Platform",
    image: "/assets/img/hospital.jpeg",
    rotation: -2,
    offsetY: -40,
    liveUrl: "https://lucknowheritagehospital.com"
  },
  {
    id: "cinema-feed",
    title: "Movie Review Engine",
    category: "Dynamic Web Application",
    image: "/assets/img/work5.webp",
    rotation: 5,
    offsetY: 40,
    liveUrl: "https://keerthivasanv01.github.io/react-movie-apps"
  },
  {
    id: "travel-experience",
    title: "Global Travel Odyssey",
    category: "Interactive Landing Page",
    image: "/assets/img/work1.webp",
    rotation: -3,
    offsetY: -20,
    liveUrl: "https://keerthivasanv01.github.io/travel-website"
  },
  {
    id: "shop-catalog",
    title: "Modern E-Store UI",
    category: "Commerce Architecture",
    image: "/assets/img/work2.jpg",
    rotation: 2,
    offsetY: 50,
    liveUrl: "https://keerthivasanv01.github.io/E-Commerce"
  }
];

export const JOURNAL_ENTRIES: JournalEntry[] = [
  {
    id: "journal-1",
    title: "Architecting scalable React & Spring Boot systems for modern web apps",
    readTime: "4 min read",
    date: "JAN 2026",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
    category: "Architecture",
    summary: "Key lessons learned from orchestrating REST APIs, Java Spring Boot microservices, and React frontends."
  },
  {
    id: "journal-2",
    title: "The art of dark mode aesthetics and high-contrast UI design systems",
    readTime: "5 min read",
    date: "DEC 2025",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop",
    category: "UI/UX Design",
    summary: "Designing tactile user interfaces that feel premium, legible, and visually balanced in low-light environments."
  },
  {
    id: "journal-3",
    title: "From Figma prototypes to pixel-perfect production code",
    readTime: "4 min read",
    date: "NOV 2025",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
    category: "Workflow",
    summary: "Bridging the gap between design tokens, auto-layout in Figma, and modern Tailwind CSS implementations."
  },
  {
    id: "journal-4",
    title: "Database optimization and fast query indexing with MySQL & Hibernate",
    readTime: "6 min read",
    date: "OCT 2025",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
    category: "Database",
    summary: "Best practices for schema design, ORM relationships, and caching strategies for responsive web performance."
  }
];

export const STATS: StatItem[] = [
  {
    value: "3+",
    numberValue: 3,
    suffix: "+",
    label: "Years Experience",
    description: "Developing robust full-stack web applications and interactive UIs"
  },
  {
    value: "10+",
    numberValue: 10,
    suffix: "+",
    label: "Projects Built",
    description: "From production portals to open-source tools and design systems"
  },
  {
    value: "100%",
    numberValue: 100,
    suffix: "%",
    label: "Client Trust",
    description: "Committed to delivering clean code, exceptional UX, and on-time results"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Web Developer",
    company: "EASA College of Engineering and Technology",
    duration: "Jan 2026 – Present",
    description: "Boosted organic traffic by 60% and user engagement by 100% through responsive design and semantic SEO. Slashed page load times by 70% via image optimization, code-splitting, and REST API integration with 99.9% reliability.",
    technologies: ["React JS", "JavaScript", "RESTful APIs", "SEO", "UI/UX Design"]
  },
  {
    role: "Software Engineer",
    company: "Prudent Gaming India",
    duration: "Jul 2023 – Oct 2025",
    description: "Built responsive web apps using React.js and cross-platform mobile apps using Flutter (Android/iOS). Seamlessly integrated backend APIs for real-time data sync and collaborated in Agile sprints ensuring 100% on-time delivery.",
    technologies: ["React JS", "Flutter", "Node.js", "RESTful APIs", "SQL", "Tailwind CSS"]
  }
];

export const EDUCATIONS: EducationItem[] = [
  {
    degree: "B.E (EEE) - CGPA: 8.0",
    institution: "NSN College Of Engineering And Technology - Karur",
    year: "2019 — 2023",
    details: "Strong engineering foundation in analytical problem solving, systems architecture, and web development technologies."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: "code",
    skills: [
      { name: "React JS", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "HTML5 & CSS3", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Bootstrap", level: "Advanced" },
      { name: "Git & GitHub", level: "Advanced" }
    ]
  },
  {
    title: "Backend Development",
    icon: "server",
    skills: [
      { name: "Java & J2EE", level: "Advanced" },
      { name: "Spring Boot", level: "Intermediate" },
      { name: "Hibernate ORM", level: "Intermediate" },
      { name: "MySQL", level: "Advanced" },
      { name: "RESTful APIs", level: "Advanced" },
      { name: "Python", level: "Intermediate" }
    ]
  },
  {
    title: "UI/UX Design",
    icon: "palette",
    skills: [
      { name: "Figma", level: "Advanced" },
      { name: "Adobe Photoshop", level: "Advanced" },
      { name: "Wireframing & Prototyping", level: "Advanced" },
      { name: "Adobe Illustrator", level: "Intermediate" },
      { name: "WIX Studio", level: "Advanced" },
      { name: "Canva", level: "Advanced" }
    ]
  },
  {
    title: "Testing & Architecture",
    icon: "shield",
    skills: [
      { name: "Unit Testing", level: "Advanced" },
      { name: "Manual QA", level: "Advanced" },
      { name: "API Testing (Postman)", level: "Advanced" },
      { name: "Responsive Architecture", level: "Advanced" },
      { name: "Performance Optimization", level: "Advanced" },
      { name: "Database Normalization", level: "Advanced" }
    ]
  }
];

export const SOCIAL_LINKS = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/keerthivasanv07", handle: "in/keerthivasanv07" },
  { name: "GitHub", url: "https://github.com/keerthivasanv01", handle: "keerthivasanv01" },
  { name: "WhatsApp", url: "https://api.whatsapp.com/send?phone=+919360410038&text=Hi%20Keerthivasan!", handle: "+91 93604 10038" },
  { name: "Instagram", url: "https://www.instagram.com/x_kv_01", handle: "@x_kv_01" },
  { name: "Email", url: "mailto:keerthivasanvbe@gmail.com", handle: "keerthivasanvbe@gmail.com" }
];
