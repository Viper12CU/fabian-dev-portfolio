import { Navbar } from '@/components/organisms/navbar'
import { Preloader } from '@/components/organisms/preloader'
import { HomeSection } from '@/components/sections/home-section'
import { AboutSection } from '@/components/sections/about-section'
import { ServiceSection } from '@/components/sections/service-section'
import { ExperienceSection } from '@/components/sections/experience-section'
import { EducationSection } from '@/components/sections/education-section'
import { ProjectsSection } from '@/components/sections/projects-section'
import { ContactSection } from '@/components/sections/contact-section'
import { FooterSection } from '@/components/sections/footer-section'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Preloader />
      <Navbar />
      <main>
        <HomeSection />
        <AboutSection />
        <ServiceSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  )
}
