import React, { ComponentProps, forwardRef } from 'react';

import classnames from 'classnames';
import { oneOf } from 'prop-types';
import { twMerge } from 'tailwind-merge';

import { useTheme } from '@/uikit/context/theme';
import { ButtonStyleProps } from '@/uikit/theme';
import type {
  variant,
  size,
  color,
  fullWidth,
  className,
  children,
} from '@/uikit/types/components/button';
import {
  propTypesVariant,
  propTypesSize,
  propTypesColor,
  propTypesFullWidth,
  propTypesClassName,
  propTypesChildren,
} from '@/uikit/types/components/button';
import findMatch from '@/uikit/utils/findMatch';
import objectsToString from '@/uikit/utils/objectsToString';

export interface ButtonProps extends ComponentProps<'button'> {
  size?: size;
  color?: color;
  variant?: variant;
  children: children;
  fullWidth?: fullWidth;
  className?: className;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, color, fullWidth, className, children, ...rest }, ref) => {
    // 1. init
    const { button } = useTheme();
    const { valid, defaultProps, styles } = button;
    const { base, variants, sizes } = styles;

    // 2. set default props
    size = size ?? defaultProps.size;
    color = color ?? defaultProps.color;
    variant = variant ?? defaultProps.variant;
    fullWidth = fullWidth ?? defaultProps.fullWidth;
    className = className ?? defaultProps.className;

    // 4. set styles
    const buttonBase = objectsToString(base.initial);
    const buttonVariant = objectsToString(
      variants[findMatch(valid.variants, variant, 'filled') as keyof ButtonStyleProps['variants']][
        findMatch(valid.colors, color, 'blue')
      ],
    );

    const buttonSize = objectsToString(
      sizes[findMatch(valid.sizes, size, 'md') as keyof ButtonStyleProps['sizes']],
    );

    const classes = twMerge(
      classnames(buttonBase, buttonSize, buttonVariant, {
        [objectsToString(base.fullWidth)]: fullWidth,
      }),
      className,
    );

    // 5. return
    return (
      <button
        {...rest}
        ref={ref}
        className={classes}
        type={rest.type || 'button'}
        onMouseDown={(e) => {
          const onMouseDown = rest?.onMouseDown;
          return typeof onMouseDown === 'function' && onMouseDown(e);
        }}
      >
        {children}
      </button>
    );
  },
);

Button.propTypes = {
  size: oneOf(propTypesSize),
  children: propTypesChildren,
  color: oneOf(propTypesColor),
  fullWidth: propTypesFullWidth,
  className: propTypesClassName,
  variant: oneOf(propTypesVariant),
};

Button.displayName = 'WebaverseTailwind.Button';

export default Button;
