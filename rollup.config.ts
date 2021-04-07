import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

const packageJson = require("./package.json");

const plugins = [
  peerDepsExternal(),
  postcss({
    config: {
      path: "./postcss.config.js",
      ctx: null,
    },
  }),
  resolve(),
  commonjs(),
  typescript({
    useTsconfigDeclarationDir: true,
  }),
];

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins,
};
