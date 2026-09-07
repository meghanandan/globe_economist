/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          primary: '#0B1D33',
          deep: '#07182C',
          light: '#132C4A',
        },
        ivory: {
          warm: '#F7F3E8',
          paper: '#FBF9F3',
          subtle: '#EDE7D8',
        },
        gold: {
          muted: '#B79A58',
          dark: '#967B3F',
          light: '#D4BA7B',
        },
        charcoal: '#252525',
        muted: '#6D6A62',
        editorial: {
          border: '#DDD6C8',
          rule: '#D3CBBC',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Source Serif 4"', 'Georgia', 'serif'],
        sans: ['"Source Sans 3"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      letterSpacing: {
        'editorial': '0.12em',
        'loose-editorial': '0.18em',
      },
      borderRadius: {
        DEFAULT: '2px',
        'sm': '1px',
        'md': '3px',
      },
    },
  },
  plugins: [],
}
