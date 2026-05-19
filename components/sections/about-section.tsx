import { SectionTitle } from '@/components/atoms/section-title'
import { ProgressBar } from '@/components/molecules/progress-bar'
import { aboutSection } from '@/utils/sections/about-section-data'

export function AboutSection() {
  return (
    <section id="about" className="parallax-section section-anchor">
      <div className="grid md:grid-cols-12">
        <div className="md:col-span-6 px-0">
          <div className="p-[22px] md:p-[32px]">
            <SectionTitle
              title={aboutSection.title}
              subtitle={aboutSection.subtitle}
              subtitleClassName="color-yellow"
            />
            <div>
              {aboutSection.paragraphs.map((paragraph) => (
                <p key={paragraph} className={"mb-2"}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="md:col-span-3 relative min-h-[65vh] md:min-h-[75vh]">
          <div className="background-image about-img" />
        </div>
        <div className="md:col-span-3 bg-yellow">
          <div className="p-[22px] md:p-[32px] text-white">
            <SectionTitle
              title={aboutSection.skillsTitle}
              subtitle={aboutSection.skillsSubtitle}
              subtitleClassName="color-white"
              className="text-white"
            />
            <div>
              {aboutSection.skills.map((skill) => (
                <ProgressBar key={skill.label} label={skill.label} value={skill.value} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
