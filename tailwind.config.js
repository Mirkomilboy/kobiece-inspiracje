module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brands: {
          'dark': '#151515',
          'orange': '#ffa500',
          'lifestyle': '#fff5f3',
          'pelorous': '#3EA0BB',
          gray: {
            100: '#6f6f6f',
            200: '#ebebeb',
            500: '#383838',
            600: '#525252',
            700: '#3a3939'
          },
          socials: {
            'facebook': '#45629f',
            'pinterest': '#e60023',
            'instagram': '#125d8f',
            'youtube': '#c61d23'
          }
        }
      },
      spacing: {
        15: '3.75rem',
        25: '6.25rem',
        30: '7.5rem',
      },
      fontSize: {
        'title': ['22px', '26px'],
        'sub-title': ['15px', '18px']
      },
      fontFamily: {
        lato: ["Lato", 'sans-serif'],
      },
      maxWidth: {
        base: '1170px'
      },
      zIndex: {
        '1000': '1000',
        '100': '100'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
