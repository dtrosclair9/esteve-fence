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
