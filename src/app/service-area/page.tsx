import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'
import { itemListSchema } from '@/lib/schema'
import { towns } from '@/lib/content'
import { pageMeta } from '@/lib/site'

export const metadata: Metadata = pageMeta({
  title: 'Fence Company Service Area: Lafourche & Terrebonne',
  description:
    'Esteve’s Fence Company builds fences and gates in Thibodaux, Houma, Raceland, Gray, Bayou Blue, Schriever, Lockport, Chackbay, Labadieville and Napoleonville.',
  path: '/service-area',
})

export default function ServiceAreaPage() {
  const parishes = Array.from(new Set(towns.map((t) => t.parish)))
  return (
    <>
      <JsonLd data={itemListSchema('Towns served by Esteve’s Fence Company', towns.map((t) => ({ name: `${t.name}, LA`, path: `/service-area#${t.name.toLowerCase().replace(/\s+/g, '-')}` })))} />
      <PageHero
        eyebrow="Service area"
        title="Fence Service Area: Thibodaux, Houma & Nearby Towns"
        intro="We are based in Thibodaux and work across Lafourche, Terrebonne and Assumption parishes. Here is what fencing looks like in each town we cover."
        image="/images/projects/wood/wood-privacy-fence-long-run-rural.jpg"
        imageAlt="Long wood privacy fence running along a rural backyard"
        crumbs={[{ name: 'Service area', path: '/service-area' }]}
      />
      {parishes.map((parish) => (
        <section key={parish} className="section border-b border-line" aria-labelledby={`p-${parish}`}>
          <div className="wrap">
            <h2 id={`p-${parish}`} className="text-[30px] md:text-[40px]">{parish}</h2>
            <div className="mt-10 grid gap-x-12 gap-y-12 md:grid-cols-2">
              {towns
                .filter((t) => t.parish === parish)
                .map((t) => (
                  <article key={t.name} id={t.name.toLowerCase().replace(/\s+/g, '-')} className="scroll-mt-4 border-t-[3px] border-ink pt-5">
                    <h3 className="text-[22px]">{t.name}</h3>
                    <p className="mt-3 text-[17px] leading-[1.65] text-ink/90">{t.blurb}</p>
                    {t.links && (
                      <ul className="mt-4 space-y-2">
                        {t.links.map((l) => (
                          <li key={l.href}>
                            <Link href={l.href} className="link text-[16px]">{l.label}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                ))}
            </div>
          </div>
        </section>
      ))}
      <CtaBand heading="Not sure if you are in range?" text="Call and tell us where the job is. If it is close to these towns, we can usually make it work." />
    </>
  )
}
