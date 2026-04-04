import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Brand Advertisement',
    description: 'A stunning, ultra-premium single-page scrollytelling website for Smoodh by Atharv Agro. Built with Next.js 14, featuring cinematic scroll-driven animations and a premium user experience.',
    image: '/images/brand advertisement.png',
    techStack: ['Next.js', 'React', 'Framer Motion', 'Tailwind CSS'],
    liveUrl: 'https://brandadvertisement.netlify.app/',
    githubUrl: 'https://github.com/Atharvpote14/Brand-Advertisement-Website',
    featured: true,
    category: 'Full Stack',
    caseStudy: 'Built a cinematic website with advanced scroll animations and premium user experience.'
  },
  {
    id: '2',
    title: '3D WebGL Experience',
    description: 'A premium editorial-style website that embodies the essence of a digital fashion magazine through typography dominance, layout precision, and cinematic scroll experiences.',
    image: '/images/nori atelier.png',
    techStack: ['Next.js', 'React', 'Framer Motion', 'CSS3'],
    liveUrl: 'https://3dwebgl.vercel.app/',
    githubUrl: 'https://github.com/Atharvpote14/3D-WebGL',
    featured: true,
    category: 'Frontend',
    caseStudy: 'Designed a premium editorial website with cinematic typography and layout.'
  },
  {
    id: '3',
    title: 'ShopSphere 2.0',
    description: 'A premium global shopping destination where you can explore a wide range of products across multiple categories, find exclusive deals, and enjoy fast delivery with a smooth shopping experience.',
    image: '/images/shop sphere.png',
    techStack: ['Next.js', 'React', 'Stripe', 'Tailwind CSS', 'PostgreSQL'],
    liveUrl: 'https://atharvpote14.github.io/ShopSphere2.O/',
    githubUrl: 'https://github.com/Atharvpote14/ShopSphere2.O',
    featured: true,
    category: 'Full Stack',
    caseStudy: 'Built a comprehensive e-commerce platform with modern shopping features.'
  },
  {
    id: '5',
    title: 'CineBook',
    description: 'A comprehensive movie booking platform with seat selection, showtime management, and seamless checkout experience for cinema enthusiasts.',
    image: '/images/cine book.png',
    techStack: ['Next.js', 'React', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: 'https://atharvpote14.github.io/CineBook/',
    githubUrl: 'https://github.com/Atharvpote14/CineBook',
    featured: true,
    category: 'Full Stack',
    caseStudy: 'Developed a complete cinema booking system with seat selection and payments.'
  },
  {
    id: '6',
    title: 'Car Hub 2.0',
    description: 'Modern car dealership website showcasing premium vehicles with clean UI and responsive design.',
    image: '/images/car hub 2.o.png',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'JavaScript'],
    liveUrl: 'https://atharvpote14.github.io/CAR-HUB-2.O/',
    githubUrl: 'https://github.com/Atharvpote14/CAR-HUB-2.O',
    featured: true,
    category: 'Frontend',
    caseStudy: 'Created a modern car dealership website with responsive design.'
  },
  {
    id: '7',
    title: 'Typing Master',
    description: 'Interactive typing practice website designed to improve typing speed and accuracy with real-time feedback.',
    image: '/images/Typemaster.png',
    techStack: ['Next.js', 'React', 'JavaScript', 'Tailwind CSS'],
    liveUrl: 'https://typemaster-by-atharv.netlify.app/',
    githubUrl: 'https://github.com/Atharvpote14/Type_Mater',
    featured: false,
    category: 'Frontend',
    caseStudy: 'Built an interactive typing practice tool with real-time performance metrics.'
  },
  {
    id: '8',
    title: 'Password Strength Checker',
    description: 'Interactive password analyzer providing real-time security feedback with visual indicators and improvement suggestions.',
    image: '/images/PasswordStrengthChecker.png',
    techStack: ['Next.js', 'React', 'JavaScript', 'Tailwind CSS'],
    liveUrl: 'https://passwordstrengthchecker-byatharv.netlify.app/',
    githubUrl: 'https://github.com/Atharvpote14/Password-Strength-Checker',
    featured: false,
    category: 'Frontend',
    caseStudy: 'Created a security tool for password strength analysis and recommendations.'
  }
];

export const categories = [
  { value: 'all', name: 'All Projects' },
  { value: 'Full Stack', name: 'Full Stack' },
  { value: 'Frontend', name: 'Frontend' },
  { value: 'Backend', name: 'Backend' }
];
