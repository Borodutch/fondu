/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  purge: ['./public/index.html', './src/**/!(tailwind).{ts,tsx}'],
  darkMode: 'class',
  theme: {
    borderColor: (theme) => ({
      ...theme('colors'),
      active: 'var(--main-color)',
      card: 'var(--card-border)',
      input: 'var(--input-border)',
    }),
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        main: 'var(--main-color)',
        'logo-from': 'var(--logo-from)',
        'logo-to': 'var(--logo-to)',
        background: {
          main: 'var(--background)',
          section: 'var(--background-section)',
          card: 'var(--background-card)',
        },
        text: {
          main: 'var(--text-main)',
        },
      },
      borderRadius: {
        base: '8px',
      },
    },
  },
}
