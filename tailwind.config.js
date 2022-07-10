/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'theme-light': '#D99E82',
        'theme-dark': '#AA3C3C',
        'theme-white': '#FFFFFF',
        'theme-black': '#373F41',
        'theme-coffee': '#C1694F',
        'theme-gray': '#4F4F4F',
        'theme-button': '#C77968',
        'theme-button-opacity': '#E9C9C3',
        'theme-footer-text': '#3E3E3E',
        'theme-footer-gray': '#838383',
      },
      spacing: {
        '128': '32rem',
        '112': '28rem',
      },
      boxShadow: {
        'custom': '10px 11px 10px 10px rgba(0, 0, 0, 0.3)',
      }
    }
  }
}
