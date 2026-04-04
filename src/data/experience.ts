import { Experience } from '@/types';

export const experience: Experience[] = [
  {
    id: '1',
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovations Inc.',
    period: '2022 - Present',
    description: [
      'Lead development of enterprise web applications serving 100k+ users',
      'Architected scalable microservices infrastructure reducing latency by 40%',
      'Mentored junior developers and conducted code reviews',
      'Implemented CI/CD pipelines improving deployment efficiency by 60%'
    ],
    current: true
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    period: '2020 - 2022',
    description: [
      'Developed and maintained multiple client projects using React and Node.js',
      'Optimized database queries improving application performance by 35%',
      'Collaborated with design team to implement responsive and accessible UI',
      'Integrated third-party APIs and payment gateways'
    ]
  },
  {
    id: '3',
    title: 'Frontend Developer',
    company: 'Creative Agency Co.',
    period: '2018 - 2020',
    description: [
      'Built responsive websites for various clients using modern JavaScript frameworks',
      'Implemented pixel-perfect designs from Figma mockups',
      'Improved website load times by 50% through optimization techniques',
      'Worked in agile teams following best practices and coding standards'
    ]
  },
  {
    id: '4',
    title: 'Junior Web Developer',
    company: 'StartUp Hub',
    period: '2017 - 2018',
    description: [
      'Assisted in developing and maintaining company websites',
      'Learned and applied modern web development technologies',
      'Participated in code reviews and team meetings',
      'Contributed to documentation and testing processes'
    ]
  }
];
