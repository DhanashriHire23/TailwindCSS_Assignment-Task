/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1DA1F2',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },

    },
  },
  plugins: [],
}

