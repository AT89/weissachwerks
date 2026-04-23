/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 60px rgba(255,255,255,0.08)',
      },
    },
  },
  plugins: [],
};

module.exports = config;
