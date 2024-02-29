import type { Config } from 'tailwindcss';

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
      borderWidth: {
        3: '3px',
      },
      colors: {
        black: '#111111',
        white: '#FFF',
        gray: {
          DEFAULT: '#F0F0F0',  // color for dark mode text
          'light-1': '#D9D9D9', // accessories, light mode
          'light-modeText': '#000',  // color for light mode text
          'light-modeText2': '#334155',  // color for light mode text
          'light-mode-2': '#8d8d8d',  // light mode gradient
          'dark-1': '#323232',  // accessories, dark mode
        },
        yellow: {
          DEFAULT: '#feda00',
          'light-1': '#ffce00',  // light mode yellow
        },
        next: '#000',
        react: '#087ea4',
        css: '#38bdf8',
        ts: '#2f74c0',
      },
      fontSize: {
        'custom-title': '34px',
      },
      height: {
        contact: '633px',
        dscreen: '100dvh',
        projectH: '300px',
      },
      maxHeight: {
        aboutMeImg: '490px',
      },
      order: {
        '998': '998'
      },
      screens: {
        sm: '576px',
        md: '768px',
        desktop: '1224px',
      },
      width: {
        contactButton: '195px',
        projectW: '500px',
      },
      zIndex: {
        1: '1',
        5: '5',
      },
    },
  },
  plugins: [],
};

export default config;
