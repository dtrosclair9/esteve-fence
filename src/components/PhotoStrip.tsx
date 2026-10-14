import Image from 'next/image'
import { photo } from '@/lib/images'

// Facebook-sourced photos are 414px thumbnails, so the grid never renders a
// tile wider than ~420px. Swap in originals from the client when we get them.
export default function PhotoStrip({ paths, caption = true }: { paths: string[]; caption?: boolean }) {
  const items = paths.map(photo)
  const cols = items.length >= 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2'
  return (
    <ul className={`mx-auto grid max-w-[1300px] gap-5 ${cols}`}>
      {items.map((p) => (
        <li key={p.src}>
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden bg-surface">
              <Image src={p.src} alt={p.alt} fill sizes="(min-width:1024px) 420px, (min-width:640px) 50vw, 100vw" className="object-cover" />
            </div>
            {/* Caption repeats the alt text, so hide it from screen readers to avoid a double read. */}
            {caption && <figcaption aria-hidden="true" className="mt-2 text-[14px] leading-snug text-muted">{p.alt}</figcaption>}
          </figure>
        </li>
      ))}
    </ul>
  )
}
