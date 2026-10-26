import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'
import { allPhotos } from '@/lib/images'
import { BASE_URL, pageMeta } from '@/lib/site'

export const metadata: Metadata = pageMeta({
  title: 'Fence & Gate Project Photos',
  description:
    'Photos of wood, aluminum, vinyl and chain link fences, gates and brick columns from Esteve’s Fence Company, serving Lafourche, Terrebonne and Assumption.',
  path: '/gallery',
})

const GROUPS: { key: string; label: string }[] = [
  { key: 'wood', label: 'Wood fences' },
  { key: 'aluminum', label: 'Aluminum fences' },
  { key: 'pool', label: 'Pool fences' },
  { key: 'brick-columns', label: 'Brick columns' },
  { key: 'gates', label: 'Gates' },
  { key: 'vinyl', label: 'Vinyl fences' },
  { key: 'chain-link', label: 'Chain link' },
  { key: 'commercial', label: 'Commercial' },
  { key: 'farm-ranch', label: 'Farm & ranch' },
  { key: 'concrete', label: 'Concrete' },
]

const cat = (src: string) => src.split('/')[3]

export default function GalleryPage() {
  // Brand shots and yard-sign photos show the pre-rebrand logo, so they stay out.
  // Marine helideck netting is held back until Ross confirms it's a service he wants shown.
  const photos = allPhotos.filter((p) => cat(p.src) !== 'brand' && cat(p.src) !== 'marine' && !p.src.includes('yard-sign'))
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ImageGallery',
          name: 'Esteve’s Fence Company project photos',
          url: `${BASE_URL}/gallery`,
          image: photos.filter((p) => !p.thumb).map((p) => ({ '@type': 'ImageObject', contentUrl: `${BASE_URL}${p.src}`, description: p.alt })),
        }}
      />
      <PageHero
        eyebrow="Gallery"
        title="Fence Photos from Lafourche, Terrebonne & Assumption"
        intro="Fences, gates and brick columns from jobs around Lafourche, Terrebonne and Assumption parishes."
        image="/images/projects/wood/cedar-board-on-board-fence-columns-long-run.jpg"
        imageAlt="Long run of stained board-on-board wood fence with white columns across a large lot"
        crumbs={[{ name: 'Gallery', path: '/gallery' }]}
      />
      <nav aria-label="Photo categories" className="border-b border-line">
        <ul className="wrap flex flex-wrap gap-x-5 gap-y-2 py-5 text-[15px]">
          {GROUPS.filter((g) => photos.some((p) => cat(p.src) === g.key)).map((g) => (
            <li key={g.key}>
              <a href={`#${g.key}`} className="font-semibold underline underline-offset-4">{g.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      {GROUPS.map((g) => {
        const items = photos.filter((p) => cat(p.src) === g.key).sort((a, b) => Number(a.thumb) - Number(b.thumb))
        if (!items.length) return null
        return (
          <section key={g.key} id={g.key} className="section scroll-mt-4 border-b border-line" aria-labelledby={`${g.key}-h`}>
            <div className="wrap">
              <h2 id={`${g.key}-h`} className="mb-8 text-[28px] md:text-[34px]">{g.label}</h2>
              <ul className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
                {items.map((p) => (
                  <li key={p.src} className="relative aspect-square overflow-hidden bg-surface">
                    <Image src={p.src} alt={p.alt} fill sizes="(min-width:1024px) 300px, 50vw" className="object-cover" />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )
      })}
      <CtaBand heading="Want one like these?" text="Call or send the form and tell us which photo is closest to what you want. We will price it for your property." />
    </>
  )
}
