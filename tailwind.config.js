/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "white",
      "cyan-dark": "#5ba4a4",
      "cyan-light": "	#effafa",
      "cyan-light-2": "	#eef6f6",
      "cyan-dark-grayish": "#7b8e8e",
      "cyan-very-dark": "#2c3a3a",
    },
    extend: {
      backgroundImage: {
        // "header-desktop": "url(../public/images/bg-header-desktop.svg)",
      },
    },
  },
  fontFamily: {
    sans: ["League Spartan", "sans-serif"],
  },
  plugins: [],
};

