import type { Config } from 'tailwindcss';

const tailwindCssConfig: Config = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default tailwindCssConfig;
