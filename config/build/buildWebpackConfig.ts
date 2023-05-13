import { BuildOptions } from "./types/config";
import webpack from "webpack";
import path from "path";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlagins } from "./buildPlagins";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode } = options;
  return {
    mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    output: {
      filename: "[name].[contenthash].js",
      path: paths.dist,
      clean: true,
    },
    plugins: buildPlagins(options),
    devtool: "inline-source-map",
    devServer: buildDevServer(options),
  };
}
