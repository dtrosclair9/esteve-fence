import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'
import Faq from '@/components/Faq'
import JsonLd from '@/components/JsonLd'
import { BASE_URL, pageMeta, site } from '@/lib/site'
import { BUSINESS_ID, ownerSchema } from '@/lib/schema'
import type { FAQ } from '@/lib/types'

export const metadata: Metadata = pageMeta({
  title: 'About Our Thibodaux Fence Company',
  description:
    'Esteve’s Fence Company is a locally owned fence contractor in Thibodaux, LA, building fences, gates, brick columns and concrete across Lafourche, Terrebonne and Assumption.',
  path: '/about',
})

// TODO: owner photo + short bio once Ross provides them.

const faqs: FAQ[] = [
  {
    q: 'Where is Esteve’s Fence Company located?',
    a: 'We are based in Thibodaux, Louisiana, in Lafourche Parish. Estimates happen at your property, so there is no need to come to us.',
  },
  {
    q: 'Do you handle the gate, column and concrete work too?',
    a: 'Yes. Gates, brick columns and concrete can all go on the same quote as the fence.',
  },
  {
    q: 'Are you hiring?',
    a: 'Call the office or message us on Facebook to ask about current openings.',
  },
]

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            url: `${BASE_URL}/about`,
            name: 'About Esteve’s Fence Company',
            about: { '@id': BUSINESS_ID },
          },
          ownerSchema(),
        ]}
      />
      <PageHero
        eyebrow="About us"
        title="A Thibodaux Fence Company"
        intro="Esteve’s Fence Company is locally owned by Ross Esteve and based in Thibodaux. We build fences, gates, brick columns and concrete for homeowners, farms and businesses across Lafourche, Terrebonne and Assumption parishes."
        image="/images/projects/wood/wood-shadowbox-fence-brick-column-gate.jpg"
        imageAlt="Shadowbox wood fence and gate meeting a brick column at the front of a home"
        crumbs={[{ name: 'About', path: '/about' }]}
      />

      <section className="section" aria-labelledby="work-h">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 id="work-h" className="text-[30px] leading-[1.12] md:text-[40px]">The kind of work we do</h2>
            <div className="prose-body mt-6">
              <p>
                We build wood, aluminum, vinyl, chain link, barbed wire and ranch fences for homes, businesses and farms.
                That includes privacy fences, fences around pools, chain link for commercial lots, and fencing for
                pastures and acreage.
              </p>
              <p>
                We also build brick columns, walk gates and double gates to match your fence, and we do concrete patios,
                shed slabs, driveway extensions and concrete repair. All of it can go on one estimate.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] self-start lg:col-span-5">
            <Image
              src="/images/projects/wood/wood-privacy-fence-gate-brick-home.jpg"
              alt="Wood privacy fence and walk gate beside a brick home with green shutters"
              fill
              sizes="(min-width:1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section border-y border-line bg-surface" aria-labelledby="how-h">
        <div className="wrap">
          <h2 id="how-h" className="max-w-2xl text-[30px] leading-[1.12] md:text-[40px]">What to expect</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {[
              {
                h: 'A free estimate at your property',
                p: 'We meet you at the property, measure, and talk through materials, style and gates.',
              },
              {
                h: 'A price for your entire job',
                p: 'Each job is quoted on its own, and the price comes to you as a PDF by text or email.',
              },
              {
                h: 'Old fence removal and permits',
                p: 'We can tear out the old fence and take care of the permit. Both are extra, along with travel on long jobs.',
              },
            ].map((c) => (
              <div key={c.h} className="border-t-[3px] border-ink pt-5">
                <h3 className="text-[21px]">{c.h}</h3>
                <p className="mt-3 text-[17px] leading-[1.6] text-ink/90">{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="where-h">
        <div className="wrap grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="where-h" className="text-[30px] leading-[1.12] md:text-[40px]">Where we work</h2>
          </div>
          <div className="prose-body lg:col-span-7">
            <p>
              We are based in Thibodaux and work throughout Lafourche, Terrebonne and Assumption parishes and the
              surrounding areas, including Houma, Raceland, Gray, Bayou Blue, Schriever, Lockport, Labadieville and
              Napoleonville. Hours are {site.hours}, closed Sunday.
            </p>
            <p>
              <Link href="/service-area" className="link">See the full service area</Link> or{' '}
              <a href={site.facebook} className="link" target="_blank" rel="noopener noreferrer">
                follow our jobs on Facebook<span className="sr-only"> (opens in a new tab)</span>
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <Faq faqs={faqs} heading="About Esteve’s" />
      <CtaBand />
    </>
  )
}
