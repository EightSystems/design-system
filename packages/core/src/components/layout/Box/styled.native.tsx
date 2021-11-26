import { View } from "react-native";
import styled, { css } from "styled-components/native";
import { withGradientBackground } from "../../../theme/gradient.native";
import { backgroundColors, marginSpacing, paddingSpacing } from "../../../theme/mixins/native";
import { NativeBoxProps } from "./types";

export const BoxStyled = withGradientBackground<View, NativeBoxProps>(
    styled.View`
        ${backgroundColors};
        ${paddingSpacing};
        ${marginSpacing};

        ${props =>
            props.padded
                ? css`
                      padding: ${({ theme }) => theme.spacing.default};
                  `
                : null}
    `
);
