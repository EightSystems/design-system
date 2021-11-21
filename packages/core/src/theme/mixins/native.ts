import { css } from "styled-components/native";

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
                border: solid 2px ${props.theme.colors[borderColor]};
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

export const textAlign = css`
    ${props => {
        const textAlign = props["data-textalign"];
        const allowedTextAligns = ["center", "left", "right", "justify"];

        if (allowedTextAligns.indexOf(textAlign) > -1) {
            return css`
                text-align: ${textAlign};
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
