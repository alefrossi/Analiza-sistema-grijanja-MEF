/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          800: '#1f4e8c',
          700: '#2563a8',
          600: '#5a9bd5',
        },
      },
    },
  },
  plugins: [],
};
