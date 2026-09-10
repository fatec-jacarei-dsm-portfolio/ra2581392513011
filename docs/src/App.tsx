import { useEffect, useState } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { portfolioEn } from './data-en'
import { portfolioPt } from './data-pt'
import type { Language, Theme } from './data-types'

function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('portfolio-language')
    return savedLanguage === 'en' ? 'en' : 'pt'
  })
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light',
  )
  const portfolio = language === 'pt' ? portfolioPt : portfolioEn

  useEffect(() => {
    localStorage.setItem('portfolio-language', language)
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en'
  }, [language])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === 'pt' ? 'en' : 'pt'))
  }

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className="min-h-screen bg-stone-50 text-zinc-950 antialiased dark:bg-zinc-950 dark:text-zinc-50">
      <Nav
        owner={portfolio.owner}
        links={portfolio.navLinks}
        labels={portfolio.labels}
        theme={theme}
        onLanguageToggle={toggleLanguage}
        onThemeToggle={toggleTheme}
      />
      <main>
        <Hero
          owner={portfolio.owner}
          links={portfolio.socialLinks}
          labels={portfolio.labels}
        />
        <About
          body={portfolio.about}
          skills={portfolio.skills}
          labels={portfolio.labels}
        />
        <Projects projects={portfolio.projects} labels={portfolio.labels} />
        <Contact
          owner={portfolio.owner}
          links={portfolio.socialLinks}
          labels={portfolio.labels}
        />
      </main>
    </div>
  )
}

export default App
