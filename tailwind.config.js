const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: { DEFAULT: '#EF3254', foreground: '#fff' },
            secondary: 'rgba(239, 50, 84, 0.25)',
          },
        },
      },
      layout: {
        radius: {
          medium: '8px', // rounded-medium
          large: '10px', // rounded-large
          small: '6px', // rounded-small
        },
      },
      defaultExtendTheme: 'light',
      addCommonColors: false,
      defaultTheme: 'light',
    }),
  ],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './assets/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: 'class',
};
