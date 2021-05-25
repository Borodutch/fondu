/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  purge: ["./public/index.html", "./src/**/!(tailwind).{ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        base: {
          blue: "#6486FF",
          gray: "#F9F9F9",
          black: "#05050F",
          dark: "#0F0F2A",
        },
        textColor: {
          gray: "#F9F9F9",
          dark: "#f7fafc",
        },
        button: {
          red: "#FF6464",
          dark: "#2d3748",
        },
        light: {
          purple: "#C751FF",
        },
      },
      borderRadius: {
        base: "8px",
      },
    },
  },
  // dark: {
  //   colors: {
  //     base: {
  //       colorPrimary: "#2d3748",
  //       colorSecondary: "#283141",
  //     },
  //     button: {
  //       red: "#FF6464",
  //     },
  //     light: {
  //       purple: "#C751FF",
  //     },
  //   },
  //   borderRadius: {
  //     base: "8px",
  //   },
  // },
}
