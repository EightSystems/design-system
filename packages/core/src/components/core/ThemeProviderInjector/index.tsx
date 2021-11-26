import merge from "lodash/merge";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme as originalTheme } from "../../../theme";
import GlobalStyles from "../../../theme/global";
import { ThemeProviderProps } from "./types";

const ThemeProviderInjector = ({ theme, children }: ThemeProviderProps) => {
    const themeMerged = merge(originalTheme, theme || {});

    return (
        <ThemeProvider theme={themeMerged}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    );
};

export default ThemeProviderInjector;
