import { Icon } from '@/components/atoms/icon'

type ServiceCardProps = {
  icon: string
  title: string
  copy: string
  technologies: readonly string[]
  className?: string
}

export function ServiceCard({ icon, title, copy, technologies, className }: ServiceCardProps) {
  const textClass = className?.includes('text-white') ? 'text-white' : ''
  return (
    <div className={`service-thumb ${className ?? ''} group relative overflow-hidden`.trim()}>
      <Icon name={icon} className="text-[96px] pb-[22px]" />
      <h3 className={textClass}>{title}</h3>
      <p
        className={`text-[18px] leading-[30px] ${textClass} transition-opacity duration-300 group-hover:opacity-0`.trim()}
      >
        {copy}
      </p>
      <div
        className={`mt-4 flex flex-wrap gap-2 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0`.trim()}
      >
        {technologies.map((tech) => (
          <span
            key={tech}
            className={`rounded-full border px-3 py-1 text-[12px] font-semibold ${textClass ? 'border-white/50 text-white' : 'border-black/20 text-[var(--stimulus-ink)]'}`.trim()}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
