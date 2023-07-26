import type { Meta, StoryObj } from '@storybook/react';
import '../../../app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
  decorators: [ThemeDecorator(Theme.LIGHT)],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    label: 'Укажите значение',
    options: [
      {
        value: '123',
        content: 'One, two, three',
      },
      {
        value: '456',
        content: 'four, five, six',
      },
      {
        value: '789',
        content: 'seven, eight, nine',
      },
    ],
  },
};
