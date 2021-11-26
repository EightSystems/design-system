import isArray from "lodash/isArray";
import React, { useContext } from "react";
import LinearGradient from "react-native-linear-gradient";
import styled, { ThemeContext } from "styled-components";
import { NativeThemeSchemaType } from "../components/core/ThemeProviderInjector/types";
import { borderColors, borderRadius, marginSpacing, paddingSpacing } from "./mixins/native";

const LinearGradientStyled = styled(LinearGradient)`
    ${borderRadius};
    ${borderColors};
    ${paddingSpacing};
    ${marginSpacing};
`;

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
            };

            return (
                <LinearGradientStyled colors={themeBackgroundValue} {...props}>
                    <Component {...extraProps} ref={componentRef} />
                </LinearGradientStyled>
            );
        } else {
            return <Component {...props} ref={componentRef} />;
        }
    });
}
