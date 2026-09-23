import { Project, JournalEntry, ExplorationItem, StatItem, ExperienceItem, EducationItem, SkillCategory } from '../types';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  image: string;
  description: string;
  techIcons: string[];
  liveUrl?: string;
  githubUrl?: string;
  apkUrl?: string;
  isApk?: boolean;
}

export interface SkillProgress {
  name: string;
  percentage: number;
}

export interface PedestalSkill {
  name: string;
  icon: string;
  color: string;
  glowColor: string;
  category: 'frontend' | 'backend' | 'design' | 'testing';
}

export interface ExperienceTimelineItem {
  period: string;
  role: string;
  company: string;
  description: string;
}

export interface ServiceCardItem {
  title: string;
  description: string;
  icon: string;
  accentColor: string;
}

export const USER_INFO = {
  name: "KEERTHIVASAN V",
  firstName: "Keerthivasan",
  lastName: "V",
  initials: "KV",
  tagline: "CRAFTING SCALABLE & HIGH-PERFORMANCE WEB EXPERIENCES",
  eyebrow: "AVAILABLE FOR HIRE // FULL-STACK",
  roleTitle: "Full Stack Developer",
  heroDescription: "I build exceptional digital experiences with modern technologies. Passionate about creating efficient, scalable and user-friendly web applications.",
  aboutDescription: "I am a Full Stack Developer with 3+ years of experience in building modern web applications. I specialize in React.js, Node.js, Express.js and MongoDB. I love turning ideas into real products.",
  bio: "Full Stack Developer specializing in React.js, Node.js, Express.js, MongoDB, and modern web applications.",
  location: "Coimbatore, Tamil Nadu, India",
  email: "keerthivasanvbe@gmail.com",
  phone: "+91 93604 10038",
  displayPhone: "+91 93604 10038",
  whatsappUrl: "https://api.whatsapp.com/send?phone=+919360410038&text=Hi%20Keerthivasan,%20I'd%20like%20to%20discuss%20a%20project.",
  instagramUrl: "https://www.instagram.com/x_kv_01",
  linkedinUrl: "https://www.linkedin.com/in/keerthivasanv07",
  githubUrl: "https://github.com/keerthivasanv01",
  githubHandle: "github.com/keerthivasanv01",
  web3formsKey: "9a514b20-9293-4247-8300-c28760880d06",
  avatar: "/assets/img/hero.png",
  aboutImage: "/assets/img/pp2.jpg",
  realPhoto: "/assets/img/pp2.jpg",
  hero3dImage: "/assets/img/hero_3d.jpg",
  envelope3dImage: "/assets/img/envelope_3d.jpg",
  resumeUrl: "/Keerthivasan_V_Resume.pdf",
};

export const HLS_STREAM_URL = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

export const ABOUT_STATS = [
  { value: "3+", label: "Years\nExperience" },
  { value: "20+", label: "Projects\nCompleted" },
  { value: "15+", label: "Happy\nClients" },
];

export const SKILL_PROGRESS_LIST: SkillProgress[] = [
  { name: "React.js", percentage: 90 },
  { name: "Node.js", percentage: 85 },
  { name: "MongoDB", percentage: 80 },
  { name: "JavaScript", percentage: 90 },
  { name: "Express.js", percentage: 85 },
];

