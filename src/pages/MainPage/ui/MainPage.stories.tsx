import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import MainPage from './MainPage';

const meta: Meta<typeof MainPage> = {
  title: 'pages/MainPage',
  component: MainPage,
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator,
    StoreDecorator({ login: { username: '123', password: 'adgk' } }),
  ],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MainPage>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
