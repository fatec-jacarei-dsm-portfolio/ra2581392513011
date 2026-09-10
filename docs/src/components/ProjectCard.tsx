import type { PortfolioData, Project } from '../data-types'

type ProjectCardProps = {
  project: Project
  labels: PortfolioData['labels']
}

export function ProjectCard({ project, labels }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg border border-zinc-200 bg-white transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-200/60 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 dark:hover:shadow-black/20">
      {project.image ? (
        <div className="aspect-[16/9] border-b border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-800">
          <img
            src={project.image}
            alt=""
            className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100"
          />
        </div>
      ) : null}
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold leading-tight text-zinc-950 dark:text-white">
            {project.title}
          </h3>
          <span className="shrink-0 text-sm text-zinc-500">{project.year}</span>
        </div>
        <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>
        <ul
          className="mt-5 flex flex-wrap gap-2"
          aria-label={`${labels.projectStackAria} ${project.title}`}
        >
          {project.stack.map((item) => (
            <li
              key={item}
              className="rounded border border-zinc-200 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:text-zinc-400"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex gap-4 text-sm font-medium">
          <a
            href={project.href}
            className="text-emerald-700 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600 dark:text-emerald-400"
          >
            {labels.preview}
          </a>
          <a
            href={project.repo}
            className="text-zinc-600 underline-offset-4 hover:text-zinc-950 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600 dark:text-zinc-400 dark:hover:text-white"
          >
            {labels.repository}
          </a>
        </div>
      </div>
    </article>
  )
}
