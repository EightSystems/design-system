import { configure } from "@storybook/react";
import React from "react";
import ThemeProviderInjector from "../src/components/core/ThemeProviderInjector";
import GlobalStyles from "../src/theme/global";

configure(require.context("../src/stories", true, /\\.stories\\.mdx$/), module);

export const decorators = [
    Story => (
        <ThemeProviderInjector>
            <GlobalStyles />
            <Story />
        </ThemeProviderInjector>
    ),
];

export const parameters = {
    backgrounds: {
        default: "ochopag",
        values: [
            {
                name: "ochopag",
                value: "#F7F9FC",
            },
            {
                name: "white",
                value: "#FFFFFF",
            },
        ],
    },
};
