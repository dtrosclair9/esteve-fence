import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import JsonLd from '@/components/JsonLd'
import Faq from '@/components/Faq'
import { BASE_URL, pageMeta, site } from '@/lib/site'
import { BUSINESS_ID, breadcrumbSchema } from '@/lib/schema'
import type { FAQ } from '@/lib/types'

export const metadata: Metadata = pageMeta({
  title: 'Free Fence Estimate in Thibodaux & Houma',
  description:
    'Request a free fence, gate or concrete estimate from Esteve’s Fence Company. Call (985) 414-0858 or send the form. Serving Lafourche, Terrebonne and Assumption.',
  path: '/contact',
})

const faqs: FAQ[] = [
  {
    q: 'What should I have ready when I call?',
    a: 'Just the job address and what you have in mind. We take the measurements when we come out.',
  },
  {
    q: 'Do I need to be home for the estimate?',
    a: 'It helps, since a lot gets decided right there. If you can’t make it, tell us and we’ll talk it through by phone.',
  },
  {
    q: 'Is there a charge to come out?',
    a: 'No. Estimates are free.',
  },
]

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          { '@context': 'https://schema.org', '@type': 'ContactPage', url: `${BASE_URL}/contact`, about: { '@id': BUSINESS_ID } },
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Contact', path: '/contact' },
          ]),
        ]}
      />
      <section className="bg-surface">
        <div className="wrap section grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="label">Contact</p>
            <h1 className="mt-5 text-[36px] leading-[1.08] sm:text-[44px] lg:text-[52px]">Free Fence Estimate in Thibodaux & Houma</h1>
            <p className="mt-6 text-[17px] leading-[1.6] text-ink/90 md:text-lg">
              Call or send the form and we will set up a time to look at your property. Estimates are free, and we cover
              Lafourche, Terrebonne and Assumption parishes.
            </p>
            <dl className="mt-10 divide-y divide-line border-y border-line">
              <div className="py-5">
                <dt className="text-[12px] font-semibold uppercase tracking-label text-muted">Phone</dt>
                <dd className="mt-1">
                  <a href={`tel:${site.phoneRaw}`} className="font-display text-[28px] font-bold underline decoration-green decoration-[3px] underline-offset-4">
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div className="py-5">
                <dt className="text-[12px] font-semibold uppercase tracking-label text-muted">Email</dt>
                <dd className="mt-1 text-[17px]">
                  <a href={`mailto:${site.email}`} className="link">{site.email}</a>
                </dd>
              </div>
              <div className="py-5">
                <dt className="text-[12px] font-semibold uppercase tracking-label text-muted">Hours</dt>
                <dd className="mt-1 text-[17px]">{site.hours}. Closed Sunday.</dd>
              </div>
              <div className="py-5">
                <dt className="text-[12px] font-semibold uppercase tracking-label text-muted">Based in</dt>
                <dd className="mt-1 text-[17px]">{site.city}, Louisiana {site.zip}</dd>
              </div>
            </dl>
          </div>
          <div className="bg-white p-6 sm:p-10 lg:col-span-7">
            <h2 className="mb-6 text-[26px]">Send us the details</h2>
            <ContactForm />
          </div>
        </div>
      </section>
      <Faq faqs={faqs} heading="Before your estimate" />
    </>
  )
}
