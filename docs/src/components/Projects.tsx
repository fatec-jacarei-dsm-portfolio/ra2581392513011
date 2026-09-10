import type { PortfolioData, Project } from '../data-types'
import { ProjectCard } from './ProjectCard'
import { Section } from './Section'

type ProjectsProps = {
  projects: Project[]
  labels: PortfolioData['labels']
}

export function Projects({ projects, labels }: ProjectsProps) {
  return (
    <Section
      id="projects"
      eyebrow={labels.projectsEyebrow}
      title={labels.projectsTitle}
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} labels={labels} />
        ))}
      </div>
    </Section>
  )
}
