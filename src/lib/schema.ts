import { BASE_URL, site } from './site'
import type { FAQ } from './types'

export const BUSINESS_ID = `${BASE_URL}/#business`
export const WEBSITE_ID = `${BASE_URL}/#website`

const abs = (p: string) => (p.startsWith('http') ? p : `${BASE_URL}${p}`)

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['HomeAndConstructionBusiness', 'LocalBusiness'],
    '@id': BUSINESS_ID,
    name: site.name,
    legalName: site.legalName,
    url: BASE_URL,
    telephone: site.phoneRaw,
    logo: abs('/images/brand/logo-full-light.svg'),
    image: abs('/images/projects/wood/cedar-board-on-board-fence-columns-long-run.jpg'),
    priceRange: '$$',
    // Service-area business: no public street address on file yet.
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.city,
      addressRegion: site.state,
      postalCode: site.zip,
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: site.hoursSpec.days,
        opens: site.hoursSpec.opens,
        closes: site.hoursSpec.closes,
      },
    ],
    areaServed: [
      ...site.areaServed.map((name) => ({ '@type': 'City', name: `${name}, LA` })),
      ...site.parishes.map((name) => ({ '@type': 'AdministrativeArea', name: `${name}, Louisiana` })),
    ],
    sameAs: [site.facebook],
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: BASE_URL,
    name: site.name,
    publisher: { '@id': BUSINESS_ID },
    inLanguage: 'en-US',
  }
}

export function serviceSchema(opts: { name: string; serviceType: string; description: string; path: string; areas?: string[] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${abs(opts.path)}#service`,
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: abs(opts.path),
    provider: { '@id': BUSINESS_ID },
    areaServed: (opts.areas ?? site.areaServed).map((name) => ({ '@type': 'City', name: `${name}, LA` })),
  }
}

export function faqSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  }
}

export function itemListSchema(name: string, items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, url: abs(it.path) })),
  }
}

export function howToSchema(name: string, steps: { name: string; text: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    step: steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })),
  }
}
