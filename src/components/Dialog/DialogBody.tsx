import { ComponentProps, forwardRef } from 'react';

import classnames from 'classnames';
import { twMerge } from 'tailwind-merge';

import { useTheme } from '@/uikit/context/theme';
import {
  DIalogDivider,
  DialogClassName,
  DialogChildren,
  DialogPropTypesDivider,
  DialogPropTypesClassName,
  DialogPropTypesChildren,
} from '@/uikit/types/components/dialog';
import objectsToString from '@/uikit/utils/objectsToString';

export interface DialogBodyProps extends ComponentProps<'div'> {
  divider?: DIalogDivider;
  children: DialogChildren;
  className?: DialogClassName;
}

export const DialogBody = forwardRef<HTMLDivElement, DialogBodyProps>(
  ({ divider, className, children, ...rest }, ref) => {
    // 1. init
    const { dialogBody } = useTheme();

    const {
      defaultProps,
      styles: { base },
    } = dialogBody;

    // 2. set default props
    className = className ?? defaultProps.className;

    // 3. set styles
    const dialogBodyClasses = twMerge(
      classnames(objectsToString(base.initial), { [objectsToString(base.divider)]: divider }),
      className,
    );

    // 4. return
    return (
      <div {...rest} ref={ref} className={dialogBodyClasses}>
        {children}
      </div>
    );
  },
);

DialogBody.propTypes = {
  divider: DialogPropTypesDivider,
  className: DialogPropTypesClassName,
  children: DialogPropTypesChildren,
};

DialogBody.displayName = 'WebaverseTailwind.DialogBody';

export default DialogBody;
