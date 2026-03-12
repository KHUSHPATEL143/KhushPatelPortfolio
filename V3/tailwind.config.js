/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg:      '#0a0a0a',
        surface: '#111111',
        border:  '#1e1e1e',
        amber:   '#e8a838',
        'amber-dim': '#c4882a',
        soft:    '#2a2520',
        text:    '#e8e2d9',
        muted:   '#6b6560',
      },
      fontFamily: {
        serif:  ['"DM Serif Display"', 'serif'],
        mono:   ['"DM Mono"', 'monospace'],
        sans:   ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
