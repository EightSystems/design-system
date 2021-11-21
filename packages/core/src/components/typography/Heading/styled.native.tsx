import { Text } from "react-native";
import styled, { css } from "styled-components/native";
import { fontFaces, fontSizes, textAlign, textColors } from "../../../theme/mixins/native";

const DefaultStyles = css`
    ${props =>
        props["data-italic"]
            ? css`
                  font-style: italic;
              `
            : null}
    ${props =>
        props["data-underline"]
            ? css`
                  text-decoration: underline;
              `
            : null}    

    ${textAlign};
    ${fontFaces};
    ${fontSizes};
    ${textColors};
`;

export const Heading1 = styled(Text)`
    font-size: ${({ theme }) => theme.nativeTypography.fontSizes.lg};
    ${DefaultStyles};
`;

export const Heading2 = styled(Text)`
    font-size: ${({ theme }) => theme.nativeTypography.fontSizes.md};
    ${DefaultStyles}
`;

export const Heading3 = styled(Text)`
    font-size: ${({ theme }) => theme.nativeTypography.fontSizes.sm};
    ${DefaultStyles}
`;

export const Heading4 = styled(Text)`
    font-size: ${({ theme }) => theme.nativeTypography.fontSizes.xs};
    ${DefaultStyles}
`;

export const Heading5 = styled(Text)`
    font-size: ${({ theme }) => theme.nativeTypography.fontSizes.xxs};
    ${DefaultStyles}
`;

export const Heading6 = styled(Text)`
    font-size: ${({ theme }) => theme.nativeTypography.fontSizes.xxxs};
    ${DefaultStyles}
`;
