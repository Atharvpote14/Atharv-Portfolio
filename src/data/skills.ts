import { Skill } from '@/types';

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend', level: 90 },
  { name: 'Next.js', category: 'frontend', level: 85 },
  { name: 'TypeScript', category: 'frontend', level: 80 },
  { name: 'Tailwind CSS', category: 'frontend', level: 85 },
  { name: 'JavaScript', category: 'frontend', level: 95 },
  { name: 'HTML5', category: 'frontend', level: 90 },
  { name: 'CSS3', category: 'frontend', level: 85 },
  { name: 'Vue.js', category: 'frontend', level: 70 },
  
  // Backend
  { name: 'Node.js', category: 'backend', level: 85 },
  { name: 'Express.js', category: 'backend', level: 80 },
  { name: 'MongoDB', category: 'backend', level: 75 },
  { name: 'PostgreSQL', category: 'backend', level: 70 },
  { name: 'Prisma', category: 'backend', level: 75 },
  { name: 'REST APIs', category: 'backend', level: 85 },
  { name: 'GraphQL', category: 'backend', level: 65 },
  
  // Tools
  { name: 'Git', category: 'tools', level: 90 },
  { name: 'Docker', category: 'tools', level: 70 },
  { name: 'AWS', category: 'tools', level: 75 },
  { name: 'Vercel', category: 'tools', level: 85 },
  { name: 'Figma', category: 'tools', level: 80 },
  { name: 'VS Code', category: 'tools', level: 95 },
  
  // Design
  { name: 'UI/UX Design', category: 'design', level: 75 },
  { name: 'Responsive Design', category: 'design', level: 90 },
  { name: 'Framer Motion', category: 'design', level: 80 },
  { name: 'Adobe XD', category: 'design', level: 70 }
];

export const skillCategories = [
  { name: 'All', value: 'all' },
  { name: 'Frontend', value: 'frontend' },
  { name: 'Backend', value: 'backend' },
  { name: 'Tools', value: 'tools' },
  { name: 'Design', value: 'design' }
];
