import React from "react";
import GlobalStyles from "../../styles/global";
import { ThemeProvider } from "styled-components";
import Theme from "../../styles/theme";
import { merge } from "lodash";

export const ThemeProviderInjector = props => {
    const themeMerge = merge(Theme, props.theme || {});

    return (
        <ThemeProvider theme={themeMerge}>
            <GlobalStyles />
            {props.children}
        </ThemeProvider>
    );
};

export default ThemeProviderInjector;
