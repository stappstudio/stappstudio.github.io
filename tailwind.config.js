module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'stapp-pink': '#ff0078',
        'stapp-blue': '#020042'
      }
    },
  },
  variants: {
    extend: {
      backgroundOpacity: ['active']
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
