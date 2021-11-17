import React from "react";
import { ThemeProvider } from "styled-components";
import { ThemeProviderProps } from "./types";

const ThemeProviderInjector = ({ theme, children }: ThemeProviderProps) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviderInjector;
