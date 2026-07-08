/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        tortoise: {
          primary: '#58CC02',
          'primary-dark': '#46A302',
          'primary-light': '#7ED839',
          // AA-safe fill under white text (5.38:1 on white; matches the app's CTA decision)
          cta: '#2F7A00',
          'cta-pressed': '#2C6B00',
          shell: '#FF9600',
          'shell-dark': '#E08600',
          'shell-light': '#FFB040',
          trail: '#2EC27E',
          'trail-dark': '#26A269',
          'trail-light': '#57D9A3',
          sky: '#1CB0F6',
          'sky-dark': '#1899D6',
          'sky-light': '#4DC4F7',
          xp: '#FFC800',
          streak: '#FF4B4B',
          error: '#EA2B2B',
          warning: '#FF9600',
          purple: '#CE82FF',
          'purple-dark': '#A855F7',
          pink: '#FF86D0',
        },
        // App's real dark-navy identity (from DesignSystem/Tokens/Primitives.swift)
        ink: {
          900: '#0D1117', // near-black hero / page base
          850: '#131A2B', // signature navy
          800: '#1A1A2E', // celebration card
          750: '#1C2333', // sunken
          700: '#232B3E', // card / raised
          650: '#2A3347', // elevated
        },
        // Text on dark
        cloud: {
          DEFAULT: '#F2F4F8', // primary text on navy
          muted: '#AEB6C6',   // secondary
          faint: '#98A4B8',   // tertiary — AA (>=5:1) on ink-650/700/800 card surfaces
        },
      },
      fontFamily: {
        rounded: ['var(--font-nunito)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-nunito)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'lift': '0 10px 40px -12px rgba(0,0,0,0.55)',
        'glow-green': '0 0 40px -8px rgba(88,204,2,0.35)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
