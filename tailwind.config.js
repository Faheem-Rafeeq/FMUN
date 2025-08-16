module.exports = {
  theme: {
    extend: {
      animation: {
        'fade-in-down': 'fadeInDown 1s ease-out',
        'float': 'float 6s infinite ease-in-out',
        'float-delay': 'float 6s infinite ease-in-out 2s',
        'bounce': 'bounce 2s infinite',
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
}