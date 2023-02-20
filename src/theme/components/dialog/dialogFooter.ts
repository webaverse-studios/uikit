// types
import type { Obj } from '@/uikit/types';
import type { DialogClassName } from '@/uikit/types/components/dialog';

export interface DialogFooterStylesType {
  defaultProps: {
    className: DialogClassName;
  };
  styles: {
    base: Obj;
  };
}

const dialogFooter: DialogFooterStylesType = {
  defaultProps: {
    className: '',
  },
  styles: {
    base: {
      display: 'flex',
      alignItems: 'items-center',
      justifyContent: 'justify-end',
      flexShrink: 'shrink-0',
      flexWrap: 'flex-wrap',
      p: 'p-4',
      color: 'text-blue-gray-500',
    },
  },
};

export default dialogFooter;
