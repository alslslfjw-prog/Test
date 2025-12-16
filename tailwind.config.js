/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // We will load 'Cairo' font later
        sans: ['Cairo', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#2C7A7B', // Teal color from your images
          dark: '#285E61',
        },
        secondary: {
          DEFAULT: '#553C9A', // Purple color from your images
        }
      }
    },
  },
  plugins: [],
}