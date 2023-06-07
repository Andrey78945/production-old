/* eslint-disable no-param-reassign */
import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPath } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPath = {
    dist: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config?.resolve?.modules?.push(paths.src);
  config?.resolve?.extensions?.push('.ts', '.tsx');
  if (config && config.module) {
    config.module.rules = config.module?.rules?.map((rule: RuleSetRule | '...') => {
      if ((typeof rule === 'object') && /svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }
      return rule;
    });
  }
  config?.module?.rules?.push({
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  });
  config?.module?.rules?.push(buildCssLoader(true));

  return config;
};
