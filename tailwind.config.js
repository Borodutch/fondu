/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  purge: ['./public/index.html', './src/**/!(tailwind).{ts,tsx}'],
  darkMode: 'class',
  theme: {
    borderColor: (theme) => ({
      ...theme('colors'),
      active: 'var(--color-active)',
      inactive: 'var(--color-inactive)',
      border: 'var(--border)',
    }),
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        white: 'var(--color-white)',
        // active: 'var(--color-active)',
        // inactive: 'var(--color-inactive)',
        base: {
          background: 'var(--background)',
          backgroundMain: 'var(--background-main)',
          backgroundMainFrame: 'var(--background-main-frame)',
          backgroundActiveFrame: 'var(--background-active-frame)',
          backgroundLicenseField: 'var(--background-license-field)',
          active: 'var(--color-active)',
          inactive: 'var(--color-inactive)',
          line: 'var(--line-adress)',
          logo: 'var(--logo)',

          // borderActive: 'var(--color-active)',
          // borderinactive: 'var(--color-inactive)',
          // buttonActive: 'var(--color-active)'
          //
          blue: 'var(--color-blue)',
          gray: 'var(--color-gray)',
          lightgray: 'var(--color-lightgray)',
          darkgray: 'var(--color-darkgray)',
          black: 'var(--color-black)',
          dark: 'var(--color-dark)',
          root: 'var(--background-root)',
          white: 'var(--color-white)',
          card: 'var(--background-card)',
          contract: 'var(--background-conract)',
          light: 'var(--background-light)',
        },
        text: {
          textMain: 'var(--text-main)',
          textNetwork: 'var(--text-network)',
          textActive: 'var(--color-active)',
          textInactive: 'var(--color-inactive)',
          textButton: 'var(--text-button)',
          //
          gray: 'var(--text-gray)',
          lightgray: 'var(--text-lightgray)',
          white: 'var(--text-white)',
          black: 'var(--text-black)',
        },
        button: {
          active: 'var(--color-active)',
          inactive: 'var(--color-inactive)',
          //
          red: 'var(--button-red)',
          dark: 'var(--buttton-dark)',
        },
        // light: {
        //   purple: '#C751FF',
        // },
      },
      borderRadius: {
        base: '8px',
      },
    },
  },
}
