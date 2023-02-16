/* eslint-disable import/no-named-as-default-member */

import React, { createContext, useContext } from 'react';

import merge from 'deepmerge';
import PropTypes from 'prop-types';

import theme from '../theme/index';
import combineMerge from '../utils/combineMerge';

export type WebaverseThemeContext = typeof theme & { [x: string]: unknown };

const WebaverseTailwindTheme = createContext<WebaverseThemeContext>(theme);
WebaverseTailwindTheme.displayName = 'MaterialTailwindThemeProvider';

export interface ThemeProviderProps {
  children?: React.ReactNode;
  value?: Record<string, unknown>;
}

function ThemeProvider({ value = theme, children }: ThemeProviderProps) {
  const mergedValue = merge(theme, value, { arrayMerge: combineMerge }) as WebaverseThemeContext;

  return (
    <WebaverseTailwindTheme.Provider value={mergedValue}>
      {children}
    </WebaverseTailwindTheme.Provider>
  );
}

const useTheme = () => useContext(WebaverseTailwindTheme);

ThemeProvider.propTypes = {
  value: PropTypes.instanceOf(Object),
  children: PropTypes.node.isRequired,
};

export { WebaverseTailwindTheme, ThemeProvider, useTheme };
