'use client'

import { useEffect, useMemo, useState } from 'react'

import { SectionTitle } from '@/components/atoms/section-title'
import { ProjectCard } from '@/components/molecules/project-card'
import { ProjectModal } from '@/components/molecules/project-modal'
import { projectsSection } from '@/utils/sections/projects-section-data'

export function ProjectsSection() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const activeProject = useMemo(
    () => projectsSection.items.find((item) => item.id === activeId) ?? null,
    [activeId]
  )

  useEffect(() => {
    if (!activeProject) {
      return
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActiveId(null)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeProject])

  return (
    <section id="projects" className="parallax-section section-anchor projects-section">
      <div className="projects-overlay" />
      <div className="relative max-w-6xl mx-auto px-4 py-16">
        <SectionTitle
          title={projectsSection.title}
          subtitle={projectsSection.subtitle}
          subtitleClassName="text-white/80"
          className="text-center text-white"
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projectsSection.items.map((item) => (
            <ProjectCard key={item.id} item={item} onOpen={setActiveId} />
          ))}
        </div>
      </div>
      {activeProject ? <ProjectModal item={activeProject} onClose={() => setActiveId(null)} /> : null}
    </section>
  )
}
