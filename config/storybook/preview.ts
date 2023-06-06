import type { Preview } from '@storybook/react';
import '../../src/app/styles/index.scss';
import { Theme } from '../../src/app/providers/ThemeProvider/lib/ThemeContext';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator';

const preview: Preview = {
  parameters: {
    decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT)],
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
