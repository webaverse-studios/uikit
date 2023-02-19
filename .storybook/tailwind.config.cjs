// This file is used by storybook to generate the tailwindcss classes

const withMT = require('../src/utils/withMT');

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  plugins: [],
  theme: { extend: {} },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
});
