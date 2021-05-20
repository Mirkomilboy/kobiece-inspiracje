module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato"],
      },
      colors: {
        gray: {
          light: '#8b8b8b',
        },
        footer: {
          bg: '#3a3939',
          border: '#707070',

        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
