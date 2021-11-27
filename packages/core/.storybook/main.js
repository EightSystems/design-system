module.exports = {
    stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|mdx)"],
    staticDirs: [
        {
            from: "../src/components/primitives/WebVideo/static/",
            to: "/assets/webvideo/",
        },
    ],
    addons: [
        "@storybook/addon-docs",
        "@storybook/addon-a11y",
        "@storybook/addon-essentials",
        "@storybook/preset-create-react-app",
    ],
};
