/** @type {import('next').NextConfig} */

// 301s from the old rented Duda site (crawled 2026-10-13) so indexed URLs land
// on the closest new page instead of a 404. If a route here is ever re-added as
// a real page, delete its redirect or it will shadow the page.
const legacyRedirects = [
  ['/services/residential-fence-installation', '/services/fence-installation'],
  ['/services/commercial-fence-installation', '/services/commercial-fencing'],
  ['/services/wood-fence-installation-repair', '/services/wood-fence'],
  ['/services/chain-link-fence-installation-repair', '/services/chain-link-fence'],
  ['/services/aluminum-vinyl-fence-installation', '/services/aluminum-fence'],
  ['/services/custom-gate-design-installation', '/services/automatic-gates'],
  ['/services/automatic-manual-gate-systems', '/services/automatic-gates'],
  ['/services/brick-fence-posts-masonry-work', '/services/brick-columns'],
  ['/services/concrete-patios-driveways-slabs', '/services/concrete'],
  ['/services/fence-repair-property-enhancements', '/services/fence-repair'],
  ['/services/ranch-fencing', '/services/farm-ranch-fencing'],
  ['/services/barbed-wire-fence-installation', '/services/farm-ranch-fencing'],
  ['/service-area/thibodaux-la', '/services/fence-installation-thibodaux-la'],
  ['/service-area/houma-la', '/services/fence-installation-houma-la'],
  ['/service-area/bayou-cane-la', '/services/fence-installation-houma-la'],
  ['/service-area/:town', '/service-area'],
  ['/areas-we-serve', '/service-area'],
  ['/faqs', '/'],
  ['/reviews', '/'],
  ['/resources', '/services'],
  ['/custom-gate-design-and-automated-systems-in-bayou-blue-la', '/services/automatic-gates'],
  // Gate city pages removed 2026-10-26: Esteve's subs out gate openers to a licensed company.
  ['/services/automatic-gates-houma-la', '/services/automatic-gates'],
  ['/services/automatic-gates-thibodaux-la', '/services/automatic-gates'],
  ['/low-maintenance-aluminum-and-vinyl-fence-installation-in-raceland-la', '/services/aluminum-fence'],
  ['/affordable-chain-link-fence-installation-and-repair-in-labadieville-la', '/services/chain-link-fence'],
  ['/custom-wood-fence-installation-and-repair-in-gray-la', '/services/wood-fence'],
  ['/durable-commercial-fence-installation-in-houma-la', '/services/commercial-fencing-houma-la'],
  ['/professional-residential-fence-installation-in-thibodaux-la', '/services/fence-installation-thibodaux-la'],
]

const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return legacyRedirects.map(([source, destination]) => ({ source, destination, permanent: true }))
  },
  async headers() {
    // Security headers on every route (Strykora 2026 standard). CSP is left out
    // on purpose — a strict policy needs per-site testing against inline styles,
    // fonts, and Vercel Analytics; add it once validated.
    const securityHeaders = [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
      { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
      { key: 'X-DNS-Prefetch-Control', value: 'on' },
    ]
    return [{ source: '/:path*', headers: securityHeaders }]
  },
}

module.exports = nextConfig
