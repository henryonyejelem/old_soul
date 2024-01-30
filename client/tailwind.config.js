/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    boxShadow: {
      'inner': 'inset 0 2px 8px 0 rgb(0 0 0 / 0.75)',
    },

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
      margin: {
        'xl': '20px',
      },

      lineHeight: {
        'base': '22px',
        'xl' : '40px',
        '3xl': '90px',
      },

      colors: {
        "primary-100" : "#1D2F39",
        "primary-200": "#DECFB1",
        "primary-300": "#8E979C",
        "primary-400": "#2859AD",
      },

      fontFamily: {
        'Neue' : ['neue-haas-grotesk-display', 'sans-serif'],
        'NewYork' : ['NewYork', 'serif']
      }
    },
  },
  plugins: [],
}