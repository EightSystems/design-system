import isArray from "lodash/isArray";
import isObject from "lodash/isPlainObject";
import { css } from "styled-components";

export {
    borderColors,
    borderRadius,
    marginSpacing,
    paddingSpacing,
    textAlign,
    textColors,
    textDecoration,
} from "./common";

export const textSelectable = css`
    ${props => {
        return props["selectable"]
            ? css`
                  user-select: initial;
              `
            : css`
                  user-select: ${props.theme.typography.defaultTextSelectable ? "initial" : "none"};
              `;
    }}
`;

export const backgroundColors = css`
    ${props => {
        const backgroundColor = props["data-backgroundcolor"];

        if (typeof props.theme.colors[backgroundColor] != "undefined") {
            if (!isArray(props.theme.colors[backgroundColor]) && !isObject(props.theme.colors[backgroundColor])) {
                return css`
                    background-color: ${props.theme.colors[backgroundColor]};
                `;
            } else {
                const themeBackgroundValue = props.theme.colors[backgroundColor];

                let gradientContent = "";

                if (isObject(themeBackgroundValue)) {
                    if (
                        (typeof themeBackgroundValue.direction == "undefined" &&
                            typeof themeBackgroundValue.angle == "undefined") ||
                        typeof themeBackgroundValue.colors == "undefined"
                    ) {
                        console.error(
                            "Your theme background property doesnt have the needed direction, or angle, and/or colors values"
                        );

                        return null;
                    } else {
                        const colorsListing = themeBackgroundValue.colors;
                        const direction = themeBackgroundValue.direction;
                        const angle = themeBackgroundValue.angle ? +themeBackgroundValue.angle : null;

                        if (direction) {
                            gradientContent = `to ${direction}, ${colorsListing.join(", ")}`;
                        } else if (angle) {
                            gradientContent = `${angle}deg, ${colorsListing.join(", ")}`;
                        } else {
                            gradientContent = colorsListing.join(", ");
                        }
                    }
                } else {
                    gradientContent = themeBackgroundValue.join(", ");
                }

                return css`
                    background-image: linear-gradient(${gradientContent});
                `;
            }
        }

        return null;
    }}
`;

export const letterSpacings = css`
    ${props => {
        const letterSpacing = props["data-letterspacing"];

        if (typeof props.theme.typography.letterSpacings[letterSpacing] != "undefined") {
            return css`
                letter-spacing: ${props.theme.typography.letterSpacings[letterSpacing]};
            `;
        }

        return null;
    }}
`;

export const lineHeights = css`
    ${props => {
        const lineHeight = props["data-lineheight"];

        if (typeof props.theme.typography.lineHeights[lineHeight] != "undefined") {
            return css`
                line-height: ${props.theme.typography.lineHeights[lineHeight]};
            `;
        }

        return null;
    }}
`;

export const fontWeights = css`
    ${props => {
        const fontWeight = props["data-fontweight"];

        if (typeof props.theme.typography.fontWeights[fontWeight] != "undefined") {
            return css`
                font-weight: ${props.theme.typography.fontWeights[fontWeight]};
            `;
        }

        return null;
    }}
`;

export const fontSizes = css`
    ${props => {
        const fontSize = props["data-fontsize"];

        if (typeof props.theme.typography.fontSizes[fontSize] != "undefined") {
            return css`
                font-size: ${props.theme.typography.fontSizes[fontSize]};
            `;
        }

        return null;
    }}
`;

export const fontFaces = css`
    ${props => {
        const fontFace = props["data-fontface"];

        if (typeof props.theme.typography.fontFaces[fontFace] != "undefined") {
            return css`
                font-family: ${props.theme.typography.fontFaces[fontFace]};
            `;
        }

        return null;
    }}
`;

export const shadowMaker = css`
    ${props => {
        const shadowSize = props["data-shadowsize"];

        if (typeof props.theme.shadows[shadowSize] != "undefined") {
            return css`
                box-shadow: ${props.theme.shadows[shadowSize]};
            `;
        }
    }}
`;
