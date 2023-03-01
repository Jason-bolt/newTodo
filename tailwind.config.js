const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: "Inter",
    },
    extend: {
      colors: {
        gray: "#F4F4F4",
        arrow: "#545454",
        checkGray: "#D9D9D9",
        checked: "#5F8BFB",
        white: "#FFFFFF",
        black: "#000000",
        violet: "#5222D0",
        delete: "#DD6B6B",
        edit: "#5F8BFB",
        prioritybg: "#EFEFEF",
      },
      fontSize: {
        "40px": "40px",
      },
      width: {
        "347px": "347px",
        "333px": "333px",
        "403.33px": "403.33px",
        "641px": "641px",
        "800px": "800px",
      },
      lineHeight: {
        "19.2px": "19.2px",
        "19.36px": "19.36px",
        "25.6px": "25.6px",
        "48.41px": "48.41px",
        "72px": "72px",
      },
      height: {
        "347px": "347px",
      },
      margin: {
        "23.17px": "23.17px",
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
});
