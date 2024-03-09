/** @type {import('tailwindcss').Config} */

import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Sofia Sans"', "Roboto", "sans-serif", ...fontFamily.sans],
    },
    extend: {
      colors: {
        main: {
          darkGray: "#2B2C36",
          lightGray: "#BAC1CC",
        },
      },
    },
  },
  plugins: [],
};
