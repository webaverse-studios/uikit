import { ComponentProps, forwardRef } from 'react';

import classnames from 'classnames';
import { twMerge } from 'tailwind-merge';

import { useTheme } from '@/uikit/context/theme';
import {
  divider,
  className,
  children,
  propTypesDivider,
  propTypesClassName,
  propTypesChildren,
} from '@/uikit/types/components/dialog';
import objectsToString from '@/uikit/utils/objectsToString';

export interface DialogBodyProps extends ComponentProps<'div'> {
  divider?: divider;
  className?: className;
  children: children;
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
  divider: propTypesDivider,
  className: propTypesClassName,
  children: propTypesChildren,
};

DialogBody.displayName = 'WebaverseTailwind.DialogBody';

export default DialogBody;
