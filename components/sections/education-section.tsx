import { SectionTitle } from '@/components/atoms/section-title'
import { EducationItem } from '@/components/molecules/education-item'
import { educationSection } from '@/utils/sections/education-section-data'

export function EducationSection() {
  return (
    <section id="education" className="parallax-section section-anchor bg-yellow">
      <div className="grid md:grid-cols-2">
        <div className="text-white education-thumb">
          <SectionTitle
            title={educationSection.title}
            subtitle={educationSection.subtitle}
            subtitleClassName="color-white"
          />
          {educationSection.items.map((item) => (
            <EducationItem
              key={`${item.title}-${item.period}`}
              title={item.title}
              period={item.period}
              copy={item.copy}
            />
          ))}
        </div>
        <div className="relative min-h-[65vh] md:min-h-[75vh]">
          <div className="background-image education-img" />
        </div>
      </div>
    </section>
  )
}
