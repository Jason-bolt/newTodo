/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      body: "Inter",
    },
    colors: {
      gray: "#DBDBDB",
      white: "#FFFFFF",
      black: "#000000",
      violet: "#5222D0",
    },
    extend: {
      width: {
        "800px": "800px",
      },
      padding: {
        "23px": "23px",
        "22px": "22px",
        "42px": "42px",
        "24px": "24px",
        "27px": "27px",
      },
    },
  },
  plugins: [],
};
