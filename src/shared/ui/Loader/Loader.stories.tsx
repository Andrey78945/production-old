import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
  title: 'shared/Loader',
  component: Loader,
  decorators: [ThemeDecorator(Theme.LIGHT), RouterDecorator],
  tags: ['autodocs'],

};

export default meta;

type Story = StoryObj<typeof Loader>;

export const Light: Story = {
  args: { },
};

export const Dark: Story = {
  args: { },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
