import type { ProjectItem } from '@/utils/sections/projects-section-data'

type ProjectModalProps = {
  item: ProjectItem
  onClose: () => void
}

export function ProjectModal({ item, onClose }: ProjectModalProps) {
  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-6"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[12px] uppercase tracking-[2px] text-[var(--stimulus-text)]">
              {item.role} - {item.period}
            </p>
            <h2 className="text-[32px] text-[var(--stimulus-ink)]">{item.title}</h2>
          </div>
          <button
            type="button"
            aria-label="Cerrar"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 text-[20px] text-[var(--stimulus-ink)] transition hover:border-black/40"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        <p className="mt-4 text-[16px] leading-[28px] text-[var(--stimulus-text)]">
          {item.details}
        </p>
        <div className="mt-4 grid gap-2">
          {item.highlights.map((highlight) => (
            <p key={highlight} className="text-[14px] text-[var(--stimulus-ink)]">
              - {highlight}
            </p>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-black/10 px-3 py-1 text-[12px] font-semibold text-[var(--stimulus-ink)]"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-4">
          {item.liveUrl ? (
            <a href={item.liveUrl} target="_blank" rel="noreferrer" className="section-btn">
              Ver sitio
            </a>
          ) : null}
          {item.repoUrl ? (
            <a href={item.repoUrl} target="_blank" rel="noreferrer" className="section-btn">
              Ver repo
            </a>
          ) : null}
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {item.screenshots.map((shot) => (
            <div key={shot.src} className="overflow-hidden rounded-xl">
              <img src={shot.src} alt={shot.alt} className="w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
