import type { PortfolioData, SocialLink } from '../data-types'
import { Section } from './Section'

type ContactProps = {
  owner: {
    email: string
  }
  links: SocialLink[]
  labels: PortfolioData['labels']
}

export function Contact({ owner, links, labels }: ContactProps) {
  return (
    <Section
      id="contact"
      eyebrow={labels.contactEyebrow}
      title={labels.contactTitle}
    >
      <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <a
          href={`mailto:${owner.email}`}
          className="text-2xl font-semibold text-zinc-950 underline-offset-4 hover:text-emerald-700 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600 dark:text-white dark:hover:text-emerald-400"
        >
          {owner.email}
        </a>
        <div className="mt-8 flex flex-wrap gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex items-center justify-center rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:border-zinc-950 hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-white dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </Section>
  )
}
