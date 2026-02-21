/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#050b16',
        'primary-blue': '#0b1f3a',
        'accent-green': '#00e5ff',
      },
    },
  },
  plugins: [],
}
