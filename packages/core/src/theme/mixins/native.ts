import isArray from "lodash/isArray";
import { Platform } from "react-native";
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

export const backgroundColors = css`
    ${props => {
        const backgroundColor = props["data-backgroundcolor"];

        if (typeof props.theme.colors[backgroundColor] != "undefined") {
            if (!isArray(props.theme.colors[backgroundColor])) {
                return css`
                    background-color: ${props.theme.colors[backgroundColor]};
                `;
            } else {
                console.error(
                    `${backgroundColor} is a gradient, we don't support it directly in native, wrap your component with "withGradientBackground" from the "theme/gradient" module`
                );
            }
        }

        return null;
    }}
`;

export const textSelectable = css``;

export const letterSpacings = css`
    ${props => {
        const letterSpacing = props["data-letterspacing"];

        if (typeof props.theme.nativeTypography.letterSpacings[letterSpacing] != "undefined") {
            return css`
                letter-spacing: ${props.theme.nativeTypography.letterSpacings[letterSpacing]};
            `;
        }

        return null;
    }}
`;

export const lineHeights = css`
    ${props => {
        const lineHeight = props["data-lineheight"];

        if (typeof props.theme.nativeTypography.lineHeights[lineHeight] != "undefined") {
            return css`
                line-height: ${props.theme.nativeTypography.lineHeights[lineHeight]}px;
            `;
        }

        return null;
    }}
`;

export const fontSizes = css`
    ${props => {
        const fontSize = props["data-fontsize"];

        if (typeof props.theme.nativeTypography.fontSizes[fontSize] != "undefined") {
            return css`
                font-size: ${props.theme.nativeTypography.fontSizes[fontSize]};
            `;
        }

        return null;
    }}
`;

export const fontWeights = css`
    ${props => {
        const fontWeight = props["data-fontweight"];
        const fontFace = props["data-fontface"] || "primary";
        const finalFontName = `${fontFace}${fontWeight}`.toLowerCase();

        if (typeof props.theme.nativeTypography.fontFaces[finalFontName] != "undefined") {
            return css`
                font-family: ${props.theme.nativeTypography.fontFaces[finalFontName]};
            `;
        }

        return null;
    }}
`;

export const fontFaces = css`
    ${props => {
        const fontFace = props["data-fontface"];

        if (typeof props.theme.nativeTypography.fontFaces[fontFace] != "undefined") {
            return css`
                font-family: ${props.theme.nativeTypography.fontFaces[fontFace]};
            `;
        }

        return null;
    }}
`;

export const shadowMaker = css`
    ${props => {
        const shadowSize = props["data-shadowsize"];

        if (typeof props.theme.nativeShadows[shadowSize] != "undefined") {
            return Platform.OS == "android"
                ? css`
                      elevation: ${props.theme.nativeShadows[shadowSize].elevation};
                  `
                : css`
                      shadow-color: ${props.theme.nativeShadows[shadowSize].shadowColor};
                      shadow-offset: ${props.theme.nativeShadows[shadowSize].shadowOffset.width}px
                          ${props.theme.nativeShadows[shadowSize].shadowOffset.height}px;
                      shadow-opacity: ${props.theme.nativeShadows[shadowSize].shadowOpacity};
                      shadow-radius: ${props.theme.nativeShadows[shadowSize].shadowRadius}px;
                  `;
        }
    }}
`;
