import Image from 'next/image'
import Link from 'next/link'
import JsonLd from './JsonLd'
import { breadcrumbSchema } from '@/lib/schema'
import { site } from '@/lib/site'

type Crumb = { name: string; path: string }

type Props = {
  eyebrow: string
  title: string
  /** Short line set directly under the H1 (not a heading). */
  subtitle?: string
  intro: string | string[]
  image: string
  imageAlt: string
  /** Breadcrumb trail AFTER Home. Emits BreadcrumbList schema when present. */
  crumbs?: Crumb[]
  /** Homepage hero gets bigger type. */
  size?: 'home' | 'page'
  /** Optional tailwind object-position class for the photo */
  imagePosition?: string
  children?: React.ReactNode
}

export default function PageHero({ eyebrow, title, subtitle, intro, image, imageAlt, crumbs, size = 'page', imagePosition = 'object-center', children }: Props) {
  const paras = Array.isArray(intro) ? intro : [intro]
  const trail = crumbs ? [{ name: 'Home', path: '/' }, ...crumbs] : null

  return (
    <section className="border-b border-line bg-surface">
      {trail && <JsonLd data={breadcrumbSchema(trail)} />}
      <div className="grid lg:min-h-[600px] lg:grid-cols-[42fr_58fr]">
        <div className="flex flex-col justify-center px-5 py-12 sm:px-8 lg:py-16 lg:pl-[max(3rem,calc((100vw-1280px)/2+3rem))] lg:pr-12">
          {trail && (
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[14px] text-muted">
                {trail.map((c, i) => (
                  <li key={c.path} className="flex items-center gap-2">
                    {i > 0 && <span aria-hidden="true">/</span>}
                    {i < trail.length - 1 ? (
                      <Link href={c.path} className="underline underline-offset-4 hover:text-ink">{c.name}</Link>
                    ) : (
                      <span aria-current="page" className="text-ink">{c.name}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <p className="label">{eyebrow}</p>
          <h1
            className={
              size === 'home'
                ? 'mt-5 text-[40px] leading-[1.04] sm:text-[54px] lg:text-[58px] xl:text-[64px] font-extrabold'
                : 'mt-5 text-[36px] leading-[1.08] sm:text-[44px] lg:text-[52px]'
            }
          >
            {title}
          </h1>
          {subtitle && <p className="mt-4 text-[19px] font-semibold leading-snug text-ink md:text-[22px]">{subtitle}</p>}
          <div className="mt-6 max-w-xl space-y-4 text-[17px] leading-[1.6] text-ink/90 md:text-lg">
            {paras.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-green">Request an estimate</Link>
            <a href={`tel:${site.phoneRaw}`} className="btn-line">Call {site.phoneDisplay}</a>
          </div>
          {children}
        </div>
        <div className="relative h-[280px] sm:h-[380px] lg:h-auto">
          <Image src={image} alt={imageAlt} fill priority sizes="(min-width: 1024px) 58vw, 100vw" className={`object-cover ${imagePosition}`} />
        </div>
      </div>
    </section>
  )
}
