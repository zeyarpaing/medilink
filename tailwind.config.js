const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
/* eslint-disable max-len */
module.exports = {
  content: [
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './assets/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  plugins: [
    require('@headlessui/tailwindcss'),
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
            focus: '#ef3254',
            foreground: '#f3f3f3',
            primary: { DEFAULT: 'rgba(241, 52, 86, 1)', foreground: '#fff' },
            secondary: 'rgba(25, 140, 210, 1)',
          },
          extend: 'light',
        },
        light: {
          colors: {
            focus: '#ef3254',
            primary: { DEFAULT: 'rgba(241, 52, 86, 1)', foreground: '#fff' },
            secondary: 'rgba(25, 140, 210, 1)',
          },
          foreground: '#101010',
        },
      },
    }),
  ],
  safelist: [
    {
      pattern:
        /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ['hover', 'ui-selected'],
    },
    {
      pattern:
        /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ['hover', 'ui-selected'],
    },
    {
      pattern:
        /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ['hover', 'ui-selected'],
    },
    {
      pattern:
        /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
  ],
  theme: {
    extend: {
      borderRadius: {
        'tremor-default': '0.5rem',
        'tremor-full': '9999px',
        'tremor-small': '0.375rem',
      },
      boxShadow: {
        'dark-tremor-card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'dark-tremor-dropdown': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        // dark
        'dark-tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'tremor-card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'tremor-dropdown': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        // light
        'tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      },
      colors: {
        // dark mode
        'dark-tremor': {
          background: {
            DEFAULT: '#111827', // gray-900
            emphasis: '#d1d5db', // gray-300
            muted: '#131A2B', // custom
            subtle: '#1f2937', // gray-800
          },
          border: {
            DEFAULT: '#1f2937', // gray-800
          },
          brand: {
            DEFAULT: '#3b82f6', // blue-500
            emphasis: '#60a5fa', // blue-400
            faint: '#0B1229', // custom
            inverted: '#030712', // gray-950
            muted: '#172554', // blue-950
            subtle: '#1e40af', // blue-800
          },
          content: {
            DEFAULT: '#6b7280', // gray-600
            emphasis: '#e5e7eb', // gray-200
            inverted: '#000000', // black
            strong: '#f9fafb', // gray-50
            subtle: '#4b5563', // gray-600
          },
          ring: {
            DEFAULT: '#1f2937', // gray-800
          },
        },
        primary: { DEFAULT: 'rgba(241, 52, 86, <alpha-value>)', foreground: '#fff' },
        secondary: 'rgba(25, 140, 210, <alpha-value>)',
        // light mode
        tremor: {
          background: {
            DEFAULT: '#ffffff', // white
            emphasis: '#374151', // gray-700
            muted: '#f9fafb', // gray-50
            subtle: '#f3f4f6', // gray-100
          },
          border: {
            DEFAULT: '#e5e7eb', // gray-200
          },
          brand: {
            DEFAULT: '#3b82f6', // blue-500
            emphasis: '#1d4ed8', // blue-700
            faint: '#eff6ff', // blue-50
            inverted: '#ffffff', // white
            muted: '#bfdbfe', // blue-200
            subtle: '#60a5fa', // blue-400
          },
          content: {
            DEFAULT: '#6b7280', // gray-500
            emphasis: '#374151', // gray-700
            inverted: '#ffffff', // white
            strong: '#111827', // gray-900
            subtle: '#9ca3af', // gray-400
          },
          ring: {
            DEFAULT: '#e5e7eb', // gray-200
          },
        },
      },
      fontSize: {
        'tremor-default': ['0.875rem', { lineHeight: '1.25rem' }],
        'tremor-label': ['0.75rem'],
        'tremor-metric': ['1.875rem', { lineHeight: '2.25rem' }],
        'tremor-title': ['1.125rem', { lineHeight: '1.75rem' }],
      },
    },
  },
};
