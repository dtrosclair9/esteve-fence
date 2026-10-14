import JsonLd from './JsonLd'
import { faqSchema } from '@/lib/schema'
import type { FAQ } from '@/lib/types'

type Props = { faqs: FAQ[]; heading?: string; intro?: string; id?: string }

// Native <details> keeps this keyboard- and screen-reader-friendly with no JS.
export default function Faq({ faqs, heading = 'Common questions', intro, id = 'faq' }: Props) {
  if (!faqs.length) return null
  return (
    <section id={id} className="section border-t border-line" aria-labelledby={`${id}-h`}>
      <JsonLd data={faqSchema(faqs)} />
      <div className="wrap grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="label">FAQ</p>
          <h2 id={`${id}-h`} className="mt-4 text-[30px] leading-[1.12] md:text-[40px]">{heading}</h2>
          {intro && <p className="mt-4 text-[17px] leading-[1.6] text-muted">{intro}</p>}
        </div>
        <div className="lg:col-span-8">
          <div className="divide-y divide-line border-y border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                  <h3 className="text-[18px] leading-snug md:text-[20px]">{f.q}</h3>
                  <span aria-hidden="true" className="relative mt-1 h-5 w-5 shrink-0">
                    <span className="absolute left-0 top-1/2 h-[2px] w-5 -translate-y-1/2 bg-ink" />
                    <span className="absolute left-1/2 top-0 h-5 w-[2px] -translate-x-1/2 bg-ink transition-transform group-open:scale-y-0" />
                  </span>
                </summary>
                <p className="pb-6 pr-10 text-[17px] leading-[1.65] text-ink/90">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
