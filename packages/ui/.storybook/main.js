module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
    '@storybook/addon-docs',
    'storybook-addon-react-docgen'
  ],
  "core": {
    "builder": "webpack5"
  }
}