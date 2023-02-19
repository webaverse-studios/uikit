import '../src/index.css';

export const parameters = {
  backgrounds: { default: 'dark' },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
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
