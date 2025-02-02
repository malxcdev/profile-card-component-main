/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",],
  theme: {
    extend: {
      fontFamily: {
        'kumbh-sans': ['Kumbh Sans', 'sans-serif'],
      },
    },
    colors: {
      'dark-cyan': 'hsl(185, 75%, 39%)',
      'very-dark-desaturated-blue': 'hsl(229, 23%, 23%)',
      'dark-grayish-blue': 'hsl(227, 10%, 46%)',
      'dark-gray': 'hsl(0, 0%, 59%)',
      'white': 'hsl(0, 0%, 100%)',
    },
  },
  plugins: [],
}

