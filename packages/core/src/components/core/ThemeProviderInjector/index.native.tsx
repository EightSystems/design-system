import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import merge from "lodash/merge";
import React from "react";
import { ThemeProvider } from "styled-components";
import { nativeTheme as originalTheme } from "../../../theme";
import { NativeThemeProviderProps } from "./types";

const cacheFontWeight = themeMerged => {
    const fontFacesNames = Object.keys(themeMerged.nativeTypography.fontFaces);
    const fontFacesLowerCase = fontFacesNames.reduce((acc, keyName) => {
        acc[keyName.toLowerCase()] = themeMerged.nativeTypography.fontFaces[keyName];
        return acc;
    }, {});

    return merge(themeMerged, {
        nativeTypography: {
            fontFaces: fontFacesLowerCase,
        },
    });
};

const ThemeProviderInjector = ({ theme, children }: NativeThemeProviderProps) => {
    let themeMerged = merge(originalTheme, theme || {});
    themeMerged = cacheFontWeight(themeMerged);

    return (
        <ActionSheetProvider>
            <ThemeProvider theme={themeMerged}>{children}</ThemeProvider>
        </ActionSheetProvider>
    );
};

export default ThemeProviderInjector;
