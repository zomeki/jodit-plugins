import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { string } from "rollup-plugin-string";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import bundleSize from "rollup-plugin-bundle-size";

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      exports: "auto",
      sourcemap: true,
    },
    {
      file: "dist/index.module.mjs",
      format: "esm",
      sourcemap: true,
    },
    {
      file: "dist/index.umd.js",
      format: "umd",
      name: "JoditPluginAudioProps",
      globals: {
        "jodit": "Jodit"
      },
      sourcemap: true,
    },
  ],
  external: [
    "jodit"
  ],
  plugins: [
    resolve(),
    commonjs(),
    string({
      include: "src/images/*.svg"
    }),
    postcss({
      extract: "index.css",
      minimize: true,
      sourceMap: true,
      extensions: [".css", ".scss", ".sass"],
      plugins: [
        autoprefixer()
      ],
    }),
    babel({
      babelHelpers: "bundled",
      extensions: [".js"],
      exclude: "node_modules/**",
    }),
    terser(),
    bundleSize()
  ],
};
