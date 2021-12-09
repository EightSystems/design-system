import styled from "styled-components";
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

export const Text = styled.p`
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
`;
