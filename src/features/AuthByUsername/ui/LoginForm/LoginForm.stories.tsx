import type { Meta, StoryObj } from '@storybook/react';
import '../../../../app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
  decorators: [ThemeDecorator(Theme.LIGHT)],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
  args: {

  },
};

export const Dark: Story = {
  args: {

  },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
