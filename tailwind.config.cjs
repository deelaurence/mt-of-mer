/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screen: {
      sm: "480px",
      bmd: "600px",
      md: "768px",
      lg: "900px",
      xl: "1440px",
    },
    extend: {
      colors: {
        darkShade: "#e9e4d4",
        // darkShade: "#C3B091",
        lightShade: "#212121",
        faded: "#959492",
        button: "#1f456e",
        playground: "#E0E0E0",
        transluscent: "#2c2c2c",
        opaque: "#B8B8B8",
        yellowBg: "#ffdd8b"
      },
    },
  },
  plugins: [],
};
