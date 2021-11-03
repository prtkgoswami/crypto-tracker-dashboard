module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        accent: '#FF5300',
        sell: '#EF4444',
        buy: '#22C55E',
        background: '#2d2d2d',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
