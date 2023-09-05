import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ArticleSortSelector } from './ArticleSortSelector';

const meta: Meta<typeof ArticleSortSelector> = {
  title: 'entities/Article/ArticleSortSelector',
  component: ArticleSortSelector,
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({ login: { username: '123', password: 'adgk' } }),
    RouterDecorator,
  ],
  tags: ['autodocs'],
  args: {},
};

export default meta;

type Story = StoryObj<typeof ArticleSortSelector>;

export const Normal: Story = {
  args: {},
};
