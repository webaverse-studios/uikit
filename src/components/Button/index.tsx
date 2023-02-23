'use client';

import React, { ComponentProps, forwardRef } from 'react';

import classnames from 'classnames';
import { oneOf } from 'prop-types';
import { twMerge } from 'tailwind-merge';

import { useTheme } from '@/uikit/context/theme';
import { ButtonStyleProps } from '@/uikit/theme';
import type {
  ButtonVariant,
  ButtonSize,
  ButtonColor,
  ButtonFullWidth,
  ButtonClassName,
  ButtonChildren,
} from '@/uikit/types/components/button';
import {
  ButtonPropTypesVariant,
  ButtonPropTypesSize,
  ButtonPropTypesColor,
  ButtonPropTypesFullWidth,
  ButtonPropTypesClassName,
  ButtonPropTypesChildren,
} from '@/uikit/types/components/button';
import findMatch from '@/uikit/utils/findMatch';
import objectsToString from '@/uikit/utils/objectsToString';

export interface ButtonProps extends ComponentProps<'button'> {
  size?: ButtonSize;
  color?: ButtonColor;
  rounded?: boolean;
  variant?: ButtonVariant;
  children: ButtonChildren;
  fullWidth?: ButtonFullWidth;
  className?: ButtonClassName;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, color, fullWidth, className, children, rounded, ...rest }, ref) => {
    // 1. init
    const { button } = useTheme();
    const { valid, defaultProps, styles } = button;
    const { base, variants, sizes } = styles;

    // 2. set default props
    size = size ?? defaultProps.size;
    color = color ?? defaultProps.color;
    rounded = rounded ?? defaultProps.rounded;
    variant = variant ?? defaultProps.variant;
    fullWidth = fullWidth ?? defaultProps.fullWidth;
    className = className ?? defaultProps.className;

    // 4. set styles
    const buttonBase = objectsToString(base.initial);
    const buttonVariant = objectsToString(
      variants[findMatch(valid.variants, variant, 'filled') as keyof ButtonStyleProps['variants']][
        findMatch(valid.colors, color, 'white')
      ],
    );

    const buttonSize = objectsToString(
      sizes[findMatch(valid.sizes, size, 'md') as keyof ButtonStyleProps['sizes']],
    );

    const classes = twMerge(
      classnames(buttonBase, buttonSize, buttonVariant, {
        [objectsToString(base.rounded)]: rounded,
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
  size: oneOf(ButtonPropTypesSize),
  children: ButtonPropTypesChildren,
  color: oneOf(ButtonPropTypesColor),
  fullWidth: ButtonPropTypesFullWidth,
  className: ButtonPropTypesClassName,
  variant: oneOf(ButtonPropTypesVariant),
};

Button.displayName = 'WebaverseTailwind.Button';

export default Button;
