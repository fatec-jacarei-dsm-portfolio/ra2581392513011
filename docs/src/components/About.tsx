import { Section } from './Section'
import { TechnologyIcon } from './TechnologyIcon'
import type { PortfolioData } from '../data-types'

type AboutProps = {
  body: string[]
  skills: string[]
  labels: PortfolioData['labels']
}

export function About({ body, skills, labels }: AboutProps) {
  return (
    <Section
      id="about"
      eyebrow={labels.aboutEyebrow}
      title={labels.aboutTitle}
    >
      <div className="space-y-8">
        <div className="space-y-5 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
          {body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ul className="flex flex-wrap gap-2" aria-label={labels.skillsAria}>
          {skills.map((skill) => (
            <li
              key={skill}
              className="inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-700 transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-700"
            >
              <TechnologyIcon technology={skill} />
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
