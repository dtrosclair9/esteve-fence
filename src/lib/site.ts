// Single source of truth for business facts. Canonicals, sitemap, robots and
// JSON-LD all read BASE_URL from here.
// TODO before launch: confirm the domain transfers from the rental vendor. If it
// doesn't, this is the only line that changes.
export const BASE_URL = 'https://estevesfencecompany.com'

export const site = {
  name: "Esteve's Fence Company",
  legalName: "Esteve's Fence Company, LLC",
  owner: 'Ross Esteve',
  shortName: "Esteve's Fence",
  phoneDisplay: '(985) 414-0858',
  phoneRaw: '+19854140858',
  city: 'Thibodaux',
  state: 'LA',
  zip: '70301',
  parish: 'Lafourche Parish',
  geo: { lat: 29.7958, lng: -90.8229 },
  hours: 'Mon–Sat 7:30 am – 6:00 pm',
  hoursSpec: { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '07:30', closes: '18:00' },
  facebook: 'https://www.facebook.com/p/Esteves-Fence-Company-LLC-100083181258133/',
  googleReviews: 'https://maps.app.goo.gl/mqWQwGco256oTYs36',
  areaServed: ['Thibodaux', 'Houma', 'Raceland', 'Gray', 'Bayou Blue', 'Labadieville', 'Schriever', 'Lockport', 'Chackbay', 'Napoleonville'],
  parishes: ['Lafourche Parish', 'Terrebonne Parish', 'Assumption Parish'],
}

export const ogImage = {
  url: '/images/og-image.jpg',
  width: 1200,
  height: 630,
  alt: "Esteve's Fence Company, fence builders in Thibodaux and Houma, Louisiana",
}

export function pageMeta(opts: { title: string; description: string; path: string; absoluteTitle?: boolean }) {
  const url = `${BASE_URL}${opts.path === '/' ? '' : opts.path}`
  // The layout template appends " | Esteve's Fence" (17 chars). Keyword-led
  // titles that would run past ~62 chars drop the suffix instead of truncating.
  const absolute = opts.absoluteTitle || opts.title.length + 17 > 62
  return {
    title: absolute ? { absolute: opts.title } : opts.title,
    description: opts.description,
    alternates: { canonical: url || BASE_URL },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url: url || BASE_URL,
      siteName: site.name,
      locale: 'en_US',
      type: 'website' as const,
      images: [ogImage],
    },
  }
}
