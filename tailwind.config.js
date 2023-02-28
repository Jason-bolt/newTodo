/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      body: "Inter",
    },
    colors: {
      gray: "#F4F4F4",
      white: "#FFFFFF",
      black: "#000000",
      violet: "#5222D0",
    },
    extend: {
      fontSize: {
        "40px": "40px",
      },
      width: {
        "800px": "800px",
        "347px": "347px",
        "333px": "333px",
      },
      lineHeight: {
        "25.6px": "25.6px",
        "48.41px": "48.41px",
      },
      height: {
        "347px": "347px",
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
