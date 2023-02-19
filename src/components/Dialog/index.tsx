import { ComponentProps, FC, forwardRef } from 'react';

import {
  useFloating,
  useInteractions,
  useClick,
  useRole,
  useDismiss,
  useId,
  FloatingPortal,
  FloatingOverlay,
  FloatingFocusManager,
  useMergeRefs,
} from '@floating-ui/react';
import classnames from 'classnames';
import merge from 'deepmerge';
import { AnimatePresence, motion } from 'framer-motion';
import { oneOf } from 'prop-types';
import { twMerge } from 'tailwind-merge';

import { useTheme } from '@/uikit/context/theme';
import type { DialogStyleProps } from '@/uikit/theme';
import {
  open,
  handler,
  size,
  dismiss,
  animate,
  className,
  children,
  propTypesOpen,
  propTypesHandler,
  propTypesSize,
  propTypesDismiss,
  propTypesAnimate,
  propTypesClassName,
  propTypesChildren,
} from '@/uikit/types/components/dialog';
import type { NewAnimatePresenceProps } from '@/uikit/types/generic';
import findMatch from '@/uikit/utils/findMatch';
import objectsToString from '@/uikit/utils/objectsToString';

import { DialogBody, DialogBodyProps } from './DialogBody';
import { DialogFooter, DialogFooterProps } from './DialogFooter';
import { DialogHeader, DialogHeaderProps } from './DialogHeader';

export interface DialogProps extends ComponentProps<'div'> {
  open: open;
  handler: handler;
  size?: size;
  dismiss?: dismiss;
  animate?: animate;
  className?: className;
  children: children;
}

const Dialog = forwardRef<HTMLDivElement, DialogProps>(
  ({ open, handler, size, dismiss, animate, className, children, ...rest }, ref) => {
    // 1. init
    const { dialog } = useTheme();

    const {
      defaultProps,
      valid,
      styles: { base, sizes },
    } = dialog;

    // 2. set default props
    handler = handler ?? undefined;
    size = size ?? defaultProps.size;
    dismiss = dismiss ?? defaultProps.dismiss;
    animate = animate ?? defaultProps.animate;
    className = className ?? defaultProps.className;

    // 3. set styles
    const backdropClasses = classnames(objectsToString(base.backdrop));
    const dialogClasses = twMerge(
      classnames(
        objectsToString(base.container),
        objectsToString(
          sizes[findMatch(valid.sizes, size, 'md') as keyof DialogStyleProps['sizes']],
        ),
      ),
      className,
    );

    // 4. set animation
    const animation = {
      unmount: {
        opacity: 0,
        y: -50,
        transition: {
          duration: 0.3,
        },
      },
      mount: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.3,
        },
      },
    };

    const backdropAnimation = {
      unmount: {
        opacity: 0,
        transition: {
          delay: 0.2,
        },
      },
      mount: {
        opacity: 1,
      },
    };
    const appliedAnimation = merge(animation, animate);

    // 5. set @floating-ui
    const { floating, context } = useFloating({
      open,
      onOpenChange: handler,
    });

    const id = useId();
    const labelId = `${id}-label`;
    const descriptionId = `${id}-description`;

    const { getFloatingProps } = useInteractions([
      useClick(context),
      useRole(context),
      useDismiss(context, dismiss),
    ]);

    const mergedRef = useMergeRefs([ref, floating]);

    // 6. Create an instance of AnimatePresence because of the types issue with the children
    const NewAnimatePresence: FC<NewAnimatePresenceProps> = AnimatePresence;

    // 7. return
    return (
      <FloatingPortal>
        <NewAnimatePresence>
          {open && (
            <FloatingOverlay
              style={{
                zIndex: 9999,
              }}
              lockScroll
            >
              <FloatingFocusManager context={context}>
                <motion.div
                  className={size === 'xxl' ? '' : backdropClasses}
                  initial="unmount"
                  exit="unmount"
                  animate={open ? 'mount' : 'unmount'}
                  variants={backdropAnimation}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    {...getFloatingProps({
                      ...rest,
                      ref: mergedRef,
                      className: dialogClasses,
                      'aria-labelledby': labelId,
                      'aria-describedby': descriptionId,
                    })}
                    initial="unmount"
                    exit="unmount"
                    animate={open ? 'mount' : 'unmount'}
                    variants={appliedAnimation}
                  >
                    {children}
                  </motion.div>
                </motion.div>
              </FloatingFocusManager>
            </FloatingOverlay>
          )}
        </NewAnimatePresence>
      </FloatingPortal>
    );
  },
);

Dialog.propTypes = {
  open: propTypesOpen,
  handler: propTypesHandler,
  size: oneOf(propTypesSize),
  dismiss: propTypesDismiss,
  animate: propTypesAnimate,
  className: propTypesClassName,
  children: propTypesChildren,
};

Dialog.displayName = 'WebaverseTailwind.Dialog';

export type { DialogHeaderProps, DialogBodyProps, DialogFooterProps };
export { Dialog, DialogHeader, DialogBody, DialogFooter };
export default Object.assign(Dialog, {
  Header: DialogHeader,
  Body: DialogBody,
  Footer: DialogFooter,
});
