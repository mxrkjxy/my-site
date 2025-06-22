import { shadcnPreset } from '@shadcn/ui';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  presets: [shadcnPreset],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#00999F',
          light: '#FF0000',
          dark: '#00FF00',
        },
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
      },
    },
  },
  plugins: [],
};
