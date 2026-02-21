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
        surface: {
          light: '#F7F7F7',
          dark: '#1C2333',
        },
        card: {
          light: '#FFFFFF',
          dark: '#232B3E',
        },
      },
      fontFamily: {
        rounded: ['Nunito', 'system-ui', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'breathe': 'breathe 2.5s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'celebrate': 'celebrate 0.5s ease-out',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.06)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        celebrate: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(88, 204, 2, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(88, 204, 2, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
