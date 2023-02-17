/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
        'marks': {
          100: '#1a7281',
          200: '#1b646c',
          300: '#1b5761',
          400: '#1d5454',
          500: '#2c4b4b',
          600: '#1c5474',
          700: '#1c3a3e',
          800: '#1c242c',
          900: '#1c1e1e',
        }
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}