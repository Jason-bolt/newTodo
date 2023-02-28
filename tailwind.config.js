/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: "Inter",
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
        "641px": "641px",
      },
      lineHeight: {
        "25.6px": "25.6px",
        "48.41px": "48.41px",
      },
      height: {
        "347px": "347px",
      },
      padding: {
        "18px": "18px",
        "19px": "19px",
        "22px": "22px",
        "23px": "23px",
        "26px": "26px",
        "42px": "42px",
        "24px": "24px",
        "27px": "27px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
