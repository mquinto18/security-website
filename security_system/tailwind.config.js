/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, rgba(71, 75, 255, 0.6), rgba(26, 5, 153, 0.1))",
        "custom-white": "rgba(255, 255, 255, 0.6)",
        "custom-blue": "rgba(0, 163, 255, 0.6)",
      },
      borderRadius: {
        "30px": "30px",
      },
      borderWidth: {
        "1px": "1px",
      },
      colors: {
        primary: "#2B09FF",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        della: ["Della Respira"],
        sonsie: ["Sonsie One", "serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "630px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    borderColor: {
      glass: "rgba(255, 255, 255, 0.35)",
    },
  },
  plugins: [],
};
