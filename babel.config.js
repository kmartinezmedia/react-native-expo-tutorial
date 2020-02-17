const path = require("path");

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "@babel/plugin-proposal-nullish-coalescing-operator",
      [
        "module-resolver",
        {
          extensions: [".ts", ".tsx", ".js"],
          root: ["./src"]
        }
      ]
    ]
  };
};
