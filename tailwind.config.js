/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Times New Roman']
      },
      width: {
        sm: '300px',
        md: '1200px'
      },
      height: {
        sm: '200px',
        md: '800px',
      },
    },
  },
  plugins: [],
}
