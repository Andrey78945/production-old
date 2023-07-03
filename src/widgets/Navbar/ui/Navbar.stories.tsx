import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator,
    StoreDecorator({ login: { username: '123', password: 'adgk' } }),
  ],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const LightOut: Story = {
  args: {},
};
LightOut.decorators = [StoreDecorator({ user: { authData: {} } })];

export const DarkOut: Story = {
  args: {},
};
DarkOut.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData: {} } })];


