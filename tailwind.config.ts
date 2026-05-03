import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bone: '#F4F1EC',
        bone2: '#EDE7DD',
        ink: '#0A0908',
        ink2: '#1A1815',
        rust: '#B82E1F',
        rust2: '#7A1F15',
        gold: '#C9A86B',
        muted: '#8A847C',
      },
      fontFamily: {
        sans: ['var(--font-inter-tight)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-instrument)', 'Georgia', 'serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tight2: '-0.025em',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'smooth': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
