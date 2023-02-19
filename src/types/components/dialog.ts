import type { dismissType, animation } from '../generic';

import type { Dispatch, ReactNode, SetStateAction } from 'react';

import { bool, func, node, string } from 'prop-types';

// generic types

import { propTypesDismissType, propTypesAnimation } from '../generic';

/**
 * This file contains the types and prop-types for Dialog, DialogHeader, DialogBody and DialogFooter components.
 */

// typescript types
export type open = boolean;
export type divider = boolean;
export type className = string;
export type animate = animation;
export type children = ReactNode;
export type dismiss = dismissType;
export type handler = Dispatch<SetStateAction<any>>;
export type size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

// javascript prop-types
export const propTypesDivider: any = bool;
export const propTypesHandler: any = func;
export const propTypesClassName: any = string;
export const propTypesOpen: any = bool.isRequired;
export const propTypesChildren: any = node.isRequired;
export const propTypesAnimate: any = propTypesAnimation;
export const propTypesDismiss: any = propTypesDismissType;
export const propTypesSize: any = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
