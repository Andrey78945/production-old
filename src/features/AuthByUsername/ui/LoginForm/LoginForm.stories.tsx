import type { Meta, StoryObj } from '@storybook/react';
import '../../../../app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
  decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({ login: { username: '123', password: 'adgk' } })],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithError: Story = {
  args: {},
};
WithError.decorators = [StoreDecorator({ login: { error: 'Что-то пошло не так' } })];

export const Loading: Story = {
  args: {},
};
Loading.decorators = [StoreDecorator({ login: { isLoading: true } })];
