import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack"; //to access built-in plugins
import path from "path";
import { BuildOptions } from "./types/config";

export function buildPlagins({
  paths,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
  ];
}
