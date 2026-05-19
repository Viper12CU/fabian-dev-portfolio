import { Icon } from '@/components/atoms/icon'
import { quotesSection } from '@/utils/sections/quotes-section-data'

export function QuotesSection() {
  return (
    <section
      id="quotes"
      className="parallax-section section-anchor quotes-section text-center text-white"
    >
      <div className="quotes-overlay" />
      <div className="relative max-w-4xl mx-auto px-4">
        <Icon name={quotesSection.icon} className="text-[42px] mt-8 mb-6" />
        <h2>{quotesSection.headline}</h2>
        <p className="pt-8">{quotesSection.copy}</p>
      </div>
    </section>
  )
}
