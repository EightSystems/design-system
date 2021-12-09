import isArray from "lodash/isArray";
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
                  user-select: none;
              `;
    }}
`;

export const backgroundColors = css`
    ${props => {
        const backgroundColor = props["data-backgroundcolor"];

        if (typeof props.theme.colors[backgroundColor] != "undefined") {
            if (!isArray(props.theme.colors[backgroundColor])) {
                return css`
                    background-color: ${props.theme.colors[backgroundColor]};
                `;
            } else {
                return css`
                    background-image: linear-gradient(${props.theme.colors[backgroundColor].join(", ")});
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
