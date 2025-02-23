/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{jsx,tsx,mdx}",
    "./src/ui/**/*.{jsx,tsx,mdx}",
    "./src/app/**/*.{jsx,tsx,mdx}",
    "./src/app/*.{jsx,tsx,mdx}",
    "./src/demos/**/*.{jsx,tsx,mdx}",
    './src/lib/**/*.{jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('../assets/background.jpg') ",
        'paper-bg': "url(../assets/paper.jpg)"
      },
      colors:{
        primary: '#451A17',
        accent: '#e53e3e'
      },
      fontFamily: {
        'top-secret': ['Top Secret Stamp'],
      },
    },
  },
  plugins: [],
}