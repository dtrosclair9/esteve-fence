// Alt text + intrinsic size for every project photo, keyed by public path.
// Source of truth: ~/Documents/Esteves-Fence-Brand/photos/manifest.csv (each
// photo was viewed and described by what it actually shows).
import manifest from './image-manifest.json'

export type Photo = { src: string; alt: string; w: number; h: number; thumb: boolean }

const byPath = new Map<string, Photo>((manifest as Photo[]).map((p) => [p.src, p]))

export function photo(src: string): Photo {
  return byPath.get(src) ?? { src, alt: '', w: 1920, h: 1440, thumb: src.startsWith('/images/fb/') }
}

export const allPhotos = manifest as Photo[]

// Focal points for portrait photos, set by looking at each one. Classes stay
// literal so Tailwind compiles them.
const FOCAL: Record<string, string> = {
  'dog-ear-picket-fence-side-yard': 'object-[center_50%]',
  'cedar-gate-brick-lattice-columns': 'object-[center_40%]',
  'shadowbox-fence-brick-column-statue': 'object-[center_45%]',
  'shadowbox-fence-brick-column-live-oak': 'object-[center_70%]',
  'wood-privacy-gate-side-yard': 'object-[center_45%]',
  'cedar-gate-black-hardware': 'object-[center_40%]',
  'commercial-chain-link-new-construction': 'object-[center_20%]',
  'concrete-driveway-brick-edge': 'object-[center_50%]',
  'concrete-driveway-workshop': 'object-[center_25%]',
  'concrete-slab-metal-building': 'object-[center_45%]',
  'concrete-forms-crew-mixer': 'object-[center_40%]',
  'concrete-walkway-side-yard': 'object-[center_50%]',
  'concrete-walkway-pour-cottage': 'object-[center_30%]',
  'concrete-driveway-extension-new-home': 'object-[center_60%]',
  'concrete-patio-pour-new-home': 'object-[center_45%]',
  'concrete-side-walkway-fence': 'object-[center_45%]',
  'concrete-driveway-widening': 'object-[center_40%]',
  'concrete-driveway-patio-large': 'object-[center_50%]',
  'concrete-patio-brick-home': 'object-[center_25%]',
}

export function focalClass(src: string) {
  const name = src.split('/').pop()?.replace(/\.\w+$/, '') ?? ''
  return FOCAL[name] ?? 'object-center'
}