export const PEDESTAL_SKILLS: PedestalSkill[] = [
  // 1. Frontend Development (6 skills)
  {
    name: "React.js",
    icon: "react",
    color: "#61DAFB",
    glowColor: "rgba(97, 218, 251, 0.55)",
    category: "frontend",
  },
  {
    name: "JavaScript",
    icon: "javascript",
    color: "#F7DF1E",
    glowColor: "rgba(247, 223, 30, 0.55)",
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwind",
    color: "#38BDF8",
    glowColor: "rgba(56, 189, 248, 0.55)",
    category: "frontend",
  },
  {
    name: "Bootstrap",
    icon: "bootstrap",
    color: "#7952B3",
    glowColor: "rgba(121, 82, 179, 0.55)",
    category: "frontend",
  },
  {
    name: "HTML5 & CSS3",
    icon: "html5 & css3",
    color: "#E34F26",
    glowColor: "rgba(227, 79, 38, 0.45)",
    category: "frontend",
  },
  {
    name: "Git & GitHub",
    icon: "git & github",
    color: "#F05032",
    glowColor: "rgba(240, 80, 50, 0.45)",
    category: "frontend",
  },

  // 2. Backend Development (6 skills)
  {
    name: "Node.js",
    icon: "node",
    color: "#68A063",
    glowColor: "rgba(104, 160, 99, 0.55)",
    category: "backend",
  },
  {
    name: "Express.js",
    icon: "express",
    color: "#FFFFFF",
    glowColor: "rgba(255, 255, 255, 0.45)",
    category: "backend",
  },
  {
    name: "MongoDB",
    icon: "mongodb",
    color: "#47A248",
    glowColor: "rgba(71, 162, 72, 0.55)",
    category: "backend",
  },
  {
    name: "RESTful APIs",
    icon: "restful apis",
    color: "#38BDF8",
    glowColor: "rgba(56, 189, 248, 0.45)",
    category: "backend",
  },
  {
    name: "MySQL",
    icon: "mysql",
    color: "#00758F",
    glowColor: "rgba(0, 117, 143, 0.45)",
    category: "backend",
  },
  {
    name: "TypeScript",
    icon: "javascript",
    color: "#3178C6",
    glowColor: "rgba(49, 120, 198, 0.55)",
    category: "backend",
  },

  // 3. UI/UX Design (6 skills)
  {
    name: "Figma",
    icon: "figma",
    color: "#F24E1E",
    glowColor: "rgba(242, 78, 30, 0.55)",
    category: "design",
  },
  {
    name: "Adobe Photoshop",
    icon: "adobe photoshop",
    color: "#31A8FF",
    glowColor: "rgba(49, 168, 255, 0.45)",
    category: "design",
  },
  {
    name: "Wireframing & Prototyping",
    icon: "wireframing & prototyping",
    color: "#A855F7",
    glowColor: "rgba(168, 85, 247, 0.45)",
    category: "design",
  },
  {
    name: "Adobe Illustrator",
    icon: "adobe illustrator",
    color: "#FF9A00",
    glowColor: "rgba(255, 154, 0, 0.45)",
    category: "design",
  },
  {
    name: "WIX Studio",
    icon: "wix studio",
    color: "#EC4899",
    glowColor: "rgba(236, 72, 153, 0.45)",
    category: "design",
  },
  {
    name: "Canva",
    icon: "canva",
    color: "#00C4CC",
    glowColor: "rgba(0, 196, 204, 0.45)",
    category: "design",
  },

  // 4. Testing & Architecture (6 skills)
  {
    name: "Unit Testing",
    icon: "unit testing",
    color: "#10B981",
    glowColor: "rgba(16, 185, 129, 0.45)",
    category: "testing",
  },
  {
    name: "Manual QA",
    icon: "manual qa",
    color: "#06B6D4",
    glowColor: "rgba(6, 182, 212, 0.45)",
    category: "testing",
  },
  {
    name: "API Testing (Postman)",
    icon: "api testing (postman)",
    color: "#FF6C37",
    glowColor: "rgba(255, 108, 55, 0.45)",
    category: "testing",
  },
  {
    name: "Responsive Architecture",
    icon: "responsive architecture",
    color: "#8B5CF6",
    glowColor: "rgba(139, 92, 246, 0.45)",
    category: "testing",
  },
  {
    name: "Performance Optimization",
    icon: "performance optimization",
    color: "#F59E0B",
    glowColor: "rgba(245, 158, 11, 0.45)",
    category: "testing",
  },
  {
    name: "Database Normalization",
    icon: "database normalization",
    color: "#10B981",
    glowColor: "rgba(16, 185, 129, 0.45)",
    category: "testing",
  },
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "ecommerce-web",
    title: "Sai boutique  E-Commerce Web App",
    category: "Full Stack",
    badge: "Full Stack",
    image: "/assets/img/image.png",
    description: "A complete MERN stack e-commerce application with admin panel, shopping cart, and checkout flow.",
    techIcons: ["react", "node", "mongodb", "javascript"],
    liveUrl: "https://thesaiboutique.com",
  },
  {
    id: "easa-college",
    title: "EASA College Website",
    category: "Institutional Portal",
    badge: "React",
    image: "/assets/img/easa_college.jpg",
    description: "Modern and responsive college website with all essential academic features, department catalogs, and fast UI.",
    techIcons: ["react", "tailwind", "javascript","Node","mongodb"],
    liveUrl: "https://easacollege.com",
  },
  {
    id: "travel-booking",
    title: "Travel Booking Platform",
    category: "Full Stack Web App",
    badge: "HTML & CSS",
    image: "/assets/img/travel_booking.jpg",
    description: "Travel booking platform with payment integration, tour discovery, and responsive customer management dashboard.",
    techIcons: ["HTML & CSS","CSS","Bootstrap","javascript"],
    liveUrl: "https://keerthivasanv01.github.io/travel-website/",
  },
  {
    id: "movie-rating-app",
    title: "Movie Rating App",
    category: "Frontend & API",
    badge: "React API",
    image: "/assets/img/movie_app.jpg",
    description: "Search movies, watch trailers, explore ratings, and manage personal watchlists using high-performance APIs.",
    techIcons: ["react", "javascript", "tailwind"],
    liveUrl: "https://keerthivasanv01.github.io/react-movie-apps/",
  },
  {
    id: "corelix-technology",
    title: "Corelix Technology",
    category: "Full Stack & Agency",
    badge: "Agency Platform",
    image: "/assets/img/work4.jpg",
    description: "Official technology and software agency website showcasing cloud solutions, modern web systems, and client services.",
    techIcons: ["react", "node", "tailwind", "javascript"],
    liveUrl: "https://corelixtechnology.in.net",
  },
  {
    id: "nova-apk",
    title: "Nova Electrical Control App",
    category: "Mobile & Smart Home",
    badge: "Android App / APK",
    image: "/assets/img/image copy 2.png",
    description: "Smart home electrical control mobile application for house automation, lighting control, and appliance switching over IoT.",
    techIcons: ["react", "node", "javascript", "mongodb"],
    liveUrl: "https://nova.corelixtechnology.in.net",
    apkUrl: "/nova.apk",
    isApk: true
  },
  {
    id: "food-corelix",
    title: "Corelix Food Platform",
    category: "Full Stack Web App",
    badge: "Food Ordering",
    image: "/assets/img/image copy.png",
    description: "Online food ordering and restaurant management platform with live order tracking, menu indexing, and instant checkout.",
    techIcons: ["react", "node", "mongodb", "express"],
    liveUrl: "https://food.corelixtechnology.in.net",
  }
];

