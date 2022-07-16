import React from "react";
import { ThemeContext } from "styled-components";
import { ThemeSchemaType } from "../components/core/ThemeProviderInjector/types";
import { ColorTypes } from "../theme/types";

export const useThemeColor = (color: ColorTypes, defaultColor: string = "gray"): string => {
    const themeContext = React.useContext<ThemeSchemaType>(ThemeContext);

    return typeof themeContext.colors[color] != "undefined" ? (themeContext.colors[color] as string) : defaultColor;
};
