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

export const borderColors = css`
    ${props => {
        const borderColor = props["data-bordercolor"];
        const borderType = props["data-bordertype"] || "default";

        if (typeof props.theme.colors[borderColor] != "undefined") {
            return css`
                border: ${props.theme.borders[borderType] || props.theme.borders.default}
                    ${props.theme.colors[borderColor]};
            `;
        }

        return null;
    }}
`;

export const borderRadius = css`
    ${props => {
        const borderRadius = props["data-borderradius"];

        if (typeof props.theme.borderRadius[borderRadius] != "undefined") {
            return css`
                border-radius: ${props.theme.borderRadius[borderRadius]};
            `;
        }

        return null;
    }}
`;

export const textDecoration = css`
    ${props =>
        props["data-italic"] === "true"
            ? css`
                  font-style: italic;
              `
            : null}
    ${props =>
        props["data-underline"] === "true"
            ? css`
                  text-decoration-line: underline;
                  text-decoration-style: solid;
              `
            : null}
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

export const marginSpacing = css`
    ${props => {
        const marginValue = props["data-margin"];
        const marginDirection = props["data-margin-direction"] || "all";

        if (typeof props.theme.spacing[marginValue] != "undefined") {
            const marginValues = [
                marginDirection == "all" || marginDirection == "vertical" ? props.theme.spacing[marginValue] : 0,
                marginDirection == "all" || marginDirection == "horizontal" ? props.theme.spacing[marginValue] : 0,
            ];

            return css`
                margin: ${marginValues.join(" ")};
            `;
        }

        return null;
    }}
`;

export const paddingSpacing = css`
    ${props => {
        const paddingValue = props["data-padding"];
        const paddingDirection = props["data-padding-direction"] || "all";

        if (typeof props.theme.spacing[paddingValue] != "undefined") {
            const paddingValues = [
                paddingDirection == "all" || paddingDirection == "vertical" ? props.theme.spacing[paddingValue] : 0,
                paddingDirection == "all" || paddingDirection == "horizontal" ? props.theme.spacing[paddingValue] : 0,
            ];

            return css`
                padding: ${paddingValues.join(" ")};
            `;
        }

        return null;
    }}
`;
