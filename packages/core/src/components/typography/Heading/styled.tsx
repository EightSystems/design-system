import styled, { css } from "styled-components";
import {
    fontFaces,
    fontSizes,
    fontWeights,
    textAlign,
    textColors,
    textDecoration,
    textSelectable,
} from "../../../theme/mixins/web";

const DefaultStyles = css`
    ${textDecoration};
    ${fontFaces};
    ${fontWeights};
    ${fontSizes};
    ${textColors};
    ${textAlign};
    ${textSelectable};
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
