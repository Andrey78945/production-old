import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'shared/Skeleton',
  component: Skeleton,
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({ login: { username: '123', password: 'adgk' } }),
    RouterDecorator,
  ],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Primary: Story = {
  args: {
    width: '100%',
    height: 200,
  },
};

export const Circle: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100,
  },
};

export const PrimaryDark: Story = {
  args: {
    width: '100%',
    height: 200,
  },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleDark: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100,
  },
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];
