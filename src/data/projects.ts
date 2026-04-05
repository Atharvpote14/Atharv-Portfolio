import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Brand Advertisement',
    description: 'A cinematic single-page scrollytelling website for Smoodh by Atharv Agro that increased user engagement by 40% through immersive scroll-driven animations.',
    problemStatement: 'Client needed a premium website to showcase their brand that would stand out from competitors and create memorable user experience.',
    keyFeatures: ['Cinematic scroll-driven animations', 'Premium visual storytelling', 'Mobile-responsive design', 'Optimized performance (95+ Lighthouse score)'],
    image: '/images/brand advertisement.png',
    techStack: ['Next.js 14', 'React', 'Framer Motion', 'Tailwind CSS'],
    liveUrl: 'https://brandadvertisement.netlify.app/',
    githubUrl: 'https://github.com/Atharvpote14/Brand-Advertisement-Website',
    featured: true,
    category: 'Full Stack',
    caseStudy: 'Built a cinematic website with advanced scroll animations and premium user experience.'
  },
  {
    id: '2',
    title: '3D WebGL Experience',
    description: 'A premium editorial-style website demonstrating advanced 3D WebGL capabilities and cinematic scroll experiences for a digital fashion magazine concept.',
    problemStatement: 'Fashion brands need immersive digital experiences that capture attention and showcase products in innovative ways beyond traditional websites.',
    keyFeatures: ['3D WebGL visualizations', 'Typography-first design', 'Cinematic scroll animations', 'Interactive product showcases'],
    image: '/images/nori atelier.png',
    techStack: ['Next.js', 'React', 'Framer Motion', 'CSS3', 'WebGL'],
    liveUrl: 'https://3dwebgl.vercel.app/',
    githubUrl: 'https://github.com/Atharvpote14/3D-WebGL',
    featured: true,
    category: 'Frontend',
    caseStudy: 'Designed a premium editorial website with cinematic typography and layout.'
  },
  {
    id: '3',
    title: 'ShopSphere 2.0',
    description: 'Full-stack e-commerce platform handling 1000+ products with secure Stripe payments, cart management, and order tracking.',
    problemStatement: 'Small businesses need affordable, scalable e-commerce solutions with professional payment processing and inventory management.',
    keyFeatures: ['Stripe payment integration', 'Shopping cart with persistence', 'Order tracking system', 'Responsive product catalog', 'Secure checkout flow'],
    image: '/images/shop sphere.png',
    techStack: ['Next.js', 'React', 'Stripe', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
    liveUrl: 'https://atharvpote14.github.io/ShopSphere2.O/',
    githubUrl: 'https://github.com/Atharvpote14/ShopSphere2.O',
    featured: true,
    category: 'Full Stack',
    caseStudy: 'Built a comprehensive e-commerce platform with modern shopping features.'
  },
  {
    id: '5',
    title: 'CineBook',
    description: 'Complete cinema booking platform with real-time seat selection, showtime scheduling, and automated ticket generation.',
    problemStatement: 'Movie theaters need digital booking systems to reduce queues and enable contactless ticketing with real-time seat availability.',
    keyFeatures: ['Real-time seat selection', 'Multiple showtime scheduling', 'Digital ticket generation', 'Payment processing', 'Booking management dashboard'],
    image: '/images/cine book.png',
    techStack: ['Next.js', 'React', 'Stripe', 'PostgreSQL', 'Tailwind CSS', 'Node.js'],
    liveUrl: 'https://atharvpote14.github.io/CineBook/',
    githubUrl: 'https://github.com/Atharvpote14/CineBook',
    featured: true,
    category: 'Full Stack',
    caseStudy: 'Developed a complete cinema booking system with seat selection and payments.'
  },
  {
    id: '6',
    title: 'Car Hub 2.0',
    description: 'Modern car dealership website with advanced filtering, comparison tools, and lead generation for automotive sales.',
    problemStatement: 'Car dealerships need digital showrooms that effectively showcase inventory and convert visitors into qualified leads.',
    keyFeatures: ['Advanced vehicle filtering', 'Side-by-side comparison', 'Lead generation forms', 'High-res image galleries', 'Mobile-first design'],
    image: '/images/car hub 2.o.png',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    liveUrl: 'https://atharvpote14.github.io/CAR-HUB-2.O/',
    githubUrl: 'https://github.com/Atharvpote14/CAR-HUB-2.O',
    featured: false,
    category: 'Frontend',
    caseStudy: 'Created a modern car dealership website with responsive design.'
  },
  {
    id: '7',
    title: 'Typing Master',
    description: 'Interactive typing practice application with real-time WPM tracking, accuracy metrics, and personalized improvement suggestions.',
    problemStatement: 'People learning to type need engaging practice tools with immediate feedback to improve speed and accuracy effectively.',
    keyFeatures: ['Real-time WPM tracking', 'Accuracy percentage display', 'Progress tracking', 'Multiple difficulty levels', 'Personalized tips'],
    image: '/images/Typemaster.png',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://typemaster-by-atharv.netlify.app/',
    githubUrl: 'https://github.com/Atharvpote14/Type_Mater',
    featured: false,
    category: 'Frontend',
    caseStudy: 'Built an interactive typing practice tool with real-time performance metrics.'
  },
  {
    id: '8',
    title: 'Password Strength Checker',
    description: 'Security tool analyzing password strength with entropy calculation, breach detection simulation, and actionable improvement tips.',
    problemStatement: 'Users create weak passwords due to lack of understanding; they need immediate, clear feedback on password security.',
    keyFeatures: ['Entropy calculation', 'Breach database check', 'Visual strength meter', 'Actionable improvement tips', 'Password generation tool'],
    image: '/images/PasswordStrengthChecker.png',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Crypto API'],
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
