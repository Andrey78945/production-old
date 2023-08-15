import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { action } from '@storybook/addon-actions';
import AddCommentForm from './AddCommentForm';

const meta: Meta<typeof AddCommentForm> = {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({ login: { username: '123', password: 'adgk', isLoading: false } }),
    RouterDecorator,
  ],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AddCommentForm>;

export const Light: Story = {
  args: { onSendComment: action('onSendComment') },
};

export const Dark: Story = {
  args: { onSendComment: action('onSendComment') },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
