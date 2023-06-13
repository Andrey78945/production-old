import type { Meta, StoryObj } from '@storybook/react';
import '../../../app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  decorators: [ThemeDecorator(Theme.LIGHT)],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Text',
  },
};

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR,
  },
};

export const BackgroundTheme: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.BACKGROUND,
  },
};

export const BackgroundInvertedTheme: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.BACKGROUND_INVERTED,
  },
};

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
  },
};

export const OutlineL: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    size: 'size_l',
  },
};

export const OutlineXL: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    size: 'size_xl',
  },
};

export const SquareL: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    size: 'size_l',
    square: 'square',
  },
};

export const SquareM: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    size: 'size_m',
    square: 'square',
  },
};

export const SquareXL: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: 'square',
    size: 'size_xl',
  },
};

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
  },
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
