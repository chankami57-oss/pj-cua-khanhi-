'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { profile } from '@/lib/site-config'

const links = [
  { label: 'Home', href: '#top' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const initials = profile.name
    .split(' ')
    .map((part) => part[0])
    .join('')

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6">
      <nav
        aria-label="Main"
        className={cn(
          'flex w-full max-w-3xl items-center justify-between gap-4 rounded-full px-4 py-2.5 transition-all duration-700 sm:px-6',
          scrolled ? 'glass' : 'border border-transparent bg-transparent',
        )}
      >
        <a
          href="#top"
          className="font-serif text-lg leading-none tracking-[0.14em] text-foreground/85 transition-colors hover:text-accent"
        >
          {initials}
          <span className="sr-only">{profile.name} — back to top</span>
        </a>

        <ul className="flex items-center gap-1 text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground sm:gap-2 sm:text-[0.72rem]">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-2.5 py-1.5 transition-colors hover:bg-secondary/70 hover:text-foreground sm:px-3"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
