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
    ${props =>
        props["data-letterspacing"] == "xxs"
            ? css`
                  letter-spacing: ${({ theme }) => theme.nativeTypography.lineHeights.xxs};
              `
            : null}
    ${props =>
        props["data-letterspacing"] == "xs"
            ? css`
                  letter-spacing: ${({ theme }) => theme.nativeTypography.lineHeights.xs};
              `
            : null}
    ${props =>
        props["data-letterspacing"] == "sm"
            ? css`
                  letter-spacing: ${({ theme }) => theme.nativeTypography.lineHeights.sm};
              `
            : null}
    ${props =>
        props["data-letterspacing"] == "default"
            ? css`
                  letter-spacing: ${({ theme }) => theme.nativeTypography.lineHeights.default};
              `
            : null}
    ${props =>
        props["data-letterspacing"] == "md"
            ? css`
                  letter-spacing: ${({ theme }) => theme.nativeTypography.lineHeights.md};
              `
            : null}
    ${props =>
        props["data-letterspacing"] == "lg"
            ? css`
                  letter-spacing: ${({ theme }) => theme.nativeTypography.lineHeights.lg};
              `
            : null}
    ${props =>
        props["data-letterspacing"] == "xl"
            ? css`
                  letter-spacing: ${({ theme }) => theme.nativeTypography.lineHeights.xl};
              `
            : null}
`;

export const lineHeights = css`
    ${props =>
        props["data-lineheight"] == "none"
            ? css`
                  line-height: ${({ theme }) => theme.nativeTypography.lineHeights.none + `px`};
              `
            : null}
    ${props =>
        props["data-lineheight"] == "shorther"
            ? css`
                  line-height: ${({ theme }) => theme.nativeTypography.lineHeights.shorter + `px`};
              `
            : null}
    ${props =>
        props["data-lineheight"] == "short"
            ? css`
                  line-height: ${({ theme }) => theme.nativeTypography.lineHeights.short + `px`};
              `
            : null}
    ${props =>
        props["data-lineheight"] == "base"
            ? css`
                  line-height: ${({ theme }) => theme.nativeTypography.lineHeights.base + `px`};
              `
            : null} 
    ${props =>
        props["data-lineheight"] == "tall"
            ? css`
                  line-height: ${({ theme }) => theme.nativeTypography.lineHeights.tall + `px`};
              `
            : null}
    ${props =>
        props["data-lineheight"] == "taller"
            ? css`
                  line-height: ${({ theme }) => theme.nativeTypography.lineHeights.taller + `px`};
              `
            : null}
`;

export const fontSizes = css`
    ${props =>
        props["data-fontsize"] == "xxxs"
            ? css`
                  font-size: ${({ theme }) => theme.nativeTypography.fontSizes.xxxs};
              `
            : null}
    ${props =>
        props["data-fontsize"] == "xxs"
            ? css`
                  font-size: ${({ theme }) => theme.nativeTypography.fontSizes.xxs};
              `
            : null}
    ${props =>
        props["data-fontsize"] == "xs"
            ? css`
                  font-size: ${({ theme }) => theme.nativeTypography.fontSizes.xs};
              `
            : null}
    ${props =>
        props["data-fontsize"] == "sm"
            ? css`
                  font-size: ${({ theme }) => theme.nativeTypography.fontSizes.sm};
              `
            : null}
    ${props =>
        props["data-fontsize"] == "md"
            ? css`
                  font-size: ${({ theme }) => theme.nativeTypography.fontSizes.md};
              `
            : null}
    ${props =>
        props["data-fontsize"] == "lg"
            ? css`
                  font-size: ${({ theme }) => theme.nativeTypography.fontSizes.lg};
              `
            : null}
    ${props =>
        props["data-fontsize"] == "xl"
            ? css`
                  font-size: ${({ theme }) => theme.nativeTypography.fontSizes.xl};
              `
            : null}
    ${props =>
        props["data-fontsize"] == "xxl"
            ? css`
                  font-size: ${({ theme }) => theme.nativeTypography.fontSizes.xxl};
              `
            : null}
    ${props =>
        props["data-fontsize"] == "xxlg"
            ? css`
                  font-size: ${({ theme }) => theme.nativeTypography.fontSizes.xxlg};
              `
            : null}
    ${props =>
        props["data-fontsize"] == "display"
            ? css`
                  font-size: ${({ theme }) => theme.nativeTypography.fontSizes.display};
              `
            : null}
`;

export const textAlign = css`
    ${props =>
        props["data-textalign"] == "center"
            ? css`
                  text-align: center;
              `
            : null}

    ${props =>
        props["data-textalign"] == "left"
            ? css`
                  text-align: left;
              `
            : null}

    ${props =>
        props["data-textalign"] == "right"
            ? css`
                  text-align: right;
              `
            : null}

    ${props =>
        props["data-textalign"] == "justify"
            ? css`
                  text-align: justify;
              `
            : null}
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
