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
        white: "var(--color-white)",
        base: {
          blue: "var(--color-blue)",
          gray: "var(--color-gray)",
          lightgray: "var(--color-lightgray)",
          darkgray: "var(--color-darkgray)",
          black: "var(--color-black)",
          dark: "var(--color-dark)",
          root: "var(--background-root)",
          white: "var(--color-white)",
          card: "var(--background-card)",
          contract: "var(--background-conract)",
          light: "var(--background-light)",
        },
        text: {
          gray: "var(--text-gray)",
          lightgray: "var(--text-lightgray)",
          white: "var(--text-white)",
          black: "var(--text-black)",
        },
        button: {
          red: "var(--button-red)",
          dark: "var(--buttton-dark)",
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
}
