import type { Meta, StoryObj } from '@storybook/react';
import '../../../app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
  decorators: [ThemeDecorator(Theme.LIGHT)],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    placeholder: 'Type text',
    label: 'Enter text',
    value: '123123',
  },
};

export const Dark: Story = {
  args: {
    placeholder: 'Type text',
    label: 'Enter text',
    value: '123123',
  },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
