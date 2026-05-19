import { SectionTitle } from '@/components/atoms/section-title'
import { ExperienceItem } from '@/components/molecules/experience-item'
import { experienceSection } from '@/utils/sections/experience-section-data'

export function ExperienceSection() {
  return (
    <section id="experience" className="parallax-section section-anchor bg-orange">
      <div className="grid md:grid-cols-2">
        <div className="relative min-h-[65vh] md:min-h-[75vh]">
          <div className="background-image experience-img" />
        </div>
        <div className="text-white experience-thumb">
          <SectionTitle
            title={experienceSection.title}
            subtitle={experienceSection.subtitle}
            subtitleClassName="color-white"
          />
          {experienceSection.items.map((item) => (
            <ExperienceItem
              key={`${item.title}-${item.period}`}
              title={item.title}
              period={item.period}
              copy={item.copy}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
