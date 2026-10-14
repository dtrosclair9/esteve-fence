import Link from 'next/link'
import Image from 'next/image'
import { navGroups, services } from '@/lib/content'
import { site } from '@/lib/site'
import NavMenu, { type NavGroup } from './NavMenu'

export default function Header() {
  // Only labels + slugs cross into the client bundle, not the page copy.
  const groups: NavGroup[] = navGroups.map((g) => ({
    label: g.label,
    items: g.slugs.map((slug) => ({
      href: `/services/${slug}`,
      label: services.find((s) => s.slug === slug)?.navLabel ?? slug,
    })),
  }))

  return (
    <header className="on-dark relative z-50 bg-ink text-white">
      <div className="wrap flex items-center justify-between gap-4 py-2 lg:py-3">
        <Link href="/" className="shrink-0" aria-label={`${site.name} home`}>
          <Image
            src="/images/brand/logo-full-dark.svg"
            alt={`${site.name} logo`}
            width={1446}
            height={797}
            priority
            className="h-20 w-auto sm:h-24 lg:h-28"
          />
        </Link>
        <NavMenu groups={groups} phoneDisplay={site.phoneDisplay} phoneRaw={site.phoneRaw} />
      </div>
    </header>
  )
}
