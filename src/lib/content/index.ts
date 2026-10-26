import type { CityPage, ServicePage } from '../types'
import { servicesA } from './services-a'
import { servicesB } from './services-b'
import { cityPages } from './cities'
export { towns } from './towns'

const ORDER = [
  'fence-installation',
  'wood-fence',
  'aluminum-fence',
  'vinyl-fence',
  'chain-link-fence',
  'fence-repair',
  'commercial-fencing',
  'pool-fencing',
  'farm-ranch-fencing',
  'brick-columns',
  'concrete',
  'automatic-gates',
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

export const navGroups = [
  {
    label: 'Fences',
    slugs: ['fence-installation', 'fence-repair', 'wood-fence', 'vinyl-fence', 'aluminum-fence', 'chain-link-fence', 'commercial-fencing', 'pool-fencing', 'farm-ranch-fencing'],
  },
  { label: 'Gates & Hardscape', slugs: ['brick-columns', 'concrete', 'automatic-gates'] },
]
