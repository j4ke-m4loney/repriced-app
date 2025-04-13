/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        'xxl': '1880px',   // 6 cards
        'xlx': '1640px',   // 5 cards
        'xl': '1128px',    // 4 cards (redefining xl if desired)
        'lg': '950px',     // 3 cards
        'sm': '550px',     // 2 cards
      },
      colors: {
        repricedGreen: '#52CC60'
      }
    }
  },
  plugins: [],
}