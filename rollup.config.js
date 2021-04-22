// rollup.config.js
import typescript from "rollup-plugin-typescript";
import commonjs from "rollup-plugin-commonjs";
import { uglify } from "rollup-plugin-uglify";

export default {
  input: "src/main.ts",
  output: {
    file: "dist/main.js",
    format: "cjs",
  },
  // 告诉rollup不要将此lodash打包，而作为外部依赖
  external: [
    "colors",
    "rimraf",
    "archiver",
    "ora",
    "chalk",
    "child_process",
    "assert",
    "path",
    "fs",
    "util",
    "os",
    "events",
    "axios",
    "form-data",
    "inquirer",
    "querystring",
    "download-git-repo",
    "socks-proxy-agent",
    "semver",
    "koa",
    "koa-serve",
    "koa-mount",
    "http",
    "https",
    "zlib",
  ],
  plugins: [
    typescript(),
    commonjs({
      include: "node_modules/**",
      extensions: [".js", ".ts"],
    }),
    uglify(),
  ],
};
