import type { dismissType, animation } from '../generic';

import type { Dispatch, ReactNode, SetStateAction } from 'react';

import { bool, func, node, string } from 'prop-types';

// generic types

import { propTypesDismissType, propTypesAnimation } from '../generic';

/**
 * This file contains the types and prop-types for Dialog, DialogHeader, DialogBody and DialogFooter components.
 */

// typescript types
export type DialogOpen = boolean;
export type DIalogDivider = boolean;
export type DialogClassName = string;
export type DialogAnimate = animation;
export type DialogChildren = ReactNode;
export type DialogDismiss = dismissType;
export type DialogHandler = Dispatch<SetStateAction<any>>;
export type DialogSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

// javascript prop-types
export const DialogPropTypesDivider: any = bool;
export const DialogPropTypesHandler: any = func;
export const DialogPropTypesClassName: any = string;
export const DialogPropTypesOpen: any = bool.isRequired;
export const DialogPropTypesChildren: any = node.isRequired;
export const DialogPropTypesAnimate: any = propTypesAnimation;
export const DialogPropTypesDismiss: any = propTypesDismissType;
export const DialogPropTypesSize: any = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
