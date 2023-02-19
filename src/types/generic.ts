import type { AnimatePresenceProps } from 'framer-motion';

import type { ReactNode } from 'react';

import { bool, instanceOf, number, oneOfType, shape } from 'prop-types';

export type colors =
  | 'blue-gray'
  | 'gray'
  | 'brown'
  | 'deep-orange'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'light-green'
  | 'green'
  | 'teal'
  | 'cyan'
  | 'light-blue'
  | 'blue'
  | 'indigo'
  | 'deep-purple'
  | 'purple'
  | 'pink'
  | 'red';

export const propTypesColors: string[] = [
  'blue-gray',
  'gray',
  'brown',
  'deep-orange',
  'orange',
  'amber',
  'yellow',
  'lime',
  'light-green',
  'green',
  'teal',
  'cyan',
  'light-blue',
  'blue',
  'indigo',
  'deep-purple',
  'purple',
  'pink',
  'red',
];

export type animation = {
  initial?: object;
  mount?: object;
  unmount?: object;
};

export type dismissType = {
  enabled?: boolean;
  escapeKey?: boolean;
  referencePointerDown?: boolean;
  outsidePointerDown?: boolean;
  ancestorScroll?: boolean;
  bubbles?: boolean;
};

export type offsetType =
  | number
  | {
      mainAxis?: number;
      crossAxis?: number;
      alignmentAxis?: number | null;
    };

export interface NewAnimatePresenceProps extends Omit<AnimatePresenceProps, 'children'> {
  children: ReactNode;
}

export const propTypesAnimation = shape({
  mount: instanceOf(Object),
  unmount: instanceOf(Object),
});

export const propTypesDismissType = shape({
  enabled: bool,
  escapeKey: bool,
  referencePointerDown: bool,
  outsidePointerDown: bool,
  ancestorScroll: bool,
  bubbles: bool,
});

export const propTypesOffsetType = oneOfType([
  number,
  shape({
    mainAxis: number,
    crossAxis: number,
    alignmentAxis: number,
  }),
]);

export const propTypesPlacements: string[] = [
  'top-start',
  'top',
  'top-end',
  'right-start',
  'right',
  'right-end',
  'bottom-start',
  'bottom',
  'bottom-end',
  'left-start',
  'left',
  'left-end',
];
