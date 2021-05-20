module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
