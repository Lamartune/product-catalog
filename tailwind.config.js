/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barcode: ['"Libre Barcode 128 Text"', "cursive"],
        inter: ['"Inter"', "cursive"]
      }
    }
  },
  plugins: []
};
