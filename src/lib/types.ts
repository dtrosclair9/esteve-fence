export type FAQ = { q: string; a: string }

export type ContentSection = {
  /** H2. Question-led where it fits ("How long does a wood fence last here?"). */
  h2: string
  /** Paragraphs. When h2 is a question, paragraph 1 opens with a one-sentence direct answer. */
  body: string[]
  bullets?: string[]
}

export type ServicePage = {
  slug: string
  /** Label in nav dropdown + service index */
  navLabel: string
  group: 'fences' | 'gates-hardscape'
  /** <title> without brand (template appends "| Esteve's Fence"). 50–60 chars. */
  title: string
  /** Meta description, 150–160 chars. */
  description: string
  h1: string
  /** Short uppercase label above the H1, e.g. "Wood fences · Lafourche & Terrebonne" */
  eyebrow: string
  /** 2 short paragraphs under the H1. */
  intro: string[]
  heroImage: string
  heroAlt: string
  /** 3–5 sections of real substance. */
  sections: ContentSection[]
  /** "What's included" bullets, 5–8. */
  included: string[]
  /** 2–4 image paths from /images/projects or /images/fb shown in a strip. Must not repeat heroImage. */
  gallery: string[]
  /** 5–7 FAQs. */
  faqs: FAQ[]
  /** 2–4 related service slugs */
  related: string[]
  /** schema.org serviceType */
  serviceType: string
  /** One-sentence blurb for the service index on the homepage and /services. */
  cardBlurb: string
  /** Closing CTA band copy, unique to this page. */
  cta?: { heading: string; text: string }
}

export type CityPage = {
  /** e.g. "fence-installation-houma-la" */
  slug: string
  /** slug of the parent ServicePage */
  service: string
  city: string
  parish: string
  title: string
  description: string
  h1: string
  eyebrow: string
  intro: string[]
  heroImage: string
  heroAlt: string
  /** 3–4 sections, written for THIS city only. Must be >70% unique vs. any other city page. */
  sections: ContentSection[]
  included: string[]
  /** Nearby communities served from this page */
  nearby: string[]
  gallery: string[]
  /** 3–4 city-specific FAQs */
  faqs: FAQ[]
  /** Closing CTA band copy, unique to this page. */
  cta?: { heading: string; text: string }
}

export type Town = {
  name: string
  parish: string
  /** One real paragraph about fencing in/around this town. */
  blurb: string
  /** Optional city+service page links */
  links?: { label: string; href: string }[]
}
