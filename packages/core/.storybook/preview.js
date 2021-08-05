import React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "../src/theme";
import { configure } from "@storybook/react";
import GlobalStyles from "../src/theme/global";
configure(require.context("../src/stories", true, /\\.stories\\.mdx$/), module);

export const decorators = [
    Story => (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Story />
        </ThemeProvider>
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
