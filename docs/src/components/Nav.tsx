import type { PortfolioData, SocialLink, Theme } from '../data-types'

type NavProps = {
  owner: {
    name: string
    role: string
  }
  links: SocialLink[]
  labels: PortfolioData['labels']
  theme: Theme
  onLanguageToggle: () => void
  onThemeToggle: () => void
}

export function Nav({
  owner,
  links,
  labels,
  theme,
  onLanguageToggle,
  onThemeToggle,
}: NavProps) {
  const themeToggleLabel =
    theme === 'dark' ? labels.lightModeToggle : labels.darkModeToggle

  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200 bg-stone-50/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90">
      <nav
        className="mx-auto flex min-h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10"
        aria-label={labels.navAria}
      >
        <a href="#" className="group inline-flex flex-col leading-none">
          <span className="text-sm font-semibold text-zinc-950 group-hover:text-emerald-700 dark:text-white dark:group-hover:text-emerald-400">
            {owner.name}
          </span>
          <span className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">
            {owner.role}
          </span>
        </a>
        <div className="flex items-center gap-1 rounded-full border border-zinc-200 bg-white p-1 text-sm shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={onThemeToggle}
            aria-label={themeToggleLabel}
            title={themeToggleLabel}
            className="inline-flex size-9 items-center justify-center rounded-full text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
          >
            {theme === 'dark' ? (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="12" cy="12" r="3.5" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M20.25 15.1A8.5 8.5 0 0 1 8.9 3.75 8.5 8.5 0 1 0 20.25 15.1Z" />
              </svg>
            )}
          </button>
          <button
            type="button"
            onClick={onLanguageToggle}
            aria-label={labels.languageToggle}
            title={labels.languageToggle}
            className="rounded-full bg-emerald-700 px-3 py-2 font-semibold text-white transition hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:bg-emerald-500 dark:text-zinc-950 dark:hover:bg-emerald-400"
          >
            {labels.languageCode}
          </button>
        </div>
      </nav>
    </header>
  )
}
