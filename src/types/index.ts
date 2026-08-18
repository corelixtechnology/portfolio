export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  colSpan: string;
  aspect: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface JournalEntry {
  id: string;
  title: string;
  readTime: string;
  date: string;
  image: string;
  category: string;
  link?: string;
  summary?: string;
}

export interface ExplorationItem {
  id: string;
  title: string;
  image: string;
  category: string;
  rotation: number;
  offsetY: number;
  liveUrl?: string;
}

export interface StatItem {
  value: string;
  numberValue: number;
  suffix: string;
  label: string;
  description: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  details?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: string }[];
}
