import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import ServiceIndex from '@/components/ServiceIndex'
import Faq from '@/components/Faq'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'
import { cityPages, services, towns } from '@/lib/content'
import { howToSchema, localBusinessSchema, ownerSchema, websiteSchema } from '@/lib/schema'
import { pageMeta, site } from '@/lib/site'
import type { FAQ } from '@/lib/types'

export const metadata: Metadata = {
  ...pageMeta({
  title: "Fence Company in Thibodaux & Houma, LA | Esteve's Fence",
  description:
    "Esteve's Fence Company builds wood, aluminum, vinyl, chain link and ranch fences across Lafourche, Terrebonne and Assumption. Locally owned. Free estimates.",
  path: '/',
  absoluteTitle: true,
  }),
  other: {
    'geo.region': 'US-LA',
    'geo.placename': 'Thibodaux',
    'geo.position': `${site.geo.lat};${site.geo.lng}`,
    ICBM: `${site.geo.lat}, ${site.geo.lng}`,
  },
}

const steps = [
  {
    name: 'Call or send the form',
    text: 'Give us your address and tell us what you have in mind. We will set up a time to come out.',
  },
  {
    name: 'Free estimate at the property',
    text: 'We measure and go over the details with you, like materials, style and gates. Then you get a price for your entire job.',
  },
  {
    name: 'Get on the schedule',
    text: 'Once you say yes, we put your job on the schedule. If your address needs a permit, we take care of it.',
  },
  {
    name: 'Your fence goes in',
    text: 'Our crew comes out and installs your fence.',
  },
]

const faqs: FAQ[] = [
  {
    q: 'Do you give free fence estimates?',
    a: "Yes. Estimates are free. We come out to the property, measure, and go over the details with you, then send you a price for the whole job.",
  },
  {
    q: 'What areas does Esteve’s Fence Company serve?',
    a: 'We are based in Thibodaux and work across Lafourche, Terrebonne and Assumption parishes and the surrounding areas. That includes Houma, Raceland, Gray, Bayou Blue, Schriever, Lockport, Labadieville and Napoleonville. If you are not sure we cover your area, call and ask.',
  },
  {
    q: 'How much does a new fence cost?',
    a: 'It depends on the length of the fence, the material, the height, the number of gates, and whether an old fence has to come out first. Every job is priced on its own, so we give you a number after we come out and measure.',
  },
  {
    q: 'Which fence holds up best in South Louisiana weather?',
    a: 'Aluminum and vinyl do not rot, so they handle the humidity with the least upkeep. Wood is still the most popular privacy fence around here and lasts longer when it is sealed or stained. We can go over the options at your estimate.',
  },
  {
    q: 'Do you install automatic driveway gates?',
    a: 'We build the gate and can build brick columns for it. The opener itself is installed by a separate licensed gate company that we bring in.',
  },
  {
    q: 'What concrete work do you do?',
    a: 'Patios, slabs for sheds, driveway extensions and concrete repair. These can go on the same estimate as a fence.',
  },
  {
    q: 'Do you take commercial fence jobs?',
    a: 'Yes. We build chain link and other fencing for businesses. Call us with the address and what you need fenced in.',
  },
  {
    q: 'Do you build fences for farms and pastures?',
    a: 'Yes. We build barbed wire and ranch fences for pastures and acreage.',
  },
  {
    q: 'Can you add a gate to the fence I already have?',
    a: 'Usually, yes. We build walk gates and double gates to match an existing fence. We look at the existing posts during the estimate.',
  },
  {
    q: 'Do you remove the old fence?',
    a: 'Yes. Tearing out and hauling off an old fence can be added to the job, and it is listed on your estimate.',
  },
  {
    q: 'What are your hours?',
    a: 'We work Monday through Saturday, 7:30 am to 6:00 pm, and are closed Sunday. Call (985) 414-0858 or send the estimate form any time.',
  },
]

