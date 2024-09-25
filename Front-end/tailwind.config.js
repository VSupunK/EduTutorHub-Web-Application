/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F7931E',
        secondary: '#ffed4a',
        danger: '#e3342f',
        success: '#38c172',
        accent: '#9f7aea',
      },
    },
  },
  plugins: [],
}