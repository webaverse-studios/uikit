/**
 * This is a helper function for merging the main configuration of @material-tailwind with the Tailwind CSS configuration
 */

import type { Config } from 'tailwindcss';

import merge from 'deepmerge';

import breakpoints from '@/uikit/theme/base/breakpoints';
import colors from '@/uikit/theme/base/colors';
import shadows from '@/uikit/theme/base/shadows';
import typography from '@/uikit/theme/base/typography';

export type KeyValuePair<K extends keyof any = string, V = string> = Record<K, V>;

const webaverseTailwindConfig = {
  darkMode: 'class',
  content: [
    './node_modules/@webaverse-studios/uikit/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@webaverse-studios/uikit/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors,
    fontFamily: typography,
    boxShadow: shadows,
    screens: breakpoints,
  },
  plugins: [],
};

/**
 * Merge @webaverse-studios-tailwind and Tailwind CSS configurations
 */
function withMT(tailwindConfig: Config) {
  const themeFont = webaverseTailwindConfig.theme.fontFamily;

  if (tailwindConfig?.theme?.fontFamily) {
    const baseFontFamily = tailwindConfig.theme.fontFamily as KeyValuePair<
      string,
      | string
      | string[]
      | [fontFamily: string | string[], configuration: Partial<{ fontFeatureSettings: string }>]
    >;

    themeFont.sans = (baseFontFamily.sans as string[]) || themeFont.sans;
    themeFont.body = (baseFontFamily.body as string[]) || themeFont.body;
    themeFont.serif = (baseFontFamily.serif as string[]) || themeFont.serif;
  }

  return merge(webaverseTailwindConfig, { ...tailwindConfig });
}

export default withMT;
