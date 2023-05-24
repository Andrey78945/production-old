import webpack from 'webpack';
import path from 'path';
import { BuildOptions } from './types/config';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildPlagins } from './buildPlagins';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(
  options: BuildOptions,
): webpack.Configuration {
  const { paths, mode, isDev } = options;
  return {
    mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    output: {
      filename: '[name].[contenthash].js',
      path: paths.dist,
      clean: true,
    },
    plugins: buildPlagins(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
