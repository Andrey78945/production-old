import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

import { ArticleViewSelector } from './ArticleViewSelector';

const meta: Meta<typeof ArticleViewSelector> = {
  title: 'entities/Article/ArticleViewSelector',
  component: ArticleViewSelector,
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({ login: { username: '123', password: 'adgk' } }),
    RouterDecorator,
  ],
  tags: ['autodocs'],
  args: {},
};

export default meta;

type Story = StoryObj<typeof ArticleViewSelector>;

export const Normal: Story = {
  args: {},
};
