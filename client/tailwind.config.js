/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      xs: '10px',
      sm: '16px',
      base: '18px',
      xl: '24px',
      '2xl': '27px',
      '3xl': '37px',
      '4xl': '48px',
      '5xl': '66px',
      '6xl': '81px',
      '7xl': '93px',
      '8xl': '120px',
    },
    
    extend: {
      colors: {
        "primary-100" : "#1D2F39",
        "primary-200": "#DECFB1",
        "primary-300": "#8E979C",
        "primary-400": "#1492E6",
      },

      fontFamily: {
        'Neue' : ['neue-haas-grotesk-display', 'sans-serif']
      }
    },
  },
  plugins: [],
}