import type { Obj } from '@/uikit/types';
import type {
  ButtonVariant,
  ButtonClassName,
  ButtonColor,
  ButtonSize,
  ButtonFullWidth,
} from '@/uikit/types/components/button';
import {
  ButtonPropTypesVariant,
  ButtonPropTypesSize,
  ButtonPropTypesColor,
} from '@/uikit/types/components/button';

import buttonFilled from './buttonFilled';
import buttonGradient from './buttonGradient';
import buttonOutlined from './buttonOutlined';
import buttonText from './buttonText';

export interface DefaultButtonProps {
  size: ButtonSize;
  color: ButtonColor;
  rounded: boolean;
  variant: ButtonVariant;
  fullWidth: ButtonFullWidth;
  className: ButtonClassName;
}

export interface ButtonValidProps {
  sizes: string[];
  colors: string[];
  variants: string[];
}

export interface ButtonStyleProps {
  sizes: { sm: Obj; md: Obj; lg: Obj };

  base: { initial: Obj; fullWidth: Obj; rounded: Obj };

  variants: {
    text: typeof buttonText;
    filled: typeof buttonFilled;
    gradient: typeof buttonGradient;
    outlined: typeof buttonOutlined;
  };
}

export interface ButtonStyleTypes {
  valid: ButtonValidProps;
  styles: ButtonStyleProps;
  defaultProps: DefaultButtonProps;
}

const button: ButtonStyleTypes = {
  defaultProps: {
    size: 'md',
    className: '',
    color: 'white',
    rounded: false,
    fullWidth: false,
    variant: 'filled',
  },
  valid: {
    sizes: ButtonPropTypesSize,
    colors: ButtonPropTypesColor,
    variants: ButtonPropTypesVariant,
  },
  styles: {
    base: {
      initial: {
        fontFamily: 'font-sans',
        fontWeight: 'font-bold',
        textAlign: 'text-center',
        userSelect: 'select-none',
        textTransform: 'uppercase',
        verticalAlign: 'align-middle',
        transition: 'transition-all duration-500',
        disabled: 'disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none',
      },
      fullWidth: {
        width: 'w-full',
        display: 'block',
      },
      rounded: {
        borderRadius: 'rounded-lg',
      },
    },
    sizes: {
      sm: {
        py: 'py-2',
        px: 'px-4',
        fontSize: 'text-xs',
      },
      md: {
        py: 'py-3',
        px: 'px-6',
        fontSize: 'text-xs',
      },
      lg: {
        px: 'px-7',
        py: 'py-3.5',
        fontSize: 'text-sm',
      },
    },
    variants: {
      text: buttonText,
      filled: buttonFilled,
      gradient: buttonGradient,
      outlined: buttonOutlined,
    },
  },
};

export default button;