export const EXPERIENCES_TIMELINE: ExperienceTimelineItem[] = [
  {
    period: "Jan 2026 - Present",
    role: "Web Developer",
    company: "EASA College of Engineering and Technology",
    description: "Developing and maintaining responsive college web portals, student information systems, and academic department web apps."
  },
  {
    period: "2023 - 2025",
    role: "Software Engineer",
    company: "Prudent Gaming India",
    description: "Worked on scalable web applications using MERN stack and modern technologies, integrating robust APIs and cross-platform services."
  },
  {
    period: "2022 - 2023",
    role: "Web Developer Intern",
    company: "TechnoHacks EduTech",
    description: "Developed and maintained responsive websites and collaborated with the design team on UI components."
  },
  {
    period: "2021 - 2022",
    role: "Frontend Developer Intern",
    company: "CodeAlpha",
    description: "Built responsive UIs and learned modern frontend development with JavaScript, React and CSS architecture."
  }
];

export const SERVICES_LIST: ServiceCardItem[] = [
  {
    title: "Web Development",
    description: "Custom websites and web applications with modern architecture.",
    icon: "code",
    accentColor: "#3B82F6"
  },
  {
    title: "App Development",
    description: "Cross-platform mobile applications for iOS & Android.",
    icon: "smartphone",
    accentColor: "#8B5CF6"
  },
  {
    title: "UI/UX Design",
    description: "Beautiful and user-friendly interfaces crafted in Figma.",
    icon: "palette",
    accentColor: "#A855F7"
  },
  {
    title: "E-Commerce",
    description: "Secure and scalable online stores with checkout flows.",
    icon: "shopping-bag",
    accentColor: "#EC4899"
  },
  {
    title: "API Development",
    description: "RESTful APIs and scalable backend microservices.",
    icon: "database",
    accentColor: "#10B981"
  },
  {
    title: "SEO Optimization",
    description: "Improve your website ranking, speeds and search performance.",
    icon: "gauge",
    accentColor: "#06B6D4"
  }
];

