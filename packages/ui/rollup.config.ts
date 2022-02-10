import commonjs from "@rollup/plugin-commonjs";
import del from "rollup-plugin-delete";
import svgr from "@svgr/rollup";
import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import { DEFAULT_EXTENSIONS } from "@babel/core";

export default [
  {
    input: "index.tsx",
    output: {
      file: "dist/index.tsx",
      format: "cjs",
      sourcemap: false,
      banner: "/* eslint-disable */",
    },
    external: ["react", "react-dom"],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      del({ targets: "dist/*" }),
      svgr(),
      typescript({
        verbosity: 3,
        tsconfig: "./tsconfig.rollup.json",
      }),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
        extensions: [...DEFAULT_EXTENSIONS, ".ts", "tsx"],
      }),
    ],
  },
];
