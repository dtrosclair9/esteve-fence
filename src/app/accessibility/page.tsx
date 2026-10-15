import type { Metadata } from 'next'
import { pageMeta, site } from '@/lib/site'

export const metadata: Metadata = pageMeta({
  title: 'Accessibility Statement',
  description:
    'Esteve’s Fence Company is committed to an accessible website that conforms to WCAG 2.2 Level AA. Learn how to report a barrier on estevesfencecompany.com.',
  path: '/accessibility',
})

export default function AccessibilityPage() {
  return (
    <div className="section">
      <div className="wrap max-w-3xl">
        <h1 className="text-[36px] md:text-[48px]">Accessibility Statement</h1>
        <p className="mt-3 text-muted">Last updated: October 13, 2026</p>
        <div className="prose-body mt-10 [&_h2]:mt-10 [&_h2]:text-[24px] [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_li]:text-[17px]">
          <p>
            {site.legalName} wants everyone to be able to use this website, including people who use assistive technology.
            We aim to conform to the{' '}
            <a href="https://www.w3.org/WAI/WCAG22/quickref/" className="link">Web Content Accessibility Guidelines (WCAG) 2.2 Level AA</a>.
          </p>
          <h2>What we have done</h2>
          <ul>
            <li>Text and controls meet WCAG AA color contrast</li>
            <li>The whole site works with a keyboard, with a visible focus outline</li>
            <li>A &ldquo;skip to main content&rdquo; link and labeled page regions</li>
            <li>Descriptive alt text on project photos and a label on every form field</li>
            <li>Pages tested with automated accessibility checks</li>
          </ul>
          <h2>Report a barrier</h2>
          <p>
            If something on this site is hard to use, please tell us so we can fix it. Call{' '}
            <a href={`tel:${site.phoneRaw}`} className="link">{site.phoneDisplay}</a>, {site.hours}, or email{' '}
            <a href={`mailto:${site.email}`} className="link">{site.email}</a>. We can also take your
            estimate request by phone.
          </p>
        </div>
      </div>
    </div>
  )
}
