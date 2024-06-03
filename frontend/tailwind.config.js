/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@spartan-ng/ui-core/hlm-tailwind-preset')],
  content: [
    "./src/**/*.{html,ts}",
    './components/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
      colors: {
        main: {
          blue: {
            100: '#0A65CC',
            200: '#0066FF',
            300: '#041938',
            400: '#042852'
          },
          gray: {
            100: '#F1F2F4',
            200: '#E4E5E8',
            300: '#CEE0F5',
            400: '#5E6670',
            500: '#9199A3',
            600: '#474C54',
            700: '#DADDE5',
            800: '#6F798C'
          },
          lightBlue: {
            100: '#E7F0FA',
            200: '#99C2FF'
          },
          green: {
            100: '#E7F6EA'
          },
          red: {
            100: '#FCEEEE',
            200: '#E05151'
          },
          rose: {
            100: '#EA4C89'
          },
          yellow: {
            100: '#FFAA00'
          },
        }
      },
      spacing: {
        '50': '12.5rem', // 200px
        '80': '20rem',   // 320px
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}

