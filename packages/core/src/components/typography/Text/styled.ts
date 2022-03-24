import styled, { css } from "styled-components";
import {
    fontFaces,
    fontSizes,
    fontWeights,
    letterSpacings,
    lineHeights,
    marginSpacing,
    paddingSpacing,
    textAlign,
    textColors,
    textDecoration,
    textSelectable,
} from "../../../theme/mixins/web";
import { TextProps } from "./types";

export const Text = styled.p<TextProps>`
    ${textDecoration};
    ${textAlign};
    ${fontFaces};
    ${fontWeights};
    ${fontSizes};
    ${textColors};
    ${lineHeights};
    ${letterSpacings};
    ${marginSpacing};
    ${paddingSpacing};
    ${textSelectable};

    ${(props: TextProps) =>
        props.numberOfLines
            ? css`
                  display: -webkit-box;
                  -webkit-line-clamp: ${(props: TextProps) => props.numberOfLines};
                  -webkit-box-orient: vertical;
              `
            : null}
`;
