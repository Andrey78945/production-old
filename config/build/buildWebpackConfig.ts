import { BuildOptions } from "./types/config";
import webpack from "webpack";
import path from "path";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlagins } from "./buildPlagins";

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
  };
}
