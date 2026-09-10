export type Language = 'pt' | 'en'
export type Theme = 'light' | 'dark'

export type SocialLink = {
  label: string
  href: string
}

export type Project = {
  title: string
  description: string
  stack: string[]
  href: string
  repo: string
  image?: string
  year: string
}

export type PortfolioData = {
  owner: {
    name: string
    role: string
    email: string
    languages: string
    headline: string
    summary: string
  }
  navLinks: SocialLink[]
  socialLinks: SocialLink[]
  about: string[]
  skills: string[]
  projects: Project[]
  labels: {
    navAria: string
    languageToggle: string
    languageCode: string
    lightModeToggle: string
    darkModeToggle: string
    contactCta: string
    projectsCta: string
    languages: string
    aboutEyebrow: string
    aboutTitle: string
    skillsAria: string
    projectsEyebrow: string
    projectsTitle: string
    projectStackAria: string
    preview: string
    repository: string
    contactEyebrow: string
    contactTitle: string
  }
}
