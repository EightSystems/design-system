import isArray from "lodash/isArray";
import isObject from "lodash/isPlainObject";
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

        if (isArray(themeBackgroundValue) || isObject(themeBackgroundValue)) {
            let colorsListing = [];
            let start = { x: 0.0, y: 0.0 };
            let end = { x: 0.0, y: 1.0 };
            let useAngle = false;
            let angle = 0;

            if (isObject(themeBackgroundValue)) {
                if (typeof themeBackgroundValue.colors == "undefined") {
                    console.error("Your theme background property doesnt have the needed colors values");

                    return null;
                } else {
                    colorsListing = themeBackgroundValue.colors;
                    const direction: string = themeBackgroundValue.direction;
                    const themeAngle = themeBackgroundValue.angle ? +themeBackgroundValue.angle : null;

                    if (themeAngle) {
                        angle = themeAngle;
                        useAngle = true;
                    } else if (direction) {
                        if (direction.indexOf("right") > -1) {
                            start.x = 0.0;
                            end.x = 1.0;
                        } else if (direction.indexOf("left") > -1) {
                            start.x = 1.0;
                            end.x = 0.0;
                        }

                        if (direction.indexOf("bottom") > -1) {
                            start.y = 0.0;
                            end.y = 1.0;
                        } else if (direction.indexOf("top") > -1) {
                            start.y = 1.0;
                            end.y = 0.0;
                        }
                    }
                }
            } else {
                colorsListing = themeBackgroundValue;
            }

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
                <LinearGradientStyled
                    colors={colorsListing}
                    start={start}
                    end={end}
                    useAngle={useAngle}
                    angle={angle}
                    {...props}
                >
                    <Component {...extraProps} ref={componentRef} />
                </LinearGradientStyled>
            ) : null;
        } else {
            return <Component {...props} ref={componentRef} />;
        }
    });
}
