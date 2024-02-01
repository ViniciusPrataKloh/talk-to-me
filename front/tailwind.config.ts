import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0F0F0F',

        'primary': '#81E6D9',
        'secondary': '#1B212D',

        'white': '#FFFFFF',

        'gray-200': '#D7D7D7',
        'gray-400': '#A0AEC0',
        'gray-500': '#4E4E4E',
        'gray-600': '#2E2E2E',
        'gray-700': '#212121',
        'gray-800': '#0F0F0F',
      },
      gradients: {
        'background-gradient': ['rgba(0,0,0)', '#434343'],
      }
    },
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],
};
export default config;
