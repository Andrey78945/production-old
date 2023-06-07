import type { Meta, StoryObj } from '@storybook/react';
import '../../../../app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { SideBar } from './SideBar';

const meta: Meta<typeof SideBar> = {
  title: 'widgets/SideBar',
  component: SideBar,
  decorators: [ThemeDecorator(Theme.LIGHT)],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SideBar>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
