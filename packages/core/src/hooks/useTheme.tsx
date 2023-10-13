import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { NativeThemeSchemaType, ThemeSchemaType } from "../components/core/ThemeProviderInjector/types";

export const useTheme = (): ThemeSchemaType | NativeThemeSchemaType => {
    return useContext(ThemeContext);
};
