/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontWeight: {
        "medium-bold": "580",
      },
      colors: {
        primary: {
          shades: "#211A41",
          DEFAULT: "#F42272", //
          tint: "#493991",
        },

        secondary: {
          shades: "#EDEBF4",
          DEFAULT: "#F0F3F5", //
          tint: "#fdf3e0",
        },

        hover: {
          shades: "#38B2AC",
          DEFAULT: "#212529", //
          tint: "#defff4",
        },

        blackshade: {
          shades: "#F56565",
          DEFAULT: "#15191d", //
          tint: "#fdeaef",
        },

        info: {
          shades: "#805AD5",
          DEFAULT: "#553C9A", //
          tint: "#E9D8FD",
          light: "#3F4784",
        },

        accent: {
          shades: "#d9d9d9",
          DEFAULT: "#3066BE", //
          tint: "#600047",
          light: "#f1f1f1be",
        },
        green: {
          shades: "#1F8946",
          DEFAULT: "#5ef85eba", //
          tint: "#c0dec0c9",
          light: "#c0dec00f",
        },
        grey: {
          shades: "#AEB3CD",
          DEFAULT: "#535875", //
          tint: "#f6f7fb",
        },
        white: {
          shades: "#FAFAFA",
          DEFAULT: "#FFFFFF", //
          tint: "#f6f7fb",
        },
        black: {
          shades: "#3F47841B",
          DEFAULT: "#000000", //
          tint: "#ebecf2",
          light: "#28282B",
        },
      },
      fontFamily: {
        BlinkMacSystemFont: ["BlinkMacSystemFont", "sans"], //
      },
    },
  },
  plugins: [],
};
