import { css } from "styled-components";

export const textColors = css`
    ${props => {
        const textColor = props["data-textcolor"];

        if (typeof props.theme.colors[textColor] != "undefined") {
            return css`
                color: ${props.theme.colors[textColor]};
            `;
        }

        return null;
    }}
`;

export const backgroundColors = css`
    ${props => {
        const backgroundColor = props["data-backgroundcolor"];

        if (typeof props.theme.colors[backgroundColor] != "undefined") {
            return css`
                background-color: ${props.theme.colors[backgroundColor]};
            `;
        }

        return null;
    }}
`;

export const borderColors = css`
    ${props => {
        const borderColor = props["data-bordercolor"];

        if (typeof props.theme.colors[borderColor] != "undefined") {
            return css`
                border-color: ${props.theme.colors[borderColor]};
            `;
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
