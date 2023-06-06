import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../../src/**/*.mdx', '../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-styling',
    // {
    //   name: '@storybook/addon-styling',
    //   options: {
    //     cssModules: true,
    //     sass: {
    //       // Require your Sass preprocessor here
    //       // eslint-disable-next-line import/no-extraneous-dependencies, global-require
    //       implementation: require('sass'),
    //     },
    //   },
    // },
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    disableTelemetry: true,
  },
};
export default config;
