/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #BB006E, #FB7E10)', // Custom gradient
      },
      keyframes: {
        'loading': {
          '0%': { height: '10px' },
          '50%': { height: '50px' },
          '100%': {height: '10px'}
        }
      },
      animation: {
        'loading-1': 'loading 1s 0s ease-in-out infinite',
        'loading-2': 'loading 1s 0.1s ease-in-out infinite',
        'loading-3': 'loading 1s 0.2s ease-in-out infinite',
        'loading-4': 'loading 1s 0.3s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}