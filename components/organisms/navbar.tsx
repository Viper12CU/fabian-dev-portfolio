'use client'

import { useEffect, useState } from 'react'
import { navItems } from '@/utils/sections/nav-items'
import { siteIdentity } from '@/utils/sections/site-identity'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <div
      className={`custom-navbar fixed top-0 left-0 w-full z-50 ${scrolled || open ? 'top-nav-collapse' : ''}`.trim()}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <a href={siteIdentity.brandHref} className="navbar-brand">
          {siteIdentity.brand}
        </a>

        <button
          className="md:hidden flex flex-col gap-1"
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-6 bg-[var(--stimulus-yellow)]" />
          <span className="block h-0.5 w-6 bg-[var(--stimulus-yellow)]" />
          <span className="block h-0.5 w-6 bg-[var(--stimulus-yellow)]" />
        </button>

        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a className="nav-link" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {open ? (
        <div className="md:hidden bg-white border-t border-black/10">
          <ul className="flex flex-col px-4 pb-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  className="nav-link block"
                  href={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}
