import { ServiceCard } from '@/components/molecules/service-card'
import { serviceSection } from '@/utils/sections/service-section-data'

export function ServiceSection() {
  return (
    <section id="service" className="parallax-section section-anchor bg-orange text-center">
      <div className="grid md:grid-cols-4">
        {serviceSection.categories.map((category) => (
          <div key={category.id} className={category.containerClass}>
            <ServiceCard
              icon={category.icon}
              title={category.title}
              copy={category.copy}
              technologies={category.technologies}
              className={category.cardClass}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
