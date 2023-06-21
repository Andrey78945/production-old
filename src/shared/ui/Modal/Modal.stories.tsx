import type { Meta, StoryObj } from '@storybook/react';
import '../../../app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
  decorators: [ThemeDecorator(Theme.LIGHT)],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    children: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
        atque incidunt dolor nobis tempora nostrum fuga eius, odit esse
        molestias nisi eligendi dolorum cumque tenetur maiores ipsum, blanditiis
        aut debitis?`,
    isOpen: true,
  },
};

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    isOpen: true,
  },
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
