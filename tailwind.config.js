/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width'
    },boxShadow: {
      '3xl': '100px 0 0 0 rgba(0, 0, 0, 0.3)',
    },rotate:{
      '70': '70deg',
    },fontFamily: {
      sans: ['var(--heading-text)']
    }
    },
  },
  plugins: [],
}
