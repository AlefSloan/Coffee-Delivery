/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        'yellow-dark': '#C47F17',
        'yellow-normal': '#DBAC2C',
        'yellow-light': '#F1E9C9',
        'purple-dark': '#4B2995',
        'purple-normal': '#8047F8',
        'purple-light': '#EBE5F9',
        'base-title': '#272221',
        'base-subtitle': '#403937',
        'base-text': '#574F4D',
        'base-label': '#8D8686',
        'base-hover': '#D7D5D5',
        'base-button': '#E6E5E5',
        'base-input': '#EDEDED',
        'base-card': '#F3F2F2',
        background: '#FAFAFA',
        white: '#FFFFFF',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        baloo: ['"Baloo 2"', 'cursive'],
      },
      fontSize: {
        'title-xl': ['3rem', '1.3'],
        'title-lg': ['2rem', '1.3'],
        'title-md': ['1.5rem', '1.3'],
        'title-sm': ['1.25rem', '1.3'],
        'title-xs': ['1.125rem', '1.3'],
        'text-lg': ['1.25rem', '1.3'],
        'text-md': ['1rem', '1.3'],
        'text-sm': ['0.875rem', '1.3'],
        'text-xs': ['0.75rem', '1.3'],
        'tag': ['0.625rem', '1.3'],
        'button-lg': ['0.875rem', '1.6'],
        'button-md': ['0.75rem', '1.6'],
      },
    },
  },
  plugins: [],
};

