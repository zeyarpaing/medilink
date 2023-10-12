const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './assets/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  plugins: [
    nextui({
      addCommonColors: false,
      defaultExtendTheme: 'light',
      defaultTheme: 'light',
      layout: {
        radius: {
          large: '10px', // rounded-large
          medium: '8px', // rounded-medium
          small: '6px', // rounded-small
        },
      },
      themes: {
        dark: {
          colors: {
            background: '#101010',
            focus: '#F13456',
            foreground: '#f3f3f3',
            primary: { DEFAULT: '#F13456', foreground: '#fff' },
            secondary: 'rgba(239, 50, 84, 0.25)',
          },
          extend: 'light',
        },
        light: {
          colors: {
            focus: '#EF3254',
            primary: { DEFAULT: '#EF3254', foreground: '#fff' },
            secondary: 'rgba(239, 50, 84, 0.25)',
          },
          foreground: '#101010',
        },
      },
    }),
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
};
