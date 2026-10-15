import type { Metadata } from 'next'
import { pageMeta, site } from '@/lib/site'

export const metadata: Metadata = pageMeta({
  title: 'Privacy Policy',
  description:
    'How Esteve’s Fence Company in Thibodaux collects, uses and protects information submitted through estevesfencecompany.com, including the estimate request form.',
  path: '/privacy',
})

const LAST_UPDATED = 'October 13, 2026'

export default function PrivacyPage() {
  return (
    <div className="section">
      <div className="wrap max-w-3xl">
        <h1 className="text-[36px] md:text-[48px]">Privacy Policy</h1>
        <p className="mt-3 text-muted">Last updated: {LAST_UPDATED}</p>
        <div className="prose-body mt-10 space-y-8 [&_h2]:mt-10 [&_h2]:text-[24px] [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_li]:text-[17px]">
          <p>
            This policy explains what information {site.legalName} (&ldquo;Esteve&rsquo;s,&rdquo; &ldquo;we&rdquo;) collects
            through this website and what we do with it.
          </p>

          <h2>Information we collect</h2>
          <ul>
            <li>
              <strong>Estimate form.</strong> When you send the form, we receive the name, phone number, email address, town or
              job address, service, and message you enter.
            </li>
            <li>
              <strong>Technical data.</strong> Our hosting provider automatically records basic request logs, such as IP
              address, browser type, pages requested and time of the request, for security and performance.
            </li>
          </ul>

          <h2>How we use it</h2>
          <p>
            We use form information only to respond to you, schedule an estimate, and do the work you ask for. We do not sell,
            rent or trade your information, and we do not use it for third-party advertising.
          </p>

          <h2>Services that handle data for us</h2>
          <ul>
            <li><strong>Formspree</strong> receives estimate form submissions and forwards them to us by email.</li>
            <li><strong>Vercel</strong> hosts this website and keeps the request logs described above.</li>
            <li>
              <strong>Google Fonts</strong> provides the fonts on this site. Fonts are bundled and served from our own domain at
              build time, so your browser does not contact Google to load them.
            </li>
          </ul>
          <p>Each of these companies has its own privacy policy covering how it handles data.</p>

          <h2>Cookies and tracking</h2>
          <p>
            This site does not use advertising cookies or cross-site tracking. If we add analytics in the future, we will
            update this policy first.
          </p>

          <h2>Links to other sites</h2>
          <p>
            Links to Facebook, Google and other sites take you to services we do not control. Their privacy policies apply
            there.
          </p>

          <h2>Your choices</h2>
          <p>
            You can ask us to tell you what information we have from you, correct it, or delete it. Call us and we will take
            care of it.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy: {site.legalName}, {site.city}, {site.state} {site.zip}. Phone{' '}
            <a href={`tel:${site.phoneRaw}`} className="link">{site.phoneDisplay}</a>, email{' '}
            <a href={`mailto:${site.email}`} className="link">{site.email}</a>.
          </p>
        </div>
      </div>
    </div>
  )
}
