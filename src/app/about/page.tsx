import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'
import Faq from '@/components/Faq'
import JsonLd from '@/components/JsonLd'
import { BASE_URL, pageMeta, site } from '@/lib/site'
import { BUSINESS_ID } from '@/lib/schema'
import type { FAQ } from '@/lib/types'

export const metadata: Metadata = pageMeta({
  title: 'About Our Thibodaux Fence Company',
  description:
    'Esteve’s Fence Company is a locally owned fence and gate contractor in Thibodaux, LA, building fences, gates, brick columns and concrete across Bayou Country.',
  path: '/about',
})

// TODO: owner bio + Person schema once the owner confirms name, title and photo.

const faqs: FAQ[] = [
  {
    q: 'Where is Esteve’s Fence Company located?',
    a: 'We are based in Thibodaux, Louisiana, in Lafourche Parish. Estimates happen at your property, so there is no need to come to us.',
  },
  {
    q: 'Do you handle the gate, column and concrete work too?',
    a: 'Yes. Fences, gates, brick columns and concrete are all services we offer, so one estimate can cover the whole job. If something falls outside that list, such as electrical work for a gate opener, we will say so at the estimate.',
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
        data={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          url: `${BASE_URL}/about`,
          name: 'About Esteve’s Fence Company',
          about: { '@id': BUSINESS_ID },
        }}
      />
      <PageHero
        eyebrow="About us"
        title="A Thibodaux Fence Company"
        intro="Esteve’s Fence Company is locally owned and based in Thibodaux. We build fences, gates, brick columns and concrete for homeowners, farms and businesses across Lafourche, Terrebonne and Assumption parishes."
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
                A lot of our jobs are backyard privacy fences on new brick homes in the subdivisions around Thibodaux and
                Houma. Many of those lots back up to cane fields or open land, so the fence line is long and the ground can
                stay wet for weeks after a rain.
              </p>
              <p>
                Beyond wood, there are black aluminum fences around pools, vinyl fences for neighborhoods with HOA rules, and chain
                link for dog yards and back lots. On the commercial side, we put up slatted chain link enclosures, security
                fencing and subdivision entrance fences with brick columns.
              </p>
              <p>
                One request often leads to the next. A driveway gate tends to need brick columns and a concrete apron, and a
                new patio slab usually needs a fence around the yard. Since we do fences, gates, masonry columns and
                concrete, all of that can go on one estimate.
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
          <h2 id="how-h" className="max-w-2xl text-[30px] leading-[1.12] md:text-[40px]">How we approach a job</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {[
              {
                h: 'We look at the ground first',
                p: 'Low spots, ditches, servitudes and tree roots decide where posts can go and how deep they need to be. We check them at the estimate, before anything is priced.',
              },
              {
                h: 'Gate posts carry the load',
                p: 'A gate is the part of a fence that gets used every day, so the gate posts, hinges and latch get more of our time than any other piece. When a gate sags, the hinge post is usually the reason.',
              },
              {
                h: 'Cleanup before we go',
                p: 'Post-hole dirt, offcuts and packaging get picked up at the end of the job. The goal is a yard that looks the way it did before, with a fence in it.',
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
              Most of our jobs are in Thibodaux, Houma, Raceland, Gray, Bayou Blue, Schriever and Lockport, with some work
              up the bayou in Labadieville and Napoleonville. Hours are {site.hours}, closed Sunday.
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
