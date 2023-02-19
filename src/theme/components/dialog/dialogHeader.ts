// types
import type { Obj } from '@/uikit/types';
import type { className } from '@/uikit/types/components/dialog';

export interface DialogHeaderStylesType {
  defaultProps: {
    className: className;
  };
  styles: {
    base: Obj;
  };
}

const dialogHeader: DialogHeaderStylesType = {
  defaultProps: {
    className: '',
  },
  styles: {
    base: {
      display: 'flex',
      alignItems: 'items-center',
      flexShrink: 'shrink-0',
      p: 'p-4',
      color: 'text-blue-gray-900',
      fontSmoothing: 'antialiased',
      fontFamily: 'font-sans',
      fontSize: 'text-2xl',
      fontWeight: 'font-semibold',
      lineHeight: 'leading-snug',
    },
  },
};

export default dialogHeader;
