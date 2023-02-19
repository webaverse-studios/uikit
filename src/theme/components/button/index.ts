import type { Obj } from '@/uikit/types';
import type { variant, size, color, fullWidth, className } from '@/uikit/types/components/button';
import { propTypesVariant, propTypesSize, propTypesColor } from '@/uikit/types/components/button';

import buttonFilled from './buttonFilled';
import buttonGradient from './buttonGradient';
import buttonOutlined from './buttonOutlined';
import buttonText from './buttonText';

export interface DefaultButtonProps {
  size: size;
  color: color;
  variant: variant;
  fullWidth: fullWidth;
  className: className;
}

export interface ButtonValidProps {
  sizes: string[];
  colors: string[];
  variants: string[];
}

export interface ButtonStyleProps {
  base: { initial: Obj; fullWidth: Obj };

  sizes: { sm: Obj; md: Obj; lg: Obj };

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
    color: 'blue',
    fullWidth: false,
    variant: 'filled',
  },
  valid: {
    sizes: propTypesSize,
    colors: propTypesColor,
    variants: propTypesVariant,
  },
  styles: {
    base: {
      initial: {
        fontFamily: 'font-sans',
        fontWeight: 'font-bold',
        textAlign: 'text-center',
        userSelect: 'select-none',
        textTransform: 'uppercase',
        transition: 'transition-all',
        verticalAlign: 'align-middle',
        disabled: 'disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none',
      },
      fullWidth: {
        width: 'w-full',
        display: 'block',
      },
    },
    sizes: {
      sm: {
        py: 'py-2',
        px: 'px-4',
        fontSize: 'text-xs',
        borderRadius: 'rounded-lg',
      },
      md: {
        py: 'py-3',
        px: 'px-6',
        fontSize: 'text-xs',
        borderRadius: 'rounded-lg',
      },
      lg: {
        px: 'px-7',
        py: 'py-3.5',
        fontSize: 'text-sm',
        borderRadius: 'rounded-lg',
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
