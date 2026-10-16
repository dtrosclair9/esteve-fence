'use client'

import { useState } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

// Formspree form (recipient is set in the Formspree dashboard).
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mnpjllzv'

const SERVICES = [
  'Wood privacy fence',
  'Aluminum fence',
  'Vinyl fence',
  'Chain link fence',
  'Automatic or driveway gate',
  'Brick columns',
  'Pool fence',
  'Farm or ranch fence',
  'Commercial fence',
  'Fence repair',
  'Concrete driveway, patio or slab',
  'Something else',
]

// Feeds the "how much does Google send us" baseline, so Google stays first.
const SOURCES = [
  'Google',
  'Facebook',
  'Saw a yard sign',
  'Saw your truck or a job you did',
  'Friend, family or neighbor',
  'Worked with you before',
  'Other',
]

const field =
  'w-full rounded border border-control bg-white px-4 py-3 text-[16px] text-ink placeholder:text-muted focus:border-ink focus:outline-none focus:ring-2 focus:ring-ink'
const lbl = 'mb-1.5 block text-[15px] font-semibold text-ink'

export default function ContactForm() {
  const [status, setStatus] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')
    const form = e.currentTarget
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        const json = await res.json().catch(() => null)
        setErrorMessage(json?.errors?.[0]?.message ?? 'Something went wrong. Please call us at (985) 414-0858.')
        setStatus('error')
      }
    } catch {
      setErrorMessage('Network error. Please check your connection or call (985) 414-0858.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div role="status" className="border-t-[3px] border-green bg-surface p-8">
        <p className="font-display text-[22px] font-bold">Thanks, we got it.</p>
        <p className="mt-2 text-[17px] leading-[1.6]">We will call you back to set up your free estimate. If it is urgent, call (985) 414-0858.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="_subject" value="New estimate request from estevesfencecompany.com" />
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={lbl}>Name <span aria-hidden="true">*</span></label>
          <input id="name" name="name" type="text" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="phone" className={lbl}>Phone <span aria-hidden="true">*</span></label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className={field} />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={lbl}>Email</label>
          <input id="email" name="email" type="email" autoComplete="email" className={field} />
        </div>
        <div>
          <label htmlFor="town" className={lbl}>Town or job address</label>
          <input id="town" name="town" type="text" autoComplete="street-address" className={field} placeholder="Thibodaux, Houma, Raceland..." />
        </div>
      </div>
      <div>
        <label htmlFor="service" className={lbl}>What do you need?</label>
        <select id="service" name="service" className={field} defaultValue="">
          <option value="">Choose one</option>
          {SERVICES.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="source" className={lbl}>How did you find us?</label>
        <select id="source" name="source" className={field} defaultValue="">
          <option value="" disabled>Choose one</option>
          {SOURCES.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className={lbl}>Tell us about the job <span aria-hidden="true">*</span></label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${field} resize-y`}
          placeholder="Roughly how many feet, height, gates, any old fence to remove..."
        />
      </div>
      <p className="text-[14px] text-muted">Fields marked * are required.</p>
      {status === 'error' && (
        <p role="alert" className="rounded border border-red-700 bg-red-50 px-4 py-3 text-[15px] text-red-800">{errorMessage}</p>
      )}
      <button type="submit" disabled={status === 'loading'} className="btn-green w-full disabled:cursor-not-allowed disabled:opacity-60">
        {status === 'loading' ? 'Sending...' : 'Request my free estimate'}
      </button>
    </form>
  )
}
