import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const cssLoader = buildCssLoader(isDev);
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: [{ loader: 'ts-loader', options: { transpileOnly: true } }],
    exclude: /node_modules/,
  };

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const babelLoader = buildBabelLoader(isDev);

  return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
}
