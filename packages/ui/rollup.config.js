import commonjs from "@rollup/plugin-commonjs";
import del from "rollup-plugin-delete";
import svgr from "@svgr/rollup";
import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import tailwind from "tailwindcss";
import { babel } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import { DEFAULT_EXTENSIONS } from "@babel/core";

export default [
  {
    input: "index.tsx",
    output: {
      file: "dist/index.tsx",
      format: "cjs",
    },
    external: ["react", "react-dom"],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      del({ targets: "./dist/*" }),
      svgr(),
      typescript({
        verbosity: 1,
        tsconfig: "./tsconfig.rollup.json",
      }),
      url({
        include: [
          "./fonts/**/*.ttf",
          "./fonts/**/*.woff",
          "./fonts/**/*.woff2",
          "./fonts/**/*.svg",
        ],
      }),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
        extensions: [...DEFAULT_EXTENSIONS, ".ts", "tsx"],
      }),
      postcss({
        config: {
          path: "./postcss.config.js",
        },
        plugins: [
          autoprefixer(),
          tailwind({
            config: "./tailwind.config.js",
          }),
        ],
      }),
      terser({
        compress: true,
        mangle: true,
        output: {
          preamble: "/* eslint-disable */",
          comments: false,
        },
      }),
    ],
  },
];
