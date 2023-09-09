import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({ login: { username: '123', password: 'adgk', isLoading: false } }),
    RouterDecorator,
  ],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CommentCard>;

export const Light: Story = {
  args: {
    comment: {
      id: '1',
      text: 'hello world',
      user: { id: '1', username: 'Vasya' },
    },
  },
};

export const Loading: Story = {
  args: { isLoading: true },
};
