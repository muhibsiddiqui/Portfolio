/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        page: 'rgb(var(--c-bg) / <alpha-value>)',
        'page-soft': 'rgb(var(--c-bg-soft) / <alpha-value>)',
        card: 'rgb(var(--c-card) / <alpha-value>)',
        'card-solid': 'rgb(var(--c-card-solid) / <alpha-value>)',
        line: 'rgb(var(--c-border) / <alpha-value>)',
        primary: 'rgb(var(--c-text) / <alpha-value>)',
        muted: 'rgb(var(--c-muted) / <alpha-value>)',
        faint: 'rgb(var(--c-faint) / <alpha-value>)',
        nav: 'rgb(var(--c-nav) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
        marquee: 'marquee 38s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
