module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "767px",
      lg: "968px",
      xl: "1024px",
      "2xl": "1280px",
      "3xl": "1536px",
    },
    fontFamily: {
      body: ["Open Sans", "sans-serif"],
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 800,
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#0d1111",
      white: "#ffffff",
      blue: "#1ebfc1",
      grey: "#9da6a5",
      darkGrey: "#767e7e",
    },
    lineHeight: {
      title: 1.55,
      text: 1.68,
    },
    extend: {},
  },
  plugins: [],
};
