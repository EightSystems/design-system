import * as React from "react";
import { nativeTheme, theme } from "../../../theme";

export type ThemeSchemaType = typeof theme;
export type NativeThemeSchemaType = typeof nativeTheme;

export type ThemeProviderProps = {
    theme?: ThemeSchemaType;
    children: React.ReactNode;
};

export type NativeThemeProviderProps = {
    theme?: NativeThemeSchemaType;
    children: React.ReactNode;
};
