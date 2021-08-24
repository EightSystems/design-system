import styled, { css } from "styled-components";
import { fontSizes, fontWeights, fontFaces, textColors } from "../../../theme/mixins/web";

const DefaultStyles = css`
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
`;

export const Heading1 = styled.h1`
    ${DefaultStyles};
`;

export const Heading2 = styled.h2`
    ${DefaultStyles}
`;

export const Heading3 = styled.h3`
    ${DefaultStyles}
`;

export const Heading4 = styled.h4`
    ${DefaultStyles}
`;

export const Heading5 = styled.h5`
    ${DefaultStyles}
`;

export const Heading6 = styled.h6`
    ${DefaultStyles}
`;
