import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
  title: 'shared/ListBox',
  component: ListBox,
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({ login: { username: '123', password: 'adgk' } }),
    RouterDecorator,
  ],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ListBox>;

export const Primary: Story = {
  args: {},
};

export const Normal: Story = {
  args: {
    value: '123',
    items: [
      { content: '1asfasfasf23', value: '123' },
      { content: '1asfasfasf21233', value: '1232' },
    ],
  },
};

export const TopLeft: Story = {
  args: {
    direction: 'top left',
    value: '123',
    items: [
      { content: '1asfasfasf23', value: '123' },
      { content: '1asfasfasf21233', value: '1232' },
    ],
  },
};

export const TopRight: Story = {
  args: {
    direction: 'top right',
    value: '123',
    items: [
      { content: '1asfasfasf23', value: '123' },
      { content: '1asfasfasf21233', value: '1232' },
    ],
  },
};

export const BottomLeft: Story = {
  args: {
    direction: 'bottom left',
    value: '123',
    items: [
      { content: '1asfasfasf23', value: '123' },
      { content: '1asfasfasf21233', value: '1232' },
    ],
  },
};

export const BottomRight: Story = {
  args: {
    direction: 'bottom right',
    value: '123',
    items: [
      { content: '1asfasfasf23', value: '123' },
      { content: '1asfasfasf21233', value: '1232' },
    ],
  },
};
