import * as React from "react";
import { nativeTheme, theme } from "../../../theme";
import { DeepPartial } from "../../../utils/types";

export type ThemeSchemaType = DeepPartial<typeof theme>;
export type NativeThemeSchemaType = DeepPartial<typeof nativeTheme>;

export type ThemeProviderProps = {
    theme?: ThemeSchemaType;
    children: React.ReactNode;
};

export type NativeThemeProviderProps = {
    theme?: NativeThemeSchemaType;
    children: React.ReactNode;
};
