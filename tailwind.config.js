/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        beige: '#EFE7DC',
        latte: {
          DEFAULT: '#A68966',
          hover: '#8C6F52',
          soft: '#C8B49B',
        },
        espresso: {
          DEFAULT: '#2C241E',
          muted: '#5C4F45',
          light: '#7A6C60',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        'arch': '9999px 9999px 1.5rem 1.5rem',
        'arch-inner': '9999px 9999px 0.875rem 0.875rem',
        'arch-sm': '9999px 9999px 1rem 1rem',
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
