import type { Meta, StoryObj } from '@storybook/react';
import '../../../app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { Text } from '../Text/Text';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'shared/Card',
  component: Card,
  decorators: [ThemeDecorator(Theme.LIGHT)],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    children: <Text title='test' text='text text' />,
  },
};
