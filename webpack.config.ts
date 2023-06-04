import { BuilMode, BuildPaths } from "./config/build/types/config";

import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import path from "path";
import webpack from "webpack";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  build: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
};

const mode: BuilMode = "development";
const isDev = mode === "development";

const config: webpack.Configuration = buildWebpackConfig({
  mode: "development",
  paths,
  isDev,
});

export default config;
