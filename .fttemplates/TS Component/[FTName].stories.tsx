import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { [FTName] } from './[FTName]';


const meta: Meta<typeof [FTName]> = {
  title: 'shared/[FTName]',
  component: [FTName],
  decorators: [
   ThemeDecorator(Theme.LIGHT),
   StoreDecorator({ login: { username: '123', password: 'adgk' } }),
   RouterDecorator,
   ],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof [FTName]>;

export const Primary: Story = {
   args: {}
}