export const PROJECTS: Project[] = FEATURED_PROJECTS.map((p) => ({
  id: p.id,
  title: p.title,
  category: p.category,
  year: "2024",
  image: p.image,
  colSpan: "md:col-span-6",
  aspect: "aspect-[16/10]",
  description: p.description,
  tags: p.techIcons,
  liveUrl: p.liveUrl,
  githubUrl: p.githubUrl
}));

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
  }
];

export const JOURNAL_ENTRIES: JournalEntry[] = [
  {
    id: "journal-1",
    title: "Architecting scalable React & Node.js systems for modern web apps",
    readTime: "4 min read",
    date: "JAN 2026",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
    category: "Architecture",
    summary: "Key lessons learned from orchestrating REST APIs, microservices, and React frontends."
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
    value: "20+",
    numberValue: 20,
    suffix: "+",
    label: "Projects Completed",
    description: "From production portals to open-source tools and design systems"
  },
  {
    value: "15+",
    numberValue: 15,
    suffix: "+",
    label: "Happy Clients",
    description: "Committed to delivering clean code, exceptional UX, and on-time results"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Web Developer",
    company: "EASA College of Engineering and Technology",
    duration: "Jan 2026 – Present",
    description: "Developing and maintaining responsive college web portals, academic department systems, and student management applications.",
    technologies: ["React JS", "Node.js", "Tailwind CSS", "JavaScript", "RESTful APIs"]
  },
  {
    role: "Software Engineer",
    company: "Prudent Gaming India",
    duration: "2023 – 2025",
    description: "Worked on scalable web applications using MERN stack and modern technologies, integrating robust APIs and cross-platform services.",
    technologies: ["React JS", "Node.js", "MongoDB", "Express.js", "RESTful APIs"]
  },
  {
    role: "Web Developer Intern",
    company: "TechnoHacks EduTech",
    duration: "2022 – 2023",
    description: "Developed and maintained websites and collaborated with the design team.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React JS"]
  },
  {
    role: "Frontend Developer Intern",
    company: "CodeAlpha",
    duration: "2021 – 2022",
    description: "Built responsive UIs and learned modern frontend development.",
    technologies: ["JavaScript", "CSS3", "Responsive Design"]
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
      { name: "TypeScript", level: "Advanced" },
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
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "MongoDB", level: "Advanced" },
      { name: "MySQL", level: "Advanced" },
      { name: "RESTful APIs", level: "Advanced" },
      { name: "API Authentication & JWT", level: "Advanced" }
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
  { name: "GitHub", url: "https://github.com/keerthivasanv01", icon: "github", handle: "github.com/keerthivasanv01" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/keerthivasanv07", icon: "linkedin", handle: "in/keerthivasanv07" },
  { name: "Instagram", url: "https://www.instagram.com/x_kv_01", icon: "instagram", handle: "@x_kv_01" },
  { name: "Email", url: "mailto:keerthivasanvbe@gmail.com", icon: "mail", handle: "keerthivasanvbe@gmail.com" }
];
