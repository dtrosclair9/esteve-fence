import Link from 'next/link'
import type { ServicePage } from '@/lib/types'

export default function ServiceIndex({ items, headingLevel = 'h3' }: { items: ServicePage[]; headingLevel?: 'h2' | 'h3' }) {
  const H = headingLevel
  return (
    // 1px gaps over a line-colored background draw every divider evenly at any column count.
    <ul className="grid gap-px border-y border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {items.map((s) => (
        <li key={s.slug} className="bg-white sm:[&:last-child:nth-child(odd)]:col-span-2 lg:[&:last-child:nth-child(odd)]:col-span-1">
          <Link href={`/services/${s.slug}`} className="group flex h-full flex-col p-6 lg:p-8">
            <span aria-hidden="true" className="mb-5 block h-[10px] w-[22px] bg-green" />
            <H className="text-[21px] leading-snug">{s.navLabel}</H>
            <p className="mt-3 flex-1 text-[16px] leading-[1.6] text-muted">{s.cardBlurb}</p>
            <span className="mt-5 text-[15px] font-semibold underline decoration-2 underline-offset-4 group-hover:decoration-green">
              {s.navLabel} details<span className="sr-only">: {s.h1}</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
