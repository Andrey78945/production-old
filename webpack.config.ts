import webpack from "webpack"; //to access built-in plugins
import path from "path";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildPath } from "./config/build/types/config";

const paths: BuildPath = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  dist: path.resolve(__dirname, "dist"),
  html: path.resolve(__dirname, "public", "index.html"),
};

const mode = "development";
const isDev = mode === "development";
const port = 3000;

const config: webpack.Configuration = buildWebpackConfig({
  mode,
  paths,
  isDev,
  port,
});

export default config;
