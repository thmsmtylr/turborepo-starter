import del from "rollup-plugin-delete";
import svgr from "@svgr/rollup";
import typescript from "rollup-plugin-typescript2";

export default [
  {
    input: "index.tsx",
    output: {
      file: "dist/index.tsx",
      format: "cjs",
    },
    plugins: [del({ targets: "dist" }), svgr(), typescript()],
    external: ["react", "react-dom"],
  },
];
