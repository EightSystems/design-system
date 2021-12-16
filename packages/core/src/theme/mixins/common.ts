import castArray from "lodash/castArray";
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
        const borderPosition = castArray(props["data-borderposition"] || "all");

        if (typeof props.theme.colors[borderColor] != "undefined") {
            const borderValue = `${props.theme.borders[borderType] || props.theme.borders.default}`.split(" ");
            const borderColorValue = props.theme.colors[borderColor] || props.theme.colors.darkTint;
            const borderStyle = borderValue.length > 1 ? borderValue[1] : "solid";
            const borderSize = borderValue[0];

            return css`
                border-style: ${borderStyle};
                border-color: ${borderColorValue};
                border-top-width: ${borderPosition.indexOf("all") > -1 || borderPosition.indexOf("top") > -1
                    ? borderSize
                    : "0px"};
                border-right-width: ${borderPosition.indexOf("all") > -1 || borderPosition.indexOf("right") > -1
                    ? borderSize
                    : "0px"};
                border-bottom-width: ${borderPosition.indexOf("all") > -1 || borderPosition.indexOf("bottom") > -1
                    ? borderSize
                    : "0px"};
                border-left-width: ${borderPosition.indexOf("all") > -1 || borderPosition.indexOf("left") > -1
                    ? borderSize
                    : "0px"};
            `;
        }

        return null;
    }}
`;
export const borderRadius = css`
    ${props => {
        const borderRadius = props["data-borderradius"];
        const borderPosition = castArray(props["data-borderposition"] || "all");

        if (typeof props.theme.borderRadius[borderRadius] != "undefined") {
            const borderRadiusValue = props.theme.borderRadius[borderRadius];

            return css`
                border-top-left-radius: ${borderPosition.indexOf("all") > -1 ||
                (borderPosition.indexOf("top") > -1 && borderPosition.indexOf("left") > -1)
                    ? borderRadiusValue
                    : "0px"};

                border-top-right-radius: ${borderPosition.indexOf("all") > -1 ||
                (borderPosition.indexOf("top") > -1 && borderPosition.indexOf("right") > -1)
                    ? borderRadiusValue
                    : "0px"};

                border-bottom-left-radius: ${borderPosition.indexOf("all") > -1 ||
                (borderPosition.indexOf("bottom") > -1 && borderPosition.indexOf("left") > -1)
                    ? borderRadiusValue
                    : "0px"};

                border-bottom-right-radius: ${borderPosition.indexOf("all") > -1 ||
                (borderPosition.indexOf("bottom") > -1 && borderPosition.indexOf("right") > -1)
                    ? borderRadiusValue
                    : "0px"};
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
