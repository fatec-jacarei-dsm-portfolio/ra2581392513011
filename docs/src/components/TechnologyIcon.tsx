import { FaReact } from 'react-icons/fa'
import { MdDesignServices } from 'react-icons/md'
import { SiMongodb, SiPostgresql, SiTypescript } from 'react-icons/si'
import type { IconType } from 'react-icons'

const technologyIcons: Record<
  string,
  { icon: IconType; color: string }
> = {
  React: { icon: FaReact, color: 'text-sky-500' },
  TypeScript: { icon: SiTypescript, color: 'text-blue-600' },
  'UX/UI': { icon: MdDesignServices, color: 'text-fuchsia-500' },
  PostgreSQL: { icon: SiPostgresql, color: 'text-blue-700 dark:text-blue-400' },
  MongoDB: { icon: SiMongodb, color: 'text-green-600 dark:text-green-500' },
}

type TechnologyIconProps = {
  technology: string
}

export function TechnologyIcon({ technology }: TechnologyIconProps) {
  const technologyIcon = technologyIcons[technology]

  if (!technologyIcon) {
    return null
  }

  const Icon = technologyIcon.icon

  return (
    <Icon
      aria-hidden="true"
      className={`size-5 shrink-0 ${technologyIcon.color}`}
    />
  )
}
