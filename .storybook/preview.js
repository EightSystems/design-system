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

export const parameters = {
  backgrounds: {
    default: 'ochopag',
    values: [
      {
        name: 'ochopag',
        value: '#F7F9FC',
    },
    {
      name: 'white',
      value: '#FFFFFF',
    }
    ],
  },
};
