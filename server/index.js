require("ignore-styles");

require("@babel/register")({
  ignore: [/(node_module)/],
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  extensions: [".es6", ".es", ".jsx", ".js", ".mjs", ".ts", ".tsx"],
  plugins: ["@babel/plugin-syntax-dynamic-import"],
});

require("./server.js");
