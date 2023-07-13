import { Config } from 'tailwindcss';

const tailwindcssConfig: Config = {
  content: ['./src/**/*.{jsx,tsx,js,ts,vue}'],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        gunmetal: '#0E2534',
        'prussian-blue': '#133246',
        'indigo-dye': '#183E57',
        'blue-saphire': '#22577A',
        'cadet-blue': '#38A3A5',
        keppel: '#48B89F',
        emerald: '#37DF8C',
        'medium-spring-green': '#58E896',
        'granny-smith-apple': '#A0F5B6',
        'tea-green': '#C7F9CC',
      },
    },
  },
  plugins: [],
};

export default tailwindcssConfig;
