/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Calibre', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    colors: {
      black: 'hsl(0, 0%, 5%)',
      black2: 'hsl(0, 0%, 12%)',
      white: 'hsl(0, 0%, 96%)',
      white2: 'hsl(0, 0%, 90%)',
      // primary: 'hsl(0, 76%, 47%)',
      // secondary: 'hsl(210, 100%, 15%)',
      // tertiary: 'hsl(342, 56%, 32%)',
      // accent: 'hsl(0, 100%, 50%)',
      // dkbg1: 'hsl(0, 0%, 5%)',
      // dkbg2: 'hsl(0, 0%, 12%)',
      // ltbg1: 'hsl(0, 0%, 96%)',
      // ltbg2: 'hsl(0, 0%, 90%)',
      // mdbg1: 'hsl(0, 0%, 51%)',
      'neutral-1': 'hsl(240, 5%, 92%)',
      'neutral-2': 'hsl(240, 5%, 88%)',
      'neutral-3': 'hsl(240, 5%, 78%)',
      'neutral-4': 'hsl(240, 5%, 67%)',
      'neutral-5': 'hsl(240, 5%, 46%)',
      'neutral-6': 'hsl(240, 5%, 31%)',
      'neutral-7': 'hsl(240, 5%, 20%)',
      'neutral-8': 'hsl(240, 5%, 12%)',
      'neutral-9': 'hsl(240, 5%, 8%)',
      'primary-dk1': 'hsl(0, 100%, 25%)',
      'primary-dk2': 'hsl(0, 100%, 32%)',
      'primary-md1': 'hsl(0, 100%, 40%)',
      'primary-md2': 'hsl(0, 100%, 47%)',
      'primary-md3': 'hsl(0, 100%, 57%)',
      'primary-lt1': 'hsl(0, 100%, 62%)',
      'primary-lt2': 'hsl(0, 100%, 68%)',
    },
    extend: {
      height: {
        '5xl': '768px',
        '4xl': '640px',
        '3xl': '512px',
        '2xl': '384px',
        xl: '256px',
        lg: '192px',
        md: '128px',
        sm: '96px',
        xs: '64px',
        xxs: '48px',
      },
      width: {
        '5xl': '768px',
        '4xl': '640px',
        '3xl': '512px',
        '2xl': '384px',
        xl: '256px',
        lg: '192px',
        md: '128px',
        sm: '96px',
        xs: '64px',
        xxs: '48px',
      },
      size: {
        '5xl': '768px',
        '4xl': '640px',
        '3xl': '512px',
        '2xl': '384px',
        xl: '256px',
        lg: '192px',
        md: '128px',
        sm: '96px',
        xs: '64px',
        xxs: '48px',
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
