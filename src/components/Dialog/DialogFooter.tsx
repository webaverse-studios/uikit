import { ComponentProps, forwardRef } from 'react';

// utils
import classnames from 'classnames';
import { twMerge } from 'tailwind-merge';

// context

// types
import { useTheme } from '@/uikit/context/theme';
import type { className, children } from '@/uikit/types/components/dialog';
import { propTypesClassName, propTypesChildren } from '@/uikit/types/components/dialog';
import objectsToString from '@/uikit/utils/objectsToString';

export interface DialogFooterProps extends ComponentProps<'div'> {
  className?: className;
  children: children;
}

export const DialogFooter = forwardRef<HTMLDivElement, DialogFooterProps>(
  ({ className, children, ...rest }, ref) => {
    // 1. init
    const { dialogFooter } = useTheme();

    const {
      defaultProps,
      styles: { base },
    } = dialogFooter;

    // 2. set default props
    className = className ?? defaultProps.className;

    // 3. set styles
    const dialogFooterClasses = twMerge(classnames(objectsToString(base)), className);

    // 4. return
    return (
      <div {...rest} ref={ref} className={dialogFooterClasses}>
        {children}
      </div>
    );
  },
);

DialogFooter.propTypes = {
  className: propTypesClassName,
  children: propTypesChildren,
};

DialogFooter.displayName = 'WebaverseTailwind.DialogFooter';

export default DialogFooter;
