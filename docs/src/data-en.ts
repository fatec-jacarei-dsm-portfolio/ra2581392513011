import project_1 from './assets/project_1.png'
import type { PortfolioData } from './data-types'

export const portfolioEn = {
  owner: {
    name: 'Arthur Facchinetti',
    role: 'Full Stack Developer',
    email: 'arthurfacchinetti10@gmail.com',
    languages: 'Portuguese, English',
    headline: 'Building my path in the tech world.',
    summary: 'A portfolio of my web development projects.',
  },
  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/ArtFacchinetti' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/arthur-facchinetti/' },
    { label: 'Email', href: 'mailto:arthurfacchinetti10@gmail.com' },
  ],
  about: [
    'I am a full stack developer focused on UX/UI, responsiveness, and loading performance. I build reliable, secure, and well-documented APIs. I also plan, configure, and manage relational and non-relational databases.',
    'I enjoy understanding how things work and creating from that knowledge as I grow into a skilled technology professional.',
  ],
  skills: ['React', 'TypeScript', 'UX/UI', 'PostgreSQL', 'MongoDB'],
  projects: [
    {
      title: 'CRM Audit Logs',
      description:
        'An audit log system and interface for a lead management CRM.',
      stack: ['React', 'TypeScript', 'Nest', 'Prisma'],
      href: 'https://github.com/ErrorSquad-ABP/ABP3-Sistema-Gestao-Leads',
      repo: 'https://github.com/ErrorSquad-ABP/ABP3-Sistema-Gestao-Leads',
      year: '2026',
    },
    {
      title: 'Interactive Map',
      description:
        'An interactive map for college schedules, featuring automatic updates and API integration.',
      stack: ['HTML', 'CSS', 'JS'],
      href: 'https://gerenciamento-pedagogico.vercel.app/mapa-guest',
      repo: 'https://github.com/ErrorSquad-ABP/Gerenciamento_Pedagogico-Front',
      image: project_1,
      year: '2025',
    },
  ],
  labels: {
    navAria: 'Main navigation',
    languageToggle: 'Change language to Portuguese',
    languageCode: 'PT',
    lightModeToggle: 'Switch to light mode',
    darkModeToggle: 'Switch to dark mode',
    contactCta: 'Get in touch',
    projectsCta: 'View projects',
    languages: 'Languages',
    aboutEyebrow: 'About',
    aboutTitle: 'Who I am and how I can help.',
    skillsAria: 'Technologies and areas of expertise',
    projectsEyebrow: 'Projects',
    projectsTitle: 'See what I have built, independently and with teams.',
    projectStackAria: 'Technologies used in',
    preview: 'Preview',
    repository: 'Repository',
    contactEyebrow: 'Contact',
    contactTitle: 'Get in touch — I will reply as soon as possible!',
  },
} satisfies PortfolioData
