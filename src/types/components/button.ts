/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/order */

import PropTypes from 'prop-types';
import type { ReactNode } from 'react';

// generic types
import type { colors } from '../generic';
import { propTypesColors } from '../generic';

/**
 * This file contains the types and prop-types for Button and IconButton component.
 */

// typescript types
export type ButtonClassName = string;
export type ButtonFullWidth = boolean;
export type ButtonChildren = ReactNode;
export type ButtonColor = 'white' | colors;
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonVariant = 'filled' | 'outlined' | 'gradient' | 'text';

// javascript prop-types
export const ButtonPropTypesSize: any = ['sm', 'md', 'lg'];
export const ButtonPropTypesFullWidth: any = PropTypes.bool;
export const ButtonPropTypesClassName: any = PropTypes.string;
export const ButtonPropTypesChildren: any = PropTypes.node.isRequired;
export const ButtonPropTypesColor: any = ['white', ...propTypesColors];
export const ButtonPropTypesVariant: any = ['filled', 'outlined', 'gradient', 'text'];
