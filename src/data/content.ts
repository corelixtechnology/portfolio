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
  tagline: "FULL-STACK DEVELOPER • FREELANCER • OPEN TO WORK",
  eyebrow: "OPEN TO WORK (FULL-TIME / REMOTE) & FREELANCE PROJECTS",
  roleTitle: "Full-Stack Developer | Freelancer & Consultant",
  heroDescription: "Full-Stack Developer specializing in React.js, Node.js, Express, and MongoDB. Open to full-time engineering roles, remote positions, and freelance client projects worldwide.",
  aboutDescription: "I am a versatile Full-Stack Developer and Freelancer with 3+ years of experience engineering high-performance web systems, robust backend architectures, and pixel-perfect UIs. Currently open to full-time developer opportunities as well as bespoke freelance projects.",
  bio: "Full Stack Developer & Freelancer specializing in React.js, Node.js, Express.js, MongoDB, and modern web applications. Open to work.",
  availabilityStatus: "Open to Work (Full-Time / Remote) & Freelance Contracts",
  location: "Coimbatore, Tamil Nadu, India",
  email: "keerthivasanvbe@gmail.com",
  phone: "+91 93604 10038",
  displayPhone: "+91 93604 10038",
  whatsappUrl: "https://api.whatsapp.com/send?phone=+919360410038&text=Hi%20Keerthivasan,%20I'd%20like%20to%20discuss%20a%20freelance%20project.",
  instagramUrl: "https://www.instagram.com/x_kv_01",
  linkedinUrl: "https://www.linkedin.com/in/keerthivasanv07",
  githubUrl: "https://github.com/keerthivasanv01",
  githubHandle: "github.com/keerthivasanv01",
  web3formsKey: "4c413b26-4dfb-47a4-b10e-b2c86b8e45d8",
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
    image: "/assets/img/saiboutique.png",
    description: "A complete MERN stack e-commerce application with admin panel, shopping cart, and checkout flow.",
    techIcons: ["react", "node", "mongodb", "javascript"],
    liveUrl: "https://thesaiboutique.com",
  },
  {
    id: "easa-college",
    title: "EASA College of Engineering & Technology",
    category: "MERN Stack & Admissions Portal",
    badge: "MERN • High Traffic & SEO",
    image: "/assets/img/easa_college.jpg",
    description: "Architected and maintain the high-traffic MERN stack institutional portal. Implemented technical SEO and automated lead-generation funnels that directly boosted student admissions and handled high concurrent visitor traffic.",
    techIcons: ["react", "node", "mongodb", "express", "tailwind", "javascript"],
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
    image: "/assets/img/nova_app.png",
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
    image: "/assets/img/corelix_food.png",
    description: "Online food ordering and restaurant management platform with live order tracking, menu indexing, and instant checkout.",
    techIcons: ["react", "node", "mongodb", "express"],
    liveUrl: "https://food.corelixtechnology.in.net",
  }
];

export const EXPERIENCES_TIMELINE: ExperienceTimelineItem[] = [
  {
    period: "Jan 2026 - Present",
    role: "Full-Stack Web Developer",
    company: "EASA College of Engineering and Technology",
    description: "Architected and actively maintain the institutional MERN stack platform. Handled high-traffic concurrency, built automated admission lead-generation funnels, and spearheaded technical SEO strategies that directly boosted prospective student enrollments."
  },
  {
    period: "2023 - 2025",
    role: "Software Engineer (Gaming & Full-Stack)",
    company: "Prudent Gaming India",
    description: "Engineered cross-platform real-time gaming and casino/betting platforms using cutting-edge technologies. Developed core game logic, high-concurrency state management, real-time WebSocket communication, and secure financial/wallet transaction systems."
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
    title: "Full-Stack Web Apps & SaaS MVPs",
    description: "End-to-end custom web applications built with React.js, Node.js, Express & MongoDB. Fast, modular, and built to scale.",
    icon: "code",
    accentColor: "#38bdf8"
  },
  {
    title: "High-Converting UI/UX Design",
    description: "Modern, interactive Figma interfaces and design systems engineered for high user engagement and conversion rates.",
    icon: "palette",
    accentColor: "#a855f7"
  },
  {
    title: "Cross-Platform Mobile Apps",
    description: "Intuitive, high-performance mobile applications and PWAs for iOS and Android with smooth offline-first experiences.",
    icon: "smartphone",
    accentColor: "#818cf8"
  },
  {
    title: "E-Commerce & Payment Gateways",
    description: "Secure, high-converting online stores with custom checkout flows, inventory systems, Stripe/Razorpay integrations.",
    icon: "shopping-bag",
    accentColor: "#f472b6"
  },
  {
    title: "RESTful APIs & Database Systems",
    description: "Secure, highly optimized backend architectures, microservices, JWT authentication, and MongoDB/SQL database schemas.",
    icon: "database",
    accentColor: "#34d399"
  },
  {
    title: "Technical SEO & Speed Optimization",
    description: "Core Web Vitals optimization, 95+ PageSpeed scores, structured data, and keyword ranking for maximum client reach.",
    icon: "gauge",
    accentColor: "#38bdf8"
  }
];

export interface FreelanceStep {
  step: string;
  title: string;
  description: string;
}

export const FREELANCE_WORKFLOW: FreelanceStep[] = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "We align on your project goals, user requirements, timeline, and tech stack to create a clear roadmap."
  },
  {
    step: "02",
    title: "UI/UX & Prototyping",
    description: "Designing high-fidelity Figma mockups and interactive flows tailored to your brand identity."
  },
  {
    step: "03",
    title: "Full-Stack Development",
    description: "Writing clean, modular React & Node.js code with responsive layouts, secure APIs, and database modeling."
  },
  {
    step: "04",
    title: "Testing, SEO & Launch",
    description: "Comprehensive QA testing, performance audits, technical SEO indexing, and smooth production deployment."
  }
];

export const FREELANCE_BENEFITS = [
  { title: "Direct 1-on-1 Communication", desc: "No middle managers. You work directly with the developer building your product." },
  { title: "Blazing Fast Turnaround", desc: "Rapid sprints and milestone-driven delivery to get your MVP to market faster." },
  { title: "Clean, Scalable Architecture", desc: "Production-ready, documented code that grows effortlessly with your business." },
  { title: "Post-Launch Support & SEO", desc: "Complete handover, training, bug warranty, and built-in search engine optimization." }
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
    role: "Full-Stack Web Developer",
    company: "EASA College of Engineering and Technology",
    duration: "Jan 2026 – Present",
    description: "Developed and maintain the core MERN stack college web platform with high-traffic architecture. Implemented comprehensive technical SEO and digital lead-generation funnels that successfully drove online student admissions and inquiries.",
    technologies: ["React JS", "Node.js", "MongoDB", "Express.js", "SEO & Lead Gen", "Tailwind CSS", "RESTful APIs"]
  },
  {
    role: "Software Engineer (Gaming & Full-Stack)",
    company: "Prudent Gaming India",
    duration: "2023 – 2025",
    description: "Developed and scaled cross-platform online gaming and casino/betting applications with modern MERN and real-time architectures. Implemented core game engines, RNG mechanics, secure transaction/wallet integrations, and low-latency WebSocket multiplayer sync.",
    technologies: ["React JS", "Node.js", "WebSockets / Socket.io", "MongoDB", "Express.js", "Real-Time Game Logic", "Cross-Platform", "RESTful APIs"]
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
