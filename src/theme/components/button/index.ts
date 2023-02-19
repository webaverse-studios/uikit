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
  base: {
    initial: Obj;
    fullWidth: Obj;
  };

  sizes: {
    sm: Obj;
    md: Obj;
    lg: Obj;
  };

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
    variant: 'filled',
    size: 'md',
    color: 'blue',
    fullWidth: false,
    className: '',
  },
  valid: {
    variants: propTypesVariant,
    sizes: propTypesSize,
    colors: propTypesColor,
  },
  styles: {
    base: {
      initial: {
        verticalAlign: 'align-middle',
        userSelect: 'select-none',
        fontFamily: 'font-sans',
        fontWeight: 'font-bold',
        textAlign: 'text-center',
        textTransform: 'uppercase',
        transition: 'transition-all',
        disabled: 'disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none',
      },
      fullWidth: {
        display: 'block',
        width: 'w-full',
      },
    },
    sizes: {
      sm: {
        fontSize: 'text-xs',
        py: 'py-2',
        px: 'px-4',
        borderRadius: 'rounded-lg',
      },
      md: {
        fontSize: 'text-xs',
        py: 'py-3',
        px: 'px-6',
        borderRadius: 'rounded-lg',
      },
      lg: {
        fontSize: 'text-sm',
        py: 'py-3.5',
        px: 'px-7',
        borderRadius: 'rounded-lg',
      },
    },
    variants: {
      filled: buttonFilled,
      gradient: buttonGradient,
      outlined: buttonOutlined,
      text: buttonText,
    },
  },
};

export default button;
