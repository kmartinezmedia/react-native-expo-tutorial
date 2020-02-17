import path from "path";

module.exports = {
  webpackFinal: async (config: any) => {
    config.module.rules.push({
      test: /\.(gif|jpe?g|png|svg)$/,
      use: {
        loader: "url-loader",
        options: { name: "[name].[ext]" }
      }
    });

    config.resolve.alias = {
      "react-native": "react-native-web"
    };
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      exclude: path.resolve(__dirname, "../node_modules/"),
      include: [
        path.join(__dirname, "../src"),
        path.join(__dirname, "./stories")
      ],
      use: [
        {
          loader: require.resolve("ts-loader"),
          options: {
            configFile: path.join(__dirname, "../tsconfig.json"),
            compilerOptions: {
              jsx: "react"
            }
          }
        }
      ]
    });
    config.resolve.extensions.push(
      ".ts",
      ".tsx",
      ".web.tsx",
      ".web.ts",
      ".json"
    );
    return config;
  },
  stories: [
    "./stories/**/*.stories.*",
    "../src/**/*.stories.(mdx|tsx|ts|jsx|js)"
  ],
  addons: [
    {
      name: "@storybook/preset-typescript",
      options: {
        tsLoaderOptions: {
          configFile: path.resolve(__dirname, "../tsconfig.json")
        },
        tsDocgenLoaderOptions: {
          tsconfigPath: path.resolve(__dirname, "../tsconfig.json")
        },
        forkTsCheckerWebpackPluginOptions: {
          colors: false // disables built-in colors in logger messages
        },
        include: [path.resolve(__dirname, "../src")]
      }
    },
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null
      }
    },
    "@storybook/addon-actions",
    "@storybook/addon-links"
  ]
};
