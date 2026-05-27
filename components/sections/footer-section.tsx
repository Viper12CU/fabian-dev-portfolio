import { footerSection } from '@/utils/sections/footer-section-data'

export function FooterSection() {
  return (
    <footer className="text-center">
      <div className="max-w-4xl mx-auto px-4">
        <div>
          <p>
            Copyright © {new Date().getFullYear()} {footerSection.company} | Design:{' '}
            {footerSection.designBy}
          </p>
        </div>
      </div>
    </footer>
  )
}
