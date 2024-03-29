import keys from "lodash/keys";
import merge from "lodash/merge";
import React from "react";
import { ThemeProvider } from "styled-components";
import { nativeTheme as originalTheme } from "../../../theme";
import { ToastProvider } from "../../feedback/Toast/ToastProvider.native";
import { NativeThemeProviderProps, NativeThemeSchemaType } from "./types";

const cacheFontWeight = (themeMerged: NativeThemeSchemaType): NativeThemeSchemaType => {
    const fontFacesNames = keys(themeMerged.nativeTypography.fontFaces);
    const fontFacesLowerCase = fontFacesNames.reduce((acc: any, keyName: string) => {
        acc[keyName.toLowerCase()] = themeMerged.nativeTypography.fontFaces[keyName];
        return acc;
    }, {});

    return merge(themeMerged, {
        nativeTypography: {
            fontFaces: fontFacesLowerCase,
        },
    });
};

export const ThemeProviderInjector = React.memo<NativeThemeProviderProps>(
    ({ theme, children }: NativeThemeProviderProps) => {
        const themeMerged = cacheFontWeight(merge(originalTheme, theme || {}));

        return (
            <ThemeProvider theme={themeMerged}>
                <ToastProvider>{children}</ToastProvider>
            </ThemeProvider>
        );
    }
);

ThemeProviderInjector.displayName = "ThemeProviderInjector";

export default ThemeProviderInjector;
