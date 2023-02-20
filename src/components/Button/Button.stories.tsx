import type { Meta, StoryObj } from '@storybook/react';

import {
  ButtonPropTypesColor,
  ButtonPropTypesSize,
  ButtonPropTypesVariant,
} from '@/uikit/types/components/button';

import { Button } from './index';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      defaultValue: 'filled',
      control: { type: 'select' },
      options: ButtonPropTypesVariant,
    },
    size: {
      defaultValue: 'md',
      control: { type: 'select' },
      options: ButtonPropTypesSize,
    },
    color: {
      defaultValue: 'white',
      control: { type: 'select' },
      options: ButtonPropTypesColor,
    },
    rounded: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    fullWidth: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
  args: {
    size: 'md',
    color: 'white',
    rounded: false,
    fullWidth: false,
    variant: 'filled',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Variants
export const Filled: Story = {
  args: {
    variant: 'filled',
    children: 'Button',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Button',
  },
};

export const Gradient: Story = {
  args: {
    color: 'blue',
    variant: 'gradient',
    children: 'Button',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    children: 'Button',
  },
};

// Sizes
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Button',
  },
};

// Colors
export const ButtonColors: Story = {
  args: {
    color: 'green',
    children: 'Button',
  },
};

// Full Width
export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'Button',
  },
};

// Rounded
export const Rounded: Story = {
  args: {
    rounded: true,
    color: 'orange',
    children: 'Button',
  },
};
