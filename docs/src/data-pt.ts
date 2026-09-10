import project_1 from './assets/project_1.png'
import type { PortfolioData } from './data-types'

export const portfolioPt = {
  owner: {
    name: 'Arthur Facchinetti',
    role: 'Desenvolvedor Full Stack',
    email: 'arthurfacchinetti10@gmail.com',
    languages: 'Português, Inglês',
    headline: 'Traçando meu caminho no mundo tech.',
    summary: 'Portfólio dos meus projetos de desenvolvimento web.',
  },
  navLinks: [
    { label: 'Sobre', href: '#about' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Contato', href: '#contact' },
  ],
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/ArtFacchinetti' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/arthur-facchinetti/' },
    { label: 'Email', href: 'mailto:arthurfacchinetti10@gmail.com' },
  ],
  about: [
    'Sou desenvolvedor full stack, com foco em UX/UI, responsividade e velocidade de carregamento. Desenvolvo APIs confiáveis, seguras e bem documentadas. Faço o planejamento, a configuração e o controle de bancos de dados relacionais e não relacionais.',
    'Gosto de entender como as coisas funcionam e criar a partir disso, buscando me consolidar como um profissional competente na área de tecnologia.',
  ],
  skills: ['React', 'TypeScript', 'UX/UI', 'PostgreSQL', 'MongoDB'],
  projects: [
    {
      title: 'Logs de Auditoria em CRM',
      description:
        'Sistema e interface de Logs de Auditoria para CRM de gestão de Leads',
      stack: ['React', 'TypeScript', 'Nest', 'Prisma'],
      href: 'https://github.com/ErrorSquad-ABP/ABP3-Sistema-Gestao-Leads',
      repo: 'https://github.com/ErrorSquad-ABP/ABP3-Sistema-Gestao-Leads',
      year: '2026',
    },
    {
      title: 'Mapa interativo',
      description:
        'Mapa interativo para horários de faculdade, com atualização automática e interação com API.',
      stack: ['HTML', 'CSS', 'JS'],
      href: 'https://gerenciamento-pedagogico.vercel.app/mapa-guest',
      repo: 'https://github.com/ErrorSquad-ABP/Gerenciamento_Pedagogico-Front',
      image: project_1,
      year: '2025',
    },
  ],
  labels: {
    navAria: 'Navegação principal',
    languageToggle: 'Alterar idioma para inglês',
    languageCode: 'EN',
    lightModeToggle: 'Ativar modo claro',
    darkModeToggle: 'Ativar modo escuro',
    contactCta: 'Entrar em contato',
    projectsCta: 'Ver projetos',
    languages: 'Idiomas',
    aboutEyebrow: 'Sobre',
    aboutTitle: 'Quem sou eu e como posso te ajudar.',
    skillsAria: 'Tecnologias e áreas de atuação',
    projectsEyebrow: 'Projetos',
    projectsTitle: 'Veja o que já fiz, sozinho e em equipe.',
    projectStackAria: 'Tecnologias usadas em',
    preview: 'Preview',
    repository: 'Repositório',
    contactEyebrow: 'Contato',
    contactTitle: 'Entre em contato, respondo assim que possível!',
  },
} satisfies PortfolioData
