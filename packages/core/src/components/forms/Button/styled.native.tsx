import { Text, TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { withGradientBackground } from "../../../theme/gradient.native";
import {
    backgroundColors,
    borderColors,
    borderRadius,
    fontFaces,
    fontSizes,
    fontWeights,
    textAlign,
    textColors,
} from "../../../theme/mixins/native";

export const ButtonPressable = withGradientBackground<any, any>(
    styled(TouchableOpacity)`
        ${backgroundColors};
        ${borderColors};
        ${borderRadius};

        min-height: ${({ theme }) => theme.elements.minHeight.default};

        ${props =>
            props["data-size"] == "small"
                ? css`
                      padding: ${({ theme }) => `${theme.spacing.xxs} ${theme.spacing.sm}`};
                      min-height: ${({ theme }) => theme.elements.minHeight.small};
                  `
                : null}
        ${props =>
            props["data-size"] == "medium"
                ? css`
                      padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.default}`};
                      min-height: ${({ theme }) => theme.elements.minHeight.medium};
                  `
                : null}
            ${props =>
            props["data-size"] == "large"
                ? css`
                      padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.default}`};
                      min-height: ${({ theme }) => theme.elements.minHeight.large};
                  `
                : null}

            ${props =>
            props["data-disabled"]
                ? css`
                      opacity: 0.75;
                  `
                : null}

        justify-content: center;
        align-items: center;
        flex-direction: row;
        width: 100%;
    `
);

export const StyledText = styled(Text)`
    ${textAlign};
    ${textColors};
    ${fontFaces};
    ${fontWeights};
    width: 100%;

    ${props =>
        props["data-size"] == "small"
            ? css`
                  font-size: ${({ theme }) => theme.nativeTypography.fontSizes.xxs};
              `
            : null}
    ${props =>
        props["data-size"] == "medium"
            ? css`
                  font-size: ${({ theme }) => theme.nativeTypography.fontSizes.xs};
              `
            : null}
    ${props =>
        props["data-size"] == "large"
            ? css`
                  font-size: ${({ theme }) => theme.nativeTypography.fontSizes.xs};
              `
            : null}

    ${fontSizes};
`;
