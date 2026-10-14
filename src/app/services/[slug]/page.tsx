import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ServiceDetail from '@/components/ServiceDetail'
import JsonLd from '@/components/JsonLd'
import { cityPages, cityPagesFor, getCityPage, getService, services, towns } from '@/lib/content'
import { serviceSchema } from '@/lib/schema'
import { pageMeta, site } from '@/lib/site'

// One segment serves both service pages (/services/wood-fence) and city+service
// pages (/services/fence-installation-houma-la). A "prefix-[slug]" folder is not
// a valid Next route, so both live under [slug].
export const dynamicParams = false

export function generateStaticParams() {
  return [...services.map((s) => ({ slug: s.slug })), ...cityPages.map((c) => ({ slug: c.slug }))]
}

type Params = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const page = getService(slug) ?? getCityPage(slug)
  if (!page) return {}
  return pageMeta({ title: page.title, description: page.description, path: `/services/${slug}` })
}

const defaultTowns = ['Thibodaux', 'Houma', 'Raceland', 'Gray', 'Bayou Blue', 'Labadieville', 'Schriever', 'Lockport']

export default async function ServiceRoute({ params }: Params) {
  const { slug } = await params
  const svc = getService(slug)

  if (svc) {
    const cities = cityPagesFor(svc.slug)
    const related = svc.related.map(getService).filter((s): s is NonNullable<typeof s> => Boolean(s)).slice(0, 3)
    return (
      <>
        <JsonLd data={serviceSchema({ name: svc.h1, serviceType: svc.serviceType, description: svc.description, path: `/services/${svc.slug}` })} />
        <ServiceDetail
          eyebrow={svc.eyebrow}
          h1={svc.h1}
          intro={svc.intro}
          heroImage={svc.heroImage}
          heroAlt={svc.heroAlt}
          crumbs={[{ name: 'Services', path: '/services' }, { name: svc.navLabel, path: `/services/${svc.slug}` }]}
          sections={svc.sections}
          included={svc.included}
          includedHeading="What's included"
          gallery={svc.gallery}
          faqs={svc.faqs}
          faqHeading={`${svc.navLabel}: common questions`}
          related={related}
          area={{
            heading: cities.length ? `${svc.navLabel} by city` : 'Where we work',
            text: cities.length
              ? `We run ${svc.navLabel.toLowerCase()} jobs all over Lafourche and Terrebonne. These pages cover what is different about the work in each city.`
              : `Esteve's is based in ${site.city} and takes ${svc.navLabel.toLowerCase()} jobs across Lafourche, Terrebonne and Assumption parishes.`,
            links: cities.map((c) => ({ label: c.h1, href: `/services/${c.slug}` })),
            towns: defaultTowns,
          }}
        />
      </>
    )
  }

  const city = getCityPage(slug)
  if (!city) notFound()
  const parent = getService(city.service)
  const siblings = cityPages.filter((c) => c.city === city.city && c.slug !== city.slug)
  const related = [parent, ...(parent?.related.map(getService) ?? [])].filter((s): s is NonNullable<typeof s> => Boolean(s)).slice(0, 3)
  const townLinks = towns.find((t) => t.name === city.city)?.links ?? []

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: city.h1,
          serviceType: parent?.serviceType ?? city.h1,
          description: city.description,
          path: `/services/${city.slug}`,
          areas: [city.city, ...city.nearby],
        })}
      />
      <ServiceDetail
        eyebrow={city.eyebrow}
        h1={city.h1}
        intro={city.intro}
        heroImage={city.heroImage}
        heroAlt={city.heroAlt}
        crumbs={[
          { name: 'Services', path: '/services' },
          ...(parent ? [{ name: parent.navLabel, path: `/services/${parent.slug}` }] : []),
          { name: city.city, path: `/services/${city.slug}` },
        ]}
        sections={city.sections}
        included={city.included}
        includedHeading={`What's included in ${city.city}`}
        gallery={city.gallery}
        faqs={city.faqs}
        faqHeading={`Questions from ${city.city} customers`}
        related={related}
        area={{
          heading: `Around ${city.city}`,
          text: `From ${city.city} we also cover ${city.nearby.join(', ')}. More ${city.city} pages:`,
          links: [
            ...siblings.map((c) => ({ label: c.h1, href: `/services/${c.slug}` })),
            ...townLinks.filter((l) => l.href !== `/services/${city.slug}` && !siblings.some((s) => `/services/${s.slug}` === l.href)),
            ...(parent ? [{ label: `${parent.navLabel} across Lafourche and Terrebonne`, href: `/services/${parent.slug}` }] : []),
          ],
          towns: defaultTowns.filter((t) => t !== city.city),
        }}
      />
    </>
  )
}
