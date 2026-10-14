import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    // src/lib holds site config + page data, which carry class names (e.g. image
    // focal points). Tailwind only emits classes it finds inside these globs, so
    // leaving this out makes those classes silently compile to nothing.
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Art direction: Codex, 2026-10-13. Green #9EEF3E is the yard-sign brand
      // color; it only ever carries #141414 text, never sits as text on light.
      colors: {
        green: { DEFAULT: '#9EEF3E', press: '#8AD92F' },
        ink: { DEFAULT: '#141414', soft: '#1F1F1F' },
        surface: '#F3F5F1',
        muted: '#50574F',
        line: '#D7DDD3',
        control: '#70786B',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-montserrat)', 'var(--font-inter)', 'sans-serif'],
      },
      maxWidth: { site: '1280px' },
      letterSpacing: { label: '0.12em' },
    },
  },
  plugins: [],
}

export default config
