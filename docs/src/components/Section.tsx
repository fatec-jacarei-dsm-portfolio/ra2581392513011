import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  eyebrow: string
  title: string
  children: ReactNode
}

export function Section({
  id,
  eyebrow,
  title,
  children,
}: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.4fr] lg:px-10">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
            {eyebrow}
          </p>
          <h2 className="mt-4 max-w-sm text-3xl font-semibold leading-tight text-zinc-950 dark:text-white">
            {title}
          </h2>
        </div>
        <div>{children}</div>
      </div>
    </section>
  )
}
