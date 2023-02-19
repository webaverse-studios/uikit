import { themes } from '@storybook/theming';

import '../src/index.css';

export const parameters = {
  backgrounds: { default: 'dark' },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      date: /Date$/,
      color: /(background|color)$/i,
    },
  },
  options: {
    storySort: {
      order: [],
      locales: 'en-US',
      includeName: true,
      method: 'alphabetical',
    },
  },
  darkMode: {
    current: 'dark',
  },
};
