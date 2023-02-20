import { ComponentProps, forwardRef } from 'react';

// utils
import classnames from 'classnames';
import { twMerge } from 'tailwind-merge';

// context

// types
import { useTheme } from '@/uikit/context/theme';
import type { DialogClassName, DialogChildren } from '@/uikit/types/components/dialog';
import { DialogPropTypesClassName, DialogPropTypesChildren } from '@/uikit/types/components/dialog';
import objectsToString from '@/uikit/utils/objectsToString';

export interface DialogHeaderProps extends ComponentProps<'div'> {
  className?: DialogClassName;
  children: DialogChildren;
}

export const DialogHeader = forwardRef<HTMLDivElement, DialogHeaderProps>(
  ({ className, children, ...rest }, ref) => {
    // 1. init
    const { dialogHeader } = useTheme();

    const {
      defaultProps,
      styles: { base },
    } = dialogHeader;

    // 2. set default props
    className = className ?? defaultProps.className;

    // 3. set styles
    const dialogHeaderClasses = twMerge(classnames(objectsToString(base)), className);

    // 4. return
    return (
      <div {...rest} ref={ref} className={dialogHeaderClasses}>
        {children}
      </div>
    );
  },
);

DialogHeader.propTypes = {
  className: DialogPropTypesClassName,
  children: DialogPropTypesChildren,
};

DialogHeader.displayName = 'WebaverseTailwind.DialogHeader';

export default DialogHeader;
