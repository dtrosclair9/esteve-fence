import Link from 'next/link'
import { site } from '@/lib/site'

type Props = { heading?: string; text?: string }

export default function CtaBand({
  heading = 'Get a free fence estimate',
  text = 'Call or send the form and we will set up a time to come measure.',
}: Props) {
  return (
    <section className="bg-green">
      <div className="wrap flex flex-col gap-8 py-14 md:py-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-[30px] leading-[1.1] md:text-[44px]">{heading}</h2>
          <p className="mt-4 text-[17px] leading-[1.6] text-ink md:text-lg">{text}</p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link href="/contact" className="btn-ink">Request an estimate</Link>
          <a href={`tel:${site.phoneRaw}`} className="text-[20px] font-bold text-ink underline decoration-2 underline-offset-4">
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
