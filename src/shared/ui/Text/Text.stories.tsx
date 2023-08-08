import type { Meta, StoryObj } from '@storybook/react';
import '../../../app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
  decorators: [ThemeDecorator(Theme.LIGHT)],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    title: 'Title',
    text: 'text Description',
  },
};

export const Error: Story = {
  args: {
    title: 'Title',
    text: 'text Description',
    theme: TextTheme.ERROR,
  },
};

export const OnlyTitle: Story = {
  args: {
    title: 'Title Title Title Title',
  },
};

export const OnlyText: Story = {
  args: {
    text: 'text Description',
  },
};

export const PrimaryDark: Story = {
  args: {
    title: 'Title',
    text: 'text Description',
  },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark: Story = {
  args: {
    title: 'Title Title Title Title',
  },
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark: Story = {
  args: {
    text: 'text Description',
  },
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL: Story = {
  args: {
    title: 'Title',
    text: 'text Description',
    size: TextSize.L,
  },
};

export const SizeM: Story = {
  args: {
    title: 'Title',
    text: 'text Description',
    size: TextSize.M,
  },
};
