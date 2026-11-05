import type { CityPage, ServicePage } from '../types'
import { servicesA } from './services-a'
import { servicesB } from './services-b'
import { cityPages } from './cities'
export { towns } from './towns'

const ORDER = [
  'fence-installation',
  'fence-repair',
  'commercial-fencing',
  'residential-fencing',
  'wood-fence',
  'vinyl-fence',
  'aluminum-fence',
  'ornamental-steel-fence',
  'chain-link-fence',
  'farm-ranch-fencing',
  'pool-fencing',
  'automatic-gates',
  'brick-columns',
  'concrete',
]

export const services: ServicePage[] = [...servicesA, ...servicesB].sort(
  (a, b) => ORDER.indexOf(a.slug) - ORDER.indexOf(b.slug),
)

export { cityPages }

export function getService(slug: string) {
  return services.find((s) => s.slug === slug)
}

export function getCityPage(slug: string) {
  return cityPages.find((c) => c.slug === slug)
}

export function cityPagesFor(serviceSlug: string): CityPage[] {
  return cityPages.filter((c) => c.service === serviceSlug)
}

/** Services menu, in Ross's order. Concrete shares column 3 but stays set apart from the fence work. */
export const navGroups = [
  {
    id: 'fence-services',
    label: 'Fence Services',
    eyebrow: 'Fence work',
    column: 1,
    slugs: ['fence-installation', 'fence-repair', 'commercial-fencing', 'residential-fencing'],
  },
  {
    id: 'fence-types',
    label: 'Fence Types',
    eyebrow: 'Materials and styles',
    column: 2,
    slugs: ['wood-fence', 'vinyl-fence', 'aluminum-fence', 'ornamental-steel-fence', 'chain-link-fence', 'farm-ranch-fencing', 'pool-fencing'],
  },
  {
    id: 'gates-columns',
    label: 'Gates & Columns',
    eyebrow: 'Gates and brick work',
    column: 3,
    slugs: ['automatic-gates', 'brick-columns'],
  },
  {
    id: 'concrete',
    label: 'Concrete',
    eyebrow: 'Separate from fence work',
    column: 3,
    slugs: ['concrete'],
  },
]
