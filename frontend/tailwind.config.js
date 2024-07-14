/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'openSans': ["Open Sans", 'sans-serif'],
      },
      colors: {
        'primary-light': '#e8f7fc',
        'primary-light-hover': '#dcf3fa',
        'primary-light-active': '#b7e6f5',
        'primary-normal': '#16afe0',
        'primary-normal-hover': '#149eca',
        'primary-normal-active': '#128cb3',
        'primary-dark': '#1183a8',
        'primary-dark-hover': '#1183a8',
        'primary-dark-active': '#0a4f65',
        'primary-darker': '#083d4e',
        'neutral-light': '#ffffff',
        'neutral-light-hover': '#fefefe',
        'neutral-light-active': '#fdfdfd',
        'neutral-normal': '#fafafa',
        'neutral-normal-hover': '#e1e1e1',
        'neutral-normal-active': '#c8c8c8',
        'neutral-dark': '#bcbcbc',
        'neutral-dark-hover': '#969696',
        'neutral-dark-active': '#707070',
        'neutral-darker': '#393939'
      }
    },
  },
  plugins: [],
};
