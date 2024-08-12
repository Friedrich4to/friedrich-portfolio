import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'blanco': 'var(--blanco)',
      'negro': 'var(--negro)',
      'gris': 'var(--gris)',
      'grisMid': 'var(--grisMid)',
      'grisOs': 'var(--grisOs)',
      'verdeSage': 'var(--verdeSage)',
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      spacing: {
        '2x-full': '200vh',
        '5vw': '5vw',
        '80p': '70vh',
      },

      scale: {
        '300': '3',
      },

      transitionTimingFunction: {
        'aggresive': 'cubic-bezier(0,1.41,.74,1)',
      }
    },
  },
  plugins: [],
  darkMode: 'selector'
};
export default config;
