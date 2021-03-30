const path = require("path")

module.exports = {
    stories: ["../src/stories/**/*.stories.(js|jsx|mdx)"],
    addons: [
        "@storybook/addon-a11y",
        "storybook-addon-react-docgen",
    ],

    webpackFinal: async (config, { configType }) => {
        // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
        // You can change the configuration based on that.
        // 'PRODUCTION' is used when building the static version of storybook.

        config.module.rules.map(rule => {
            if (rule.oneOf) {
                rule.oneOf = rule.oneOf.slice().map(subRule => {
                    if (subRule.test instanceof RegExp && subRule.test.test(".scss")) {
                        return {
                            ...subRule,
                            use: [
                                ...subRule.use,
                                {
                                    loader: require.resolve("sass-resources-loader"),
                                    options: {
                                        resources: [
                                            path.resolve(__dirname, "../src/styles/_global.scss"),
                                        ],
                                    },
                                },
                            ],
                        }
                    }
                    return subRule
                })
            }
            return rule
        })
        return config
    },
}
