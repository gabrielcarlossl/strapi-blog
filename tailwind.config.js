/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
       
        'sm': {'max': '639px'},
      }
    },
  },
  plugins: [],
}

