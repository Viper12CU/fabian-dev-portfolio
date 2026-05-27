'use client'

import { useState } from 'react'

type LanguageSwitchProps = {
  defaultLanguage?: 'ES' | 'EN'
  ariaLabel?: string
}

export function LanguageSwitch({
  defaultLanguage = 'ES',
  ariaLabel = 'Language switch',
}: LanguageSwitchProps) {
  const [language, setLanguage] = useState<'ES' | 'EN'>(defaultLanguage)

  const isEnglish = language === 'EN'

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={() => setLanguage(isEnglish ? 'ES' : 'EN')}
      className="absolute h-8 w-16 select-none rounded-full border border-black/15 bg-transparent  transition-transform duration-150 right-20 lg:right-10"
    >
      <span className="pointer-events-none absolute inset-0 flex items-center justify-between px-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6b6e70]">
        <span>ES</span>
        <span>EN</span>
      </span>
      <span
        className={`relative flex h-7 w-[calc(50%-0.25rem)] items-center justify-center rounded-full bg-[var(--stimulus-yellow)] text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--stimulus-ink)] shadow-[0_6px_16px_rgba(0,0,0,0.12)] transition-transform duration-200 ${
          isEnglish ? 'translate-x-[calc(100%+0.40rem)]' : 'translate-x-0'
        }`.trim()}
      >
        {language}
      </span>
    </button>
  )
}
