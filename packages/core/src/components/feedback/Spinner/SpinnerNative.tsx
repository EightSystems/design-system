import * as React from "react";
import { ActivityIndicator, Platform } from "react-native";
import { ThemeContext } from "styled-components/native";
import { nativeTheme } from "../../../theme";
import { SpinnerProps } from "./types";

const Spinner = ({ color = "primary", size = "lg" }: SpinnerProps) => {
    const themeContext = React.useContext<typeof nativeTheme>(ThemeContext);
    const spinnerRealColor =
        typeof themeContext.colors[color] != "undefined" ? (themeContext.colors[color] as string) : "gray";

    const spinnerRealSize =
        typeof themeContext.nativeTypography.fontSizes[size] != "undefined"
            ? +themeContext.nativeTypography.fontSizes[size].replace(/[^0-9]+/g, "")
            : 32;

    if (Platform.OS === "ios") {
        /*
         * Transform uses a multiplier, so we divide the size by 36 which is the width for the large size
         * then we also make width and height to the size requested, so the element uses the space properly
         */

        return (
            <ActivityIndicator
                color={spinnerRealColor}
                size={"large"}
                style={{
                    transform: [{ scale: spinnerRealSize / 36 }],
                    width: spinnerRealSize,
                    height: spinnerRealSize,
                }}
            />
        );
    }

    return <ActivityIndicator color={spinnerRealColor} size={spinnerRealSize} />;
};

export default Spinner;
