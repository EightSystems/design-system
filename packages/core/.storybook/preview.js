import { configure } from "@storybook/react";
import React from "react";
import ThemeProviderInjector from "../src/components/core/ThemeProviderInjector";

configure(require.context("../src/stories", true, /\\.stories\\.mdx$/), module);

export const decorators = [
    Story => {
        return (
            <ThemeProviderInjector>
                <Story />
            </ThemeProviderInjector>
        );
    },
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
