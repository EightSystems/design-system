import borders, { borderRadius } from "./borders";
import colors, { darkModeColors } from "./colors";
import { elements } from "./elements";
import radius from "./radius";
import { nativeShadows, shadows } from "./shadows";
import spacing from "./spacing";
import { nativeTypography, typography } from "./typography";

export const theme = {
    borders,
    borderRadius,
    colors,
    elements,
    radius,
    shadows,
    spacing,
    typography,
};

export const darkTheme = {
    ...theme,
    colors: darkModeColors,
};

export const nativeTheme = {
    borders,
    borderRadius,
    colors,
    elements,
    radius,
    nativeShadows,
    spacing,
    nativeTypography,
};

export const darkNativeTheme = {
    ...nativeTheme,
    colors: darkModeColors,
};
