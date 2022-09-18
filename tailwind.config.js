/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      Space: ['Aref Ruqaa Ink', 'serif'],
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#4bc6fb',
          secondary: '#fb804b',
          accent: '#37cdbe',
          neutral: '#3d4451',
          'base-100': '#ffffff',
        },
      },
      'dark',
      'cupcake',
    ],
  },
};
