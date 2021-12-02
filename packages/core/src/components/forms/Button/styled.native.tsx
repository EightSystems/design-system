import { Pressable, Text } from "react-native";
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
    styled(Pressable)`
        ${backgroundColors};
        ${borderColors};
        ${borderRadius};

        ${props =>
            props["data-size"] == "small"
                ? css`
                      padding: ${({ theme }) => `${theme.spacing.xxs} ${theme.spacing.sm}`};
                  `
                : null}
        ${props =>
            props["data-size"] == "medium"
                ? css`
                      padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.default}`};
                  `
                : null}
            ${props =>
            props["data-size"] == "large"
                ? css`
                      padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.default}`};
                  `
                : null}

            ${props =>
            props["data-disabled"]
                ? css`
                      opacity: 0.75;
                  `
                : null}

        flex: 1;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        width: 100%;
        min-height: 50px;
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
