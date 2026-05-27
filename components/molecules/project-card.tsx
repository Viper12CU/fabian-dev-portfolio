import { Icon } from '@/components/atoms/icon'
import type { ProjectItem } from '@/utils/sections/projects-section-data'

type ProjectCardProps = {
  item: ProjectItem
  onOpen: (id: ProjectItem['id']) => void
}

export function ProjectCard({ item, onOpen }: ProjectCardProps) {
  const isLightText = item.cardClass.includes('text-white')
  const metaClass = isLightText ? 'text-white/80' : 'text-[var(--stimulus-ink)]'
  const textClass = isLightText ? 'text-white' : 'text-[var(--stimulus-ink)]'
  const isOrangeCard = item.containerClass.includes('bg-orange')
  const isDarkCard = item.containerClass.includes('bg-dark')
  const buttonClass = isDarkCard
    ? 'project-btn-dark'
    : isOrangeCard
      ? 'project-btn-orange'
      : 'project-btn-light'

  return (
    <div className={item.containerClass}>
      <div className={`service-thumb ${item.cardClass} relative h-full`.trim()}>
        <Icon name={item.icon} className="text-[72px] pb-[16px]" />
        <h3 className={textClass}>{item.title}</h3>
        <p className={`text-[12px] uppercase tracking-[2px] ${metaClass}`.trim()}>
          {item.role} - {item.period}
        </p>
        <p className={`mt-4 text-[16px] leading-[28px] ${textClass}`.trim()}>
          {item.copy}
        </p>
        <div className="mt-5 flex flex-wrap gap-2 mb-20">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className={`rounded-full border px-3 py-1 text-[12px] font-semibold ${
                isLightText
                  ? 'border-white/50 text-white'
                  : 'border-black/20 text-[var(--stimulus-ink)]'
              }`.trim()}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-10 absolute bottom-3 left-[22px]">
          <button
            type="button"
            className={`section-btn ${buttonClass}`.trim()}
            onClick={() => onOpen(item.id)}
          >
            {item.linkLabel}
          </button>
        </div>
      </div>
    </div>
  )
}
