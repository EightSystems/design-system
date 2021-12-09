import merge from "lodash/merge";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme as originalTheme } from "../../../theme";
import GlobalStyles from "../../../theme/global";
import { ThemeProviderProps } from "./types";

export const ThemeProviderInjector = React.memo<ThemeProviderProps>(({ theme, children }: ThemeProviderProps) => {
    const themeMerged = merge(originalTheme, theme || {});

    return (
        <ThemeProvider theme={themeMerged}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    );
});

ThemeProviderInjector.displayName = "ThemeProviderInjector";

export default ThemeProviderInjector;
