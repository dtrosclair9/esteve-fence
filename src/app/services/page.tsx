import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import ServiceIndex from '@/components/ServiceIndex'
import CtaBand from '@/components/CtaBand'
import Faq from '@/components/Faq'
import JsonLd from '@/components/JsonLd'
import { cityPages, navGroups, services } from '@/lib/content'
import { itemListSchema } from '@/lib/schema'
import { pageMeta } from '@/lib/site'
import type { FAQ } from '@/lib/types'

export const metadata: Metadata = pageMeta({
  title: 'Fence & Gate Services in Lafourche & Terrebonne',
  description:
    'Wood, vinyl, aluminum and chain link fences, automatic gates, brick columns, pool and farm fencing, repair and concrete from Esteve’s Fence in Thibodaux, LA.',
  path: '/services',
})

const faqs: FAQ[] = [
  {
    q: 'Which fence material should I pick?',
    a: 'Start with what the fence has to do. Privacy usually means wood or vinyl, a pool needs a code-compliant barrier (most people choose aluminum), and keeping a dog in on a budget points to chain link. We go over the tradeoffs at the estimate.',
  },
  {
    q: 'Do you handle small jobs like one gate or a short section?',
    a: 'Yes. We take gate builds, short runs and repairs as well as full perimeter fences. Call and describe the job and we will tell you whether it makes sense to come out.',
  },
  {
    q: 'Can one estimate cover a fence, a gate and a driveway?',
    a: 'Yes. Tell us everything you are thinking about and we price it together, so the fence, gate posts or columns and the concrete are planned around each other.',
  },
  {
    q: 'Do you work outside Lafourche and Terrebonne?',
    a: 'We take jobs in Assumption Parish too, around Labadieville and Napoleonville. For anything farther out, call and ask; it depends on the size of the job.',
  },
]

export default function ServicesIndexPage() {
  return (
    <>
      <JsonLd
        data={itemListSchema('Fence and gate services from Esteve’s Fence Company', [
          ...services.map((s) => ({ name: s.h1, path: `/services/${s.slug}` })),
          ...cityPages.map((c) => ({ name: c.h1, path: `/services/${c.slug}` })),
        ])}
      />
      <PageHero
        eyebrow="Services"
        title="Fence & Gate Services in Lafourche & Terrebonne"
        intro="Every fence type we build, plus gates, brick columns and the concrete that goes with them. Pick a service for the details, or call and we will sort out what fits your property."
        image="/images/projects/brick-columns/wood-privacy-fence-brick-columns-aluminum-gate.jpg"
        imageAlt="Wood privacy fence with brick columns and a black aluminum walk gate at dusk"
        crumbs={[{ name: 'Services', path: '/services' }]}
      />

      {navGroups.map((g) => (
        <section key={g.label} className="section border-b border-line" aria-labelledby={`g-${g.label}`}>
          <div className="wrap">
            <p className="label">{g.label === 'Fences' ? 'Fence types and fence work' : 'Gates, columns and concrete'}</p>
            <h2 id={`g-${g.label}`} className="mb-10 mt-4 text-[30px] md:text-[40px]">{g.label}</h2>
            <ServiceIndex items={g.slugs.map((slug) => services.find((s) => s.slug === slug)!).filter(Boolean)} />
          </div>
        </section>
      ))}

      <section className="section border-b border-line bg-surface" aria-labelledby="city-h">
        <div className="wrap grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="label">By city</p>
            <h2 id="city-h" className="mt-4 text-[30px] md:text-[40px]">Houma and Thibodaux pages</h2>
            <p className="mt-4 text-[17px] leading-[1.65] text-ink/90">
              Permits, soil and lot types change between the two parishes. These pages cover the local details.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {cityPages.map((c) => (
              <li key={c.slug} className="border-t border-line pt-4">
                <Link href={`/services/${c.slug}`} className="link text-[17px]">{c.h1}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Faq faqs={faqs} heading="Choosing the right service" />
      <CtaBand />
    </>
  )
}
