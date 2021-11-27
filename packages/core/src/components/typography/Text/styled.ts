import styled from "styled-components";
import { fontFaces, fontSizes, fontWeights, letterSpacings, lineHeights, textColors } from "../../../theme/mixins/web";

export const Text = styled.p`
    &[data-italic="true"] {
        font-style: italic;
    }
    &[data-underline="true"] {
        text-decoration: underline;
    }

    ${fontFaces};
    ${fontWeights};
    ${fontSizes};
    ${textColors};
    ${lineHeights};
    ${letterSpacings};
`;
