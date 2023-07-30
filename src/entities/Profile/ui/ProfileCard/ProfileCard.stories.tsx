import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/khaker.jpg';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  decorators: [ThemeDecorator(Theme.LIGHT)],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
  args: {
    profileData: {
      username: 'admin',
      age: 22,
      country: Country.Armenia,
      firstname: 'AAAA',
      lastname: 'BBBBB',
      city: 'Ccccc',
      currency: Currency.RUB,
      avatar,
    },
  },
};

export const WithError: Story = {
  args: {
    error: 'true',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
