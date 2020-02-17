const path = require("path");
const createExpoWebpackConfigAsync = require("@expo/webpack-config");

const aliases = {
  assets: path.resolve("./src/assets"),
  components: path.resolve("./src/components"),
  hooks: path.resolve("./src/hooks"),
  interfaces: path.resolve("./src/interfaces"),
  views: path.resolve("./src/views"),
  providers: path.resolve("./src/providers"),
  styles: path.resolve("./src/styles"),
  utils: path.resolve("./src/utils"),
  hocs: path.resolve("./src/hocs"),
  types: path.resolve("./src/types")
};

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  // Customize the config before returning it.
  config.resolve.alias = {
    ...config.resolve.alias,
    ...aliases
  };
  return config;
};
