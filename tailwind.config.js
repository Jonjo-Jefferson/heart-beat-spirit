/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      Space: ['Aref Ruqaa Ink', 'serif'],
      Montserrat: ['Montserrat Alternates', 'sans-serif'],
      OpenSans: ['Open Sans', 'sans-serif'],
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#8ECAE6',
          secondary: '#D69B8D',
          accent: '#9D21E6',
          neutral: '#3D4451',
          'base-100': '#FFFFFF',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
      'dark',
      'cupcake',
    ],
  },
};
