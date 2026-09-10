import type { PortfolioData, SocialLink } from '../data-types'

type HeroProps = {
  owner: {
    name: string
    role: string
    headline: string
    summary: string
    languages: string
  }
  links: SocialLink[]
  labels: PortfolioData['labels']
}

export function Hero({ owner, links, labels }: HeroProps) {
  return (
    <section className="mx-auto grid min-h-[calc(100svh-4rem)] w-full max-w-6xl content-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:px-10">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
          {owner.role}
        </p>
        <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.05] text-zinc-950 sm:text-6xl lg:text-7xl dark:text-white">
          {owner.name}. {owner.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          {owner.summary}
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:bg-white dark:text-zinc-950 dark:hover:bg-emerald-200"
          >
            {labels.contactCta}
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-md border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition hover:border-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:border-white"
          >
            {labels.projectsCta}
          </a>
        </div>
      </div>
      <aside className="self-end border-l border-zinc-200 pl-5 dark:border-zinc-800">
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          {labels.languages}
        </p>
        <p className="mt-1 text-base font-medium text-zinc-950 dark:text-white">
          {owner.languages}
        </p>
        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-zinc-600 underline-offset-4 transition hover:text-emerald-700 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
            >
              {link.label}
            </a>
          ))}
        </div>
      </aside>
    </section>
  )
}
