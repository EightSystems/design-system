module.exports = {
    stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|mdx)"],
    addons: [
        "storybook-addon-mdx-embed",
        "@storybook/addon-docs",
        "@storybook/addon-a11y",
        "@storybook/addon-essentials",
        "@storybook/preset-create-react-app",
    ],
};
