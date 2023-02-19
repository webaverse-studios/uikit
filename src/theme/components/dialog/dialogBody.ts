// types
import type { Obj } from '@/uikit/types';
import type { className, divider } from '@/uikit/types/components/dialog';

export interface DialogBodyStylesType {
  defaultProps: {
    className: className;
    divider: divider;
  };
  styles: {
    base: {
      initial: Obj;
      divider: Obj;
    };
  };
}

const dialogBody: DialogBodyStylesType = {
  defaultProps: {
    className: '',
    divider: false,
  },
  styles: {
    base: {
      initial: {
        p: 'p-4',
        position: 'relative',
        fontSize: 'text-base',
        fontFamily: 'font-sans',
        fontWeight: 'font-light',
        color: 'text-blue-gray-500',
        fontSmoothing: 'antialiased',
        lineHeight: 'leading-relaxed',
      },
      divider: {
        borderTop: 'border-t',
        borderBottom: 'border-b',
        borderTopColor: 'border-t-blue-gray-100',
        borderBottomColor: 'border-b-blue-gray-100',
      },
    },
  },
};

export default dialogBody;
