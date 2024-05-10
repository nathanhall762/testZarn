/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Calibre', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        black: '#0f0f0f',
        black2: '#1f1f1f',
        white: '#f5f5f5',
        white2: '#e5e5e5',
        primary: '#E10A19',
        secondary: '#002642',
        tertiary: '#840032',
        accent: '#FE0000',
        dkbg1: '#0f0f0f',
        dkbg2: '#1f1f1f',
        ltbg1: '#f5f5f5',
        ltbg2: '#e5e5e5',
        mdbg1: '#828282', // what is medium background?
      },
      height: {
        '3/4vh': '75vh',
      },
      transitionDuration: {
        fast: '200ms',
        md: '500ms',
        slow: '2000ms',
      },
      scale: {
        sm: '1.01',
        md: '1.05',
        lg: '1.1',
      },
    },
  },
  plugins: [],
};
