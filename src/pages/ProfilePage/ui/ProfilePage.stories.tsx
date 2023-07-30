import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      login: { username: '123', password: 'adgk' },
      profile: {
        form: {
          username: 'admin',
          age: 22,
          country: Country.Armenia,
          firstname: 'AAAA',
          lastname: 'BBBBB',
          city: 'Ccccc',
          currency: Currency.RUB,
        },
      },
    }),
    RouterDecorator,
  ],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
