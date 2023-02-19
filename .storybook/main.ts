import type { StorybookConfig as ViteStoryBookConfig } from '@storybook/react-vite';
import type { StorybookConfig } from '@storybook/types';

import { mergeConfig } from 'vite';

type Config = ViteStoryBookConfig & StorybookConfig;

const config: Config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  core: {
    builder: '@storybook/builder-vite', // 👈 The builder enabled here.
  },
  framework: {
    options: {},
    name: '@storybook/react-vite',
  },
  docs: { autodocs: 'tag', enabled: true },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  } as StorybookConfig['typescript'],
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // Add storybook-specific dependencies to pre-optimization
      optimizeDeps: {
        include: ['storybook-addon-designs'],
      },
    });
  },
};
export default config;
