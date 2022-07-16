import React from "react";
import { ThemeContext } from "styled-components";
import { ThemeSchemaType, NativeThemeSchemaType } from "../components/core/ThemeProviderInjector/types";
import { FontSizeTypes } from "../theme/types";
import { Platform } from "../utils/Platform";

export const useThemeFontSize = (fontSize: FontSizeTypes, defaultSize: Number = 16): Number => {
    const themeContext = React.useContext<ThemeSchemaType>(ThemeContext);
    const nativeThemeContext = React.useContext<NativeThemeSchemaType>(ThemeContext);

    if (Platform.OS == "web") {
        return typeof themeContext.typography.fontSizes[fontSize] != "undefined"
            ? +themeContext.typography.fontSizes[fontSize].replace(/[^0-9]+/g, "")
            : defaultSize;
    } else {
        return typeof nativeThemeContext.nativeTypography.fontSizes[fontSize] != "undefined"
            ? +nativeThemeContext.nativeTypography.fontSizes[fontSize].replace(/[^0-9]+/g, "")
            : defaultSize;
    }
};
