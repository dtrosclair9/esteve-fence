import Link from 'next/link'
import PageHero from './PageHero'
import PhotoStrip from './PhotoStrip'
import Faq from './Faq'
import CtaBand from './CtaBand'
import ServiceIndex from './ServiceIndex'
import type { ContentSection, FAQ, ServicePage } from '@/lib/types'
import { site } from '@/lib/site'

type Props = {
  eyebrow: string
  h1: string
  intro: string[]
  heroImage: string
  heroAlt: string
  crumbs: { name: string; path: string }[]
  sections: ContentSection[]
  included: string[]
  includedHeading: string
  gallery: string[]
  faqs: FAQ[]
  faqHeading: string
  related: ServicePage[]
  /** Area callout: links to city pages and/or a list of nearby towns. */
  area: { heading: string; text: string; links: { label: string; href: string }[]; towns: string[] }
}

export default function ServiceDetail(p: Props) {
  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.h1} intro={p.intro} image={p.heroImage} imageAlt={p.heroAlt} crumbs={p.crumbs} />

      <div className="wrap section grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-8">
          {p.sections.map((s, i) => (
            <section key={s.h2} className={i > 0 ? 'mt-14 border-t border-line pt-14' : ''}>
              <h2 className="text-[28px] leading-[1.15] md:text-[36px]">{s.h2}</h2>
              <div className="prose-body mt-5">
                {s.body.map((para) => (
                  <p key={para.slice(0, 40)}>{para}</p>
                ))}
              </div>
              {s.bullets && (
                <ul className="mt-6 space-y-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-[17px] leading-[1.6]">
                      <span aria-hidden="true" className="mt-[11px] h-[3px] w-4 shrink-0 bg-ink" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <aside className="lg:col-span-4">
          <div className="border-t-[3px] border-green pt-6 lg:sticky lg:top-8">
            <h2 className="text-[22px]">{p.includedHeading}</h2>
            <ul className="mt-5 divide-y divide-line border-b border-line">
              {p.included.map((it) => (
                <li key={it} className="flex gap-3 py-3 text-[16px] leading-[1.5]">
                  <svg aria-hidden="true" viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0">
                    <path d="M2 8.5l4 4 8-9" fill="none" stroke="#141414" strokeWidth="2.2" />
                  </svg>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 bg-ink p-6 text-white on-dark">
              <p className="font-display text-[20px] font-bold leading-snug text-white">Free estimates, Monday through Saturday</p>
              <p className="mt-2 text-[15px] leading-[1.6] text-white">{site.hours}</p>
              <a href={`tel:${site.phoneRaw}`} className="btn-green mt-5 w-full">Call {site.phoneDisplay}</a>
              <Link href="/contact" className="btn-line-light mt-3 w-full">Send the estimate form</Link>
            </div>
          </div>
        </aside>
      </div>

      {p.gallery.length > 0 && (
        <section className="section border-t border-line bg-surface" aria-labelledby="work-h">
          <div className="wrap">
            <p className="label">Our work</p>
            <h2 id="work-h" className="mb-10 mt-4 text-[28px] md:text-[36px]">Recent jobs from our crew</h2>
            <PhotoStrip paths={p.gallery} />
          </div>
        </section>
      )}

      <section className="section border-t border-line" aria-labelledby="area-h">
        <div className="wrap grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="label">Service area</p>
            <h2 id="area-h" className="mt-4 text-[28px] leading-[1.15] md:text-[36px]">{p.area.heading}</h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-[17px] leading-[1.65] text-ink/90 md:text-lg">{p.area.text}</p>
            {p.area.links.length > 0 && (
              <ul className="mt-6 flex flex-col gap-3">
                {p.area.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="link text-[17px]">{l.label}</Link>
                  </li>
                ))}
              </ul>
            )}
            <p className="mt-6 text-[16px] leading-[1.7] text-muted">
              Also serving {p.area.towns.join(', ')}.{' '}
              <Link href="/service-area" className="link">See the full service area</Link>
            </p>
          </div>
        </div>
      </section>

      <Faq faqs={p.faqs} heading={p.faqHeading} />

      {p.related.length > 0 && (
        <section className="section border-t border-line" aria-labelledby="related-h">
          <div className="wrap">
            <p className="label">Related services</p>
            <h2 id="related-h" className="mb-10 mt-4 text-[28px] md:text-[36px]">Often paired with this job</h2>
            <ServiceIndex items={p.related} />
          </div>
        </section>
      )}

      <CtaBand />
    </>
  )
}
