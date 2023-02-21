import defaultTheme from 'tailwindcss/defaultTheme';

const breakpoints = {
  xxs: '320px',
  xs: '475px',
  'lg-max': { max: '960px' },
  ultra: '2520px',
  ...defaultTheme.screens,
};

export default breakpoints;
