import isArray from "lodash/isArray";
import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { NativeThemeSchemaType } from "../components/core/ThemeProviderInjector/types";
import { borderColors, borderRadius, marginSpacing, paddingSpacing, shadowMaker } from "./mixins/native";
let LinearGradient,
    LinearGradientStyled = null;
try {
    LinearGradient = require("react-native-linear-gradient").default;

    LinearGradientStyled = styled(LinearGradient)`
        ${borderRadius};
        ${borderColors};
        ${paddingSpacing};
        ${marginSpacing};
        ${shadowMaker};
    `;
} catch (e) {}

export function withGradientBackground<T, P = {}>(Component: any) {
    return React.forwardRef<T, P>((props, componentRef) => {
        const themeContext = useContext(ThemeContext) as NativeThemeSchemaType;

        let dataBackgroundColor = props["data-backgroundcolor"] || null;
        const themeBackgroundValue = themeContext.colors[dataBackgroundColor] || "";

        if (isArray(themeBackgroundValue)) {
            const extraProps = {
                ...props,
                "data-backgroundcolor": "transparent",
                "data-borderradius": "none",
                "data-margin": "none",
                "data-padding": "none",
                "data-bordercolor": "transparent",
                "data-shadowsize": "none",
            };

            if (!LinearGradientStyled) {
                console.error("You havent setup the react-native-linear-gradient package, so we are returning null");
            }

            return LinearGradientStyled ? (
                <LinearGradientStyled colors={themeBackgroundValue} {...props}>
                    <Component {...extraProps} ref={componentRef} />
                </LinearGradientStyled>
            ) : null;
        } else {
            return <Component {...props} ref={componentRef} />;
        }
    });
}
