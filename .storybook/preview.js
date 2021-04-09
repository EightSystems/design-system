import React from "react";
import { addDecorator, configure } from "@storybook/react";
import GlobalStyles from "../src/styles/global";

configure(require.context("../src/stories", true, /\\.stories\\.mdx$/), module);

const GlobalWrapper = storyFn => (
    <div>
        <GlobalStyles />
        {storyFn()}
    </div>
);

addDecorator(GlobalWrapper);
