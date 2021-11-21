import styled, { css } from "styled-components";
import { fontFaces, fontSizes, fontWeights, textColors } from "../../../theme/mixins/web";

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
    font-size: ${({ theme }) => theme.typography.fontSizes.lg};
    ${DefaultStyles};
`;

export const Heading2 = styled.h2`
    font-size: ${({ theme }) => theme.typography.fontSizes.md};
    ${DefaultStyles}
`;

export const Heading3 = styled.h3`
    font-size: ${({ theme }) => theme.typography.fontSizes.sm};
    ${DefaultStyles}
`;

export const Heading4 = styled.h4`
    font-size: ${({ theme }) => theme.typography.fontSizes.xs};
    ${DefaultStyles}
`;

export const Heading5 = styled.h5`
    font-size: ${({ theme }) => theme.typography.fontSizes.xxs};
    ${DefaultStyles}
`;

export const Heading6 = styled.h6`
    font-size: ${({ theme }) => theme.typography.fontSizes.xxxs};
    ${DefaultStyles}
`;
