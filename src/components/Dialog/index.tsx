'use client';

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
  DialogOpen,
  DialogHandler,
  DialogSize,
  DialogDismiss,
  DialogAnimate,
  DialogChildren,
  DialogClassName,
  DialogPropTypesOpen,
  DialogPropTypesHandler,
  DialogPropTypesSize,
  DialogPropTypesDismiss,
  DialogPropTypesAnimate,
  DialogPropTypesClassName,
  DialogPropTypesChildren,
} from '@/uikit/types/components/dialog';
import type { NewAnimatePresenceProps } from '@/uikit/types/generic';
import findMatch from '@/uikit/utils/findMatch';
import objectsToString from '@/uikit/utils/objectsToString';

import { DialogBody, DialogBodyProps } from './DialogBody';
import { DialogFooter, DialogFooterProps } from './DialogFooter';
import { DialogHeader, DialogHeaderProps } from './DialogHeader';

export interface DialogProps extends ComponentProps<'div'> {
  open: DialogOpen;
  size?: DialogSize;
  transparent?: boolean;
  withBackdrop?: boolean;
  handler: DialogHandler;
  dismiss?: DialogDismiss;
  animate?: DialogAnimate;
  children: DialogChildren;
  className?: DialogClassName;
}

const Dialog = forwardRef<HTMLDivElement, DialogProps>(
  (
    {
      open,
      handler,
      size,
      dismiss,
      animate,
      className,
      children,
      transparent,
      withBackdrop = true,
      ...rest
    },
    ref,
  ) => {
    // 1. init
    const { dialog } = useTheme();

    const {
      valid,
      defaultProps,
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
        transparent && 'bg-transparent shadow-none',
      ),
      className,
    );

    // 4. set animation
    const animation = {
      unmount: {
        y: -50,
        opacity: 0,
        transition: { duration: 0.3 },
      },
      mount: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.3 },
      },
    };

    const backdropAnimation = {
      unmount: {
        opacity: 0,
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
            <FloatingOverlay style={{ zIndex: 9999 }} lockScroll>
              <FloatingFocusManager context={context}>
                <motion.div
                  exit="unmount"
                  initial="unmount"
                  variants={backdropAnimation}
                  transition={{ duration: 0.2 }}
                  animate={open ? 'mount' : 'unmount'}
                  className={withBackdrop ? backdropClasses : ''}
                >
                  <motion.div
                    {...getFloatingProps({
                      ...rest,
                      ref: mergedRef,
                      className: dialogClasses,
                      'aria-labelledby': labelId,
                      'aria-describedby': descriptionId,
                    })}
                    exit="unmount"
                    initial="unmount"
                    variants={appliedAnimation}
                    animate={open ? 'mount' : 'unmount'}
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
  open: DialogPropTypesOpen,
  handler: DialogPropTypesHandler,
  size: oneOf(DialogPropTypesSize),
  dismiss: DialogPropTypesDismiss,
  animate: DialogPropTypesAnimate,
  children: DialogPropTypesChildren,
  className: DialogPropTypesClassName,
};

Dialog.displayName = 'WebaverseTailwind.Dialog';

export type { DialogHeaderProps, DialogBodyProps, DialogFooterProps };
export { Dialog, DialogHeader, DialogBody, DialogFooter };
export default Object.assign(Dialog, {
  Header: DialogHeader,
  Body: DialogBody,
  Footer: DialogFooter,
});
