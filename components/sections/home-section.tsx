import { SectionButton } from '@/components/atoms/section-button'
import { homeSection } from '@/utils/sections/home-section-data'

export function HomeSection() {
  return (
    <section id="home" className="parallax-section section-anchor">
      <div className="grid md:grid-cols-2">
        <div className="home-split">
          <div className="home-img" />
        </div>
        <div className="home-split">
          <div className="home-thumb">
            <div className="section-title">
              <h4>{homeSection.eyebrow}</h4>
              <h1 className="home-title">
                {homeSection.titleLine}
              </h1>
              <p className="home-copy">{homeSection.copy}</p>
              <SectionButton href={homeSection.cta.href} label={homeSection.cta.label} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
