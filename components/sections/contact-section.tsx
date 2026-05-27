import { Icon } from '@/components/atoms/icon'
import { SocialIcon } from '@/components/atoms/social-icon'
import { SectionTitle } from '@/components/atoms/section-title'
import { contactSection } from '@/utils/sections/contact-section-data'

export function ContactSection() {
  return (
    <section id="contact" className="parallax-section section-anchor bg-orange">
      <div className="grid md:grid-cols-12">
        <div className="md:col-span-6 contact-panel text-white">
          <SectionTitle
            title={contactSection.title}
            subtitle={contactSection.subtitle}
            subtitleClassName="color-white"
          />
          <form className="mt-6">
            <input
              name="fullname"
              type="text"
              className="contact-input w-full"
              placeholder={contactSection.form.namePlaceholder}
            />
            <input
              name="email"
              type="email"
              className="contact-input w-full"
              placeholder={contactSection.form.emailPlaceholder}
            />
            <textarea
              name="message"
              rows={5}
              className="contact-input w-full"
              placeholder={contactSection.form.messagePlaceholder}
            />
            <div className="mt-2">
              <input
                name="submit"
                type="submit"
                className="contact-submit w-full md:w-1/2 h-[45px]"
                value={contactSection.form.submitLabel}
              />
            </div>
          </form>
        </div>
        <div className="md:col-span-3 relative min-h-[65vh] md:min-h-[75vh]">
          <div className="background-image contact-img" />
        </div>
        <div className="md:col-span-3 bg-dark text-white contact-panel">
          <div>
            <h3 className="color-white">{contactSection.contact.title}</h3>
            <p className="text-white">
              <Icon name="fa-phone" className="mr-2" /> {contactSection.contact.phone}
            </p>
            <p className="text-white">
              <Icon name="fa-envelope-o" className="mr-2" />
              <a href={`mailto:${contactSection.contact.email}`} className="text-white">
                {contactSection.contact.email}
              </a>
            </p>
          </div>
          <div className="mt-6 flex justify-center">
            <ul className="social-icon justify-center">
              {contactSection.socials.map((social) => (
                <SocialIcon key={social.icon} href={social.href} icon={social.icon} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
