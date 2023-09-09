import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Page } from './Page';

const meta: Meta<typeof Page> = {
  title: 'shared/Page',
  component: Page,
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({ login: { username: '123', password: 'adgk' } }),
    RouterDecorator,
  ],
  tags: ['autodocs'],
  args: {},
};

export default meta;

type Story = StoryObj<typeof Page>;

export const Primary: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
