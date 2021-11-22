import { Pressable, Text } from "react-native";
import styled, { css } from "styled-components/native";
import {
    backgroundColors,
    borderColors,
    fontFaces,
    fontSizes,
    textAlign,
    textColors,
} from "../../../theme/mixins/native";

export const ButtonPressable = styled(Pressable)`
    ${backgroundColors};
    ${borderColors};

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

    border-radius: 5px;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    min-height: 50px;
`;

export const StyledText = styled(Text)`
    ${textAlign};
    ${textColors};
    ${fontFaces};
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
