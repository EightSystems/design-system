import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "../../../theme/global";
import { ThemeProviderProps } from "./types";

const ThemeProviderInjector = ({ theme, children }: ThemeProviderProps) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    );
};

export default ThemeProviderInjector;
