import { Icon } from '@/components/atoms/icon'
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
          <div className="mb-6">
            <h3 className="color-white">{contactSection.office.title}</h3>
            <p className="text-white">{contactSection.office.address}</p>
          </div>
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
            <p className="text-white">
              <Icon name="fa-globe" className="mr-2" />{' '}
              <a href={contactSection.contact.websiteHref} className="text-white">
                {contactSection.contact.website}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
