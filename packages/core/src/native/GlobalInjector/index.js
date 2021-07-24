import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "../../styles/theme";
import { merge } from "lodash";

const ThemeProviderInjector = props => {
    const themeMerge = merge(Theme, props.theme || {});

    return <ThemeProvider theme={themeMerge}>{props.children}</ThemeProvider>;
};

export default ThemeProviderInjector;
