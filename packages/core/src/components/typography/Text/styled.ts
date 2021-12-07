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
} from "../../../theme/mixins/web";

export const Text = styled.p`
    &[data-italic="true"] {
        font-style: italic;
    }
    &[data-underline="true"] {
        text-decoration: underline;
    }

    ${textAlign};
    ${fontFaces};
    ${fontWeights};
    ${fontSizes};
    ${textColors};
    ${lineHeights};
    ${letterSpacings};
    ${marginSpacing};
    ${paddingSpacing};
`;
