import * as React from "react";
import { nativeTheme, theme } from "../../../theme";
import { DeepPartial } from "../../../utils/types";

export type ThemeSchemaType = typeof theme;
export type NativeThemeSchemaType = typeof nativeTheme;

export type ThemeProviderProps = {
    theme?: DeepPartial<ThemeSchemaType>;
    children: React.ReactChild;
};

export type NativeThemeProviderProps = {
    theme?: DeepPartial<NativeThemeSchemaType>;
    children: React.ReactChild;
};
