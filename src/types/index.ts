export interface Project {
  id: string;
  title: string;
  description: string;
  problemStatement?: string;
  keyFeatures: string[];
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
  category: string;
  caseStudy?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'design';
  level: number;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  current?: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
