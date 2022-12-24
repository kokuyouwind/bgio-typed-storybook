const turbosnap = require('vite-plugin-turbosnap');
const { mergeConfig } = require('vite');

module.exports = {
  "core": { "builder": '@storybook/builder-vite' },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      plugins: configType === 'PRODUCTION' ? [turbosnap({ rootDir: config.root ?? process.cwd() })] : [],
      // ...And any other config you need to change...
    });
  },
  "stories": [
    "../src/client/components/**/*.stories.mdx",
    "../src/client/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true,
    "interactionsDebugger": true
  }
}