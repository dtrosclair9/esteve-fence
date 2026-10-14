import Image from 'next/image'
import Link from 'next/link'
import { services } from '@/lib/content'
import { site } from '@/lib/site'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="on-dark bg-ink text-white">
      <div className="wrap grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Image src="/images/brand/logo-full-dark.svg" alt={`${site.name} logo`} width={1446} height={797} className="h-28 w-auto" />
          <span aria-hidden="true" className="mt-6 block h-[3px] w-10 bg-green" />
          <p className="mt-5 max-w-xs text-[16px] leading-[1.65] text-white">
            Fences, gates, brick columns and concrete for homes, farms and businesses in Lafourche, Terrebonne and Assumption
            parishes.
          </p>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-[13px] font-semibold uppercase tracking-label text-white">Contact</h2>
          <ul className="mt-5 space-y-3 text-[16px]">
            <li>
              <a href={`tel:${site.phoneRaw}`} className="font-display text-[22px] font-bold text-white underline decoration-green decoration-2 underline-offset-4">
                {site.phoneDisplay}
              </a>
            </li>
            <li>{site.city}, {site.state} {site.zip}</li>
            <li>{site.hours}</li>
            <li>Closed Sunday</li>
            <li>
              <Link href="/contact" className="underline underline-offset-4">Request a free estimate</Link>
            </li>
            <li>
              <a href={site.facebook} className="underline underline-offset-4" target="_blank" rel="noopener noreferrer">
                Facebook<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2 lg:col-span-5">
          <h2 className="text-[13px] font-semibold uppercase tracking-label text-white">Services</h2>
          <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3 text-[16px] sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:underline underline-offset-4">{s.navLabel}</Link>
              </li>
            ))}
          </ul>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[16px]">
            <li><Link href="/about" className="hover:underline underline-offset-4">About</Link></li>
            <li><Link href="/gallery" className="hover:underline underline-offset-4">Gallery</Link></li>
            <li><Link href="/service-area" className="hover:underline underline-offset-4">Service area</Link></li>
            <li><Link href="/contact" className="hover:underline underline-offset-4">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="wrap flex flex-col gap-3 py-6 text-[14px] text-white md:flex-row md:items-center md:justify-between">
          <p>© {year} {site.legalName}. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li><Link href="/privacy" className="underline underline-offset-4">Privacy policy</Link></li>
            <li><Link href="/accessibility" className="underline underline-offset-4">Accessibility</Link></li>
            <li>
              Website by{' '}
              <a href="https://strykora.com" className="underline underline-offset-4">Strykora</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