export default function HomePage() {
  const featured = services.find((s) => s.slug === 'automatic-gates')
  const houma = cityPages.filter((c) => c.city === 'Houma')
  const thibodaux = cityPages.filter((c) => c.city === 'Thibodaux')

  return (
    <>
      <JsonLd data={[localBusinessSchema(), ownerSchema(), websiteSchema(), howToSchema('How a fence job works with Esteve’s Fence Company', steps)]} />

      <PageHero
        size="home"
        eyebrow="Based in Thibodaux, LA · Serving surrounding areas"
        title="Fence Company Serving Lafourche, Terrebonne & Assumption Parishes"
        intro="Esteve’s Fence Company builds wood, aluminum, vinyl, chain link, barbed wire and ranch fences, plus brick columns and concrete. Automatic gates are available too. We are locally owned in Thibodaux, and estimates are free."
        image="/images/projects/wood/cedar-board-on-board-fence-columns-long-run.jpg"
        imageAlt="Long run of stained board-on-board wood fence with white columns across a large lot"
        imagePosition="object-[60%_50%]"
      >
        <p className="mt-8 border-t border-line pt-5 text-[14px] font-medium text-muted">
          Wood · Aluminum · Vinyl · Chain link · Ranch · Brick columns · Concrete · Gates
        </p>
      </PageHero>

      {/* Quick facts */}
      <section aria-label="At a glance" className="border-b border-line">
        <ul className="wrap grid grid-cols-2 divide-line lg:grid-cols-4 lg:divide-x">
          {[
            ['Based in', 'Thibodaux, LA'],
            ['Estimates', 'Free, at your property'],
            ['Hours', 'Mon–Sat, 7:30–6'],
            ['Call', site.phoneDisplay],
          ].map(([k, v]) => (
            <li key={k} className="py-6 lg:px-8 lg:first:pl-0">
              <p className="text-[12px] font-semibold uppercase tracking-label text-muted">{k}</p>
              <p className="mt-1 font-display text-[18px] font-bold md:text-[20px]">
                {k === 'Call' ? <a href={`tel:${site.phoneRaw}`} className="underline decoration-2 underline-offset-4">{v}</a> : v}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Services */}
      <section className="section" aria-labelledby="svc-h">
        <div className="wrap">
          <div className="mb-12 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="label">What we build</p>
              <h2 id="svc-h" className="mt-4 text-[32px] leading-[1.1] md:text-[46px]">Fences, gates and the concrete around them</h2>
            </div>
            <div className="prose-body self-end lg:col-span-5 lg:col-start-8">
              <p>
                We build fences for homes, businesses and farms, along with brick columns, gates and concrete. Every
                service below has its own page with more detail and common questions.
              </p>
            </div>
          </div>
          <ServiceIndex items={services} />
        </div>
      </section>

      {/* Featured: gates + columns */}
      {featured && (
        <section className="on-dark bg-ink text-white" aria-labelledby="gates-h">
          <div className="grid lg:grid-cols-2">
            <div className="relative h-[300px] sm:h-[420px] lg:h-auto lg:min-h-[560px]">
              <Image
                src="/images/projects/brick-columns/wood-privacy-fence-brick-columns-aluminum-gate.jpg"
                alt="Wood privacy fence with brick columns and a black aluminum walk gate at dusk"
                fill
                sizes="(min-width:1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center px-5 py-14 sm:px-8 lg:px-16 lg:py-20 lg:pr-[max(3rem,calc((100vw-1280px)/2+3rem))]">
              <p className="label">Gates & brick columns</p>
              <h2 id="gates-h" className="mt-4 text-[30px] leading-[1.12] text-white md:text-[42px]">
                Brick columns and gates that match your fence
              </h2>
              <div className="mt-6 space-y-4 text-[17px] leading-[1.65] text-white md:text-lg">
                <p>
                  Brick columns give a fence a finished, permanent look and a solid place to hang a gate. We build them
                  with wood, vinyl or aluminum panels between them.
                </p>
                <p>
                  We also build walk gates and double driveway gates to match your fence. If you want an automatic opener,
                  we bring in a licensed gate company for that part.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/services/brick-columns" className="btn-green">Brick columns</Link>
                <Link href="/services/automatic-gates" className="btn-line-light">Gates & automatic gates</Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* About snippet */}
      <section className="section" aria-labelledby="about-h">
        <div className="wrap grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="relative aspect-[4/3] lg:col-span-7">
            <Image
              src="/images/projects/brick-columns/wood-fence-panels-white-brick-columns.jpg"
              alt="Stained wood fence panels set between painted white brick columns"
              fill
              sizes="(min-width:1024px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-5">
            <p className="label">Thibodaux, Louisiana</p>
            <h2 id="about-h" className="mt-4 text-[30px] leading-[1.12] md:text-[40px]">A local fence company based in Thibodaux</h2>
            <div className="prose-body mt-6">
              <p>
                Esteve’s Fence Company is locally owned and based in Thibodaux. We build fences for homes, businesses and
                farms across Lafourche, Terrebonne and Assumption parishes.
              </p>
              <p>
                Every job is priced on its own. We come out, measure, talk through what you want, and send you a price
                for the whole job.
              </p>
            </div>
            <Link href="/about" className="link mt-6 inline-block text-[17px]">More about Esteve’s</Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section border-y border-line bg-surface" aria-labelledby="process-h">
        <div className="wrap">
          <p className="label">How it works</p>
          <h2 id="process-h" className="mt-4 max-w-2xl text-[30px] leading-[1.12] md:text-[40px]">How a fence job goes</h2>
          <ol className="relative mt-12 grid gap-10 border-l border-line pl-8 lg:grid-cols-4 lg:gap-8 lg:border-l-0 lg:border-t lg:pl-0 lg:pt-10">
            {steps.map((s, i) => (
              <li key={s.name} className="relative">
                <span aria-hidden="true" className="absolute -left-[37px] top-2 h-[10px] w-[10px] bg-green lg:-top-[45px] lg:left-0" />
                <p className="font-display text-[40px] font-extrabold leading-none text-ink">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-4 text-[20px]">{s.name}</h3>
                <p className="mt-3 text-[16px] leading-[1.6] text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="section" aria-labelledby="gal-h">
        <div className="wrap">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="label">Recent work</p>
              <h2 id="gal-h" className="mt-4 text-[30px] leading-[1.12] md:text-[40px]">Fences we have built</h2>
            </div>
            <Link href="/gallery" className="link text-[17px]">See the full gallery</Link>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              ['/images/projects/pool/black-aluminum-pool-fence-sunset.jpg', 'Black aluminum pool fence around a backyard pool at sunset', 'lg:col-span-2 aspect-[16/10]'],
              ['/images/projects/brick-columns/wood-privacy-fence-brick-column-trees.jpg', 'Wood privacy fence tied into a brick column, built around mature crepe myrtles', 'aspect-[4/3] lg:aspect-auto'],
              ['/images/projects/vinyl/white-vinyl-fence-backyard.jpg', 'White vinyl privacy fence along a backyard beside a screened porch', 'aspect-[4/3]'],
              ['/images/projects/commercial/commercial-chain-link-privacy-slats-roadside.jpg', 'Commercial chain link fence with white privacy slats along a roadside lot', 'aspect-[4/3]'],
              ['/images/projects/farm-ranch/ranch-3-rail-board-fence-pasture.jpg', 'Three-rail wood board fence around an open pasture beside a brick home', 'aspect-[4/3]'],
            ].map(([src, alt, cls]) => (
              <figure key={src} className={`relative overflow-hidden bg-surface ${cls}`}>
                <Image src={src} alt={alt} fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="section border-t border-line" aria-labelledby="area-h">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="label">Service area</p>
            <h2 id="area-h" className="mt-4 text-[30px] leading-[1.12] md:text-[40px]">Lafourche, Terrebonne, Assumption and surrounding areas</h2>
            <p className="mt-5 text-[17px] leading-[1.65] text-ink/90">
              We are based in Thibodaux and work throughout Lafourche, Terrebonne and Assumption parishes and the
              surrounding areas. If you do not see your town listed, call and ask.
            </p>
            <Link href="/service-area" className="link mt-6 inline-block text-[17px]">Every town we cover</Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7">
            {[
              { city: 'Houma', pages: houma },
              { city: 'Thibodaux', pages: thibodaux },
            ].map(({ city, pages }) => (
              <div key={city} className="border-t-[3px] border-ink pt-5">
                <h3 className="text-[22px]">{city}</h3>
                <ul className="mt-4 space-y-3">
                  {pages.map((c) => (
                    <li key={c.slug}>
                      <Link href={`/services/${c.slug}`} className="link text-[16px]">{c.h1}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <p className="text-[16px] leading-[1.7] text-muted sm:col-span-2">
              Also: {towns.filter((t) => t.name !== 'Houma' && t.name !== 'Thibodaux').map((t) => t.name).join(', ')}.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews pointer (real reviews live on Google; not reproduced here) */}
      <section className="border-t border-line bg-surface" aria-labelledby="rev-h">
        <div className="wrap flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center">
          <div>
            <h2 id="rev-h" className="text-[24px] md:text-[28px]">Read what customers say on Google</h2>
            <p className="mt-2 text-[17px] text-muted">See what our customers have to say about working with us.</p>
          </div>
          <a href={site.googleReviews} className="btn-line shrink-0" target="_blank" rel="noopener noreferrer">
            See our Google reviews<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </section>

      <Faq faqs={faqs} heading="Questions about fencing with Esteve’s" />

      <CtaBand />
    </>
  )
}
