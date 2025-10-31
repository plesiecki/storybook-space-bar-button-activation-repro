

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  "stories": [
    "../Button.stories.@(ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  }
};
export default config;