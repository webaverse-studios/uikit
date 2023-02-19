// types
import type { Obj } from '@/uikit/types';
import type { size, dismiss, animate, className } from '@/uikit/types/components/dialog';
import { propTypesSize } from '@/uikit/types/components/dialog';

export interface DefaultDialogProps {
  size: size;
  dismiss: dismiss;
  animate: animate;
  className: className;
}

export interface DialogValidProps {
  sizes: string[];
}

export interface DialogStyleProps {
  base: {
    backdrop: Obj;
    container: Obj;
  };

  sizes: {
    xs: Obj;
    sm: Obj;
    md: Obj;
    lg: Obj;
    xl: Obj;
    xxl: Obj;
  };
}

export interface DialogStylesType {
  valid: DialogValidProps;
  styles: DialogStyleProps;
  defaultProps: DefaultDialogProps;
}

const dialog: DialogStylesType = {
  defaultProps: {
    size: 'md',
    dismiss: {},
    animate: {
      unmount: {},
      mount: {},
    },
    className: '',
  },
  valid: {
    sizes: propTypesSize,
  },
  styles: {
    base: {
      backdrop: {
        top: 0,
        left: 0,
        display: 'grid',
        position: 'fixed',
        width: 'w-screen',
        height: 'h-screen',
        backgroundColor: 'bg-black',
        placeItems: 'place-items-center',
        backgroundOpacity: 'bg-opacity-60',
        backdropFilter: 'backdrop-blur-sm',
      },
      container: {
        m: 'm-4',
        bg: 'bg-white',
        position: 'relative',
        fontSize: 'text-base',
        fontFamily: 'font-sans',
        boxShadow: 'shadow-2xl',
        fontWeight: 'font-light',
        borderRadius: 'rounded-lg',
        color: 'text-blue-gray-500',
        fontSmoothing: 'antialiased',
        lineHeight: 'leading-relaxed',
      },
    },
    sizes: {
      xs: {
        width: 'w-1/4',
        minWidth: 'min-w-[25%]',
        maxWidth: 'max-w-[25%]',
      },
      sm: {
        width: 'w-1/3',
        minWidth: 'min-w-[33.333333%]',
        maxWidth: 'max-w-[33.333333%]',
      },
      md: {
        width: 'w-2/5',
        minWidth: 'min-w-[40%]',
        maxWidth: 'max-w-[40%]',
      },
      lg: {
        width: 'w-3/5',
        minWidth: 'min-w-[60%]',
        maxWidth: 'max-w-[60%]',
      },
      xl: {
        width: 'w-3/4',
        minWidth: 'min-w-[75%]',
        maxWidth: 'max-w-[75%]',
      },
      xxl: {
        display: 'flex',
        flexDirection: 'flex-col',
        width: 'w-screen',
        minWidth: 'min-w-[100vw]',
        maxWidth: 'max-w-[100vw]',
        height: 'h-screen',
        minHeight: 'min-h-[100vh]',
        maxHeight: 'max-h-[100vh]',
        m: 'm-0',
        borderRadius: 'rounded-none',
      },
    },
  },
};

export default dialog;
