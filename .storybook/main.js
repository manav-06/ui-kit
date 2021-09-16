const customWebpack = require("./webpack.config.js");

module.exports = {
  stories: ["../packages/**/*.stories.@(tsx|mdx)"],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true
    }
  },
  webpackFinal: config => {
    return { ...config, ...customWebpack };
  },
  addons: [
    "@storybook/addon-knobs",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y"
  ]
};
