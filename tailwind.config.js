/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '720px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      // .fade-appear {
      //   opacity: 0;
      // },
      
      // .fade-appear-active {
      //   opacity: 1;
      //   transition: opacity 1000ms;
      // }
    },
  },
  plugins: [],
}
