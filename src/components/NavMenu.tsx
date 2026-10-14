'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export type NavGroup = { label: string; items: { href: string; label: string }[] }

type Props = { groups: NavGroup[]; phoneDisplay: string; phoneRaw: string }

const linkBase = 'text-[15px] font-semibold text-white underline-offset-8 decoration-2 decoration-green hover:underline'

export default function NavMenu({ groups, phoneDisplay, phoneRaw }: Props) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [svcOpen, setSvcOpen] = useState(false)
  const svcRef = useRef<HTMLLIElement>(null)

  // Close menus on navigation.
  useEffect(() => {
    setOpen(false)
    setSvcOpen(false)
  }, [pathname])

  // Desktop dropdown: close on outside click / Escape.
  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (svcRef.current && !svcRef.current.contains(e.target as Node)) setSvcOpen(false)
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setSvcOpen(false)
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onDoc)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDoc)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const current = (href: string) => (pathname === href ? 'page' : undefined)

  return (
    <>
      {/* Desktop */}
      <nav aria-label="Main" className="hidden lg:block">
        <ul className="flex items-center gap-8">
          <li>
            <Link href="/" className={linkBase} aria-current={current('/')}>Home</Link>
          </li>
          <li
            ref={svcRef}
            className="relative"
            onMouseEnter={() => setSvcOpen(true)}
            onMouseLeave={() => setSvcOpen(false)}
          >
            <button
              type="button"
              className={`${linkBase} inline-flex items-center gap-1.5`}
              aria-expanded={svcOpen}
              aria-controls="services-menu"
              onClick={() => setSvcOpen((v) => !v)}
            >
              Services
              <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" className={`transition-transform ${svcOpen ? 'rotate-180' : ''}`}>
                <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
            <div
              id="services-menu"
              className={`absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-4 ${svcOpen ? 'block' : 'hidden'}`}
            >
              <div className="grid grid-cols-2 gap-8 rounded border-t-[3px] border-green bg-white p-7 text-ink shadow-xl">
                {groups.map((g) => (
                  <div key={g.label}>
                    <p className="mb-3 text-[12px] font-semibold uppercase tracking-label text-muted">{g.label}</p>
                    <ul className="space-y-2">
                      {g.items.map((it) => (
                        <li key={it.href}>
                          <Link href={it.href} className="block py-0.5 text-[15px] font-medium hover:underline decoration-2 underline-offset-4" aria-current={current(it.href)}>
                            {it.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    {g.label === 'Fences' && (
                      <Link href="/services" className="mt-4 inline-block text-[14px] font-semibold underline decoration-2 underline-offset-4">
                        All services
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </li>
          <li>
            <Link href="/about" className={linkBase} aria-current={current('/about')}>About</Link>
          </li>
          <li>
            <Link href="/contact" className={linkBase} aria-current={current('/contact')}>Contact</Link>
          </li>
          <li>
            <a href={`tel:${phoneRaw}`} className="btn-green nav__link--cta">
              <PhoneIcon />
              {phoneDisplay}
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile / tablet */}
      <div className="flex items-center gap-2 lg:hidden">
        <a href={`tel:${phoneRaw}`} className="btn-green hidden px-4 sm:inline-flex">
          <PhoneIcon />
          {phoneDisplay}
        </a>
        <button
          type="button"
          className="inline-flex min-h-[48px] min-w-[48px] items-center justify-center gap-2 rounded border border-white/40 px-3 text-[14px] font-semibold"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20">
            {open ? (
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2" />
            ) : (
              <path d="M2 5h16M2 10h16M2 15h16" stroke="currentColor" strokeWidth="2" />
            )}
          </svg>
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`absolute inset-x-0 top-full z-40 h-[calc(100dvh-96px)] overflow-y-auto border-t border-white/15 bg-ink sm:h-[calc(100dvh-112px)] lg:hidden ${open ? 'block' : 'hidden'}`}
      >
        <nav aria-label="Mobile" className="wrap pb-10 pt-4">
          <ul className="divide-y divide-white/15 border-y border-white/15">
            <li><Link href="/" className="block py-4 text-lg font-semibold">Home</Link></li>
            <li className="py-4">
              <p className="text-lg font-semibold">Services</p>
              {groups.map((g) => (
                <div key={g.label} className="mt-4">
                  <p className="mb-2 text-[12px] font-semibold uppercase tracking-label text-white/80">{g.label}</p>
                  <ul className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
                    {g.items.map((it) => (
                      <li key={it.href}>
                        <Link href={it.href} className="block py-2 text-[16px] text-white">{it.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <Link href="/services" className="mt-3 inline-block py-2 text-[16px] font-semibold underline underline-offset-4">All services</Link>
            </li>
            <li><Link href="/about" className="block py-4 text-lg font-semibold">About</Link></li>
            <li><Link href="/contact" className="block py-4 text-lg font-semibold">Contact</Link></li>
          </ul>
          <a href={`tel:${phoneRaw}`} className="btn-green mt-6 w-full">
            <PhoneIcon />
            Call {phoneDisplay}
          </a>
        </nav>
      </div>
    </>
  )
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.6a1 1 0 01-.25 1z" />
    </svg>
  )
}
