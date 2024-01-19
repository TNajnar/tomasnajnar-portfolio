import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: '#111111',
        white: '#FFF',
        gray: {
          DEFAULT: '#ADB7BE',
          'light-1': '#8d8d8d',
          'dark-1': '#262626',
        },
        yellow: '#feda00',
      },
      fontSize: {
        'custom-title': '34px',
      },
      height: {
        dscreen: '100dvh',
      },
      order: {
        '998': '998'
      },
      screens: {
        sm: '576px',
        md: '768px',
        desktop: '1224px',
      },
      zIndex: {
        1: '1',
      },
    },
  },
  plugins: [],
}
export default config
