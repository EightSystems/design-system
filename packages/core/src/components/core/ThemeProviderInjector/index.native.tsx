import merge from "lodash/merge";
import React from "react";
import { ThemeProvider } from "styled-components";
import { nativeTheme as originalTheme } from "../../../theme";
import { NativeThemeProviderProps } from "./types";

const ThemeProviderInjector = ({ theme, children }: NativeThemeProviderProps) => {
    const themeMerged = merge(originalTheme, theme || {});

    return <ThemeProvider theme={themeMerged}>{children}</ThemeProvider>;
};

export default ThemeProviderInjector;
