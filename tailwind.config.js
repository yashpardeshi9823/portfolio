/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#05070d',
        night: '#0a1020',
        gold: { 200: '#f8e7b5', 300: '#f1d48a', 400: '#e2b85c', 500: '#c99a3e' },
      },
      fontFamily: {
        display: ['Anton', 'Impact', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        script: ['"Mrs Saint Delafield"', 'cursive'],
      },
    },
  },
  plugins: [],
}
