// tailwind.config.ts (or tailwind.config.js)
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'yef-blue': {
          DEFAULT: '#0052a7',
          50: '#e6f0ff',
          100: '#cce0ff',
          200: '#99c2ff',
          300: '#66a3ff',
          400: '#3385ff',
          500: '#0052a7', // Your main color
          600: '#00428c',
          700: '#003170',
          800: '#002154',
          900: '#001038',
        },
      },
    },
  },
  plugins: [],
};
export default config;