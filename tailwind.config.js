/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      dropShadow:{
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)'
      },
      fontFamily:{
        Playwrite:['Playwrite NO', 'sans-serif']
      },
    },
  },
  plugins: [],
}

