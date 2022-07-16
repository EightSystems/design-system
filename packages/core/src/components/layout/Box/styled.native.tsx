import { Pressable, View } from "react-native";
import styled from "styled-components/native";
import { withGradientBackground } from "../../../theme/gradient.native";
import {
    backgroundColors,
    borderColors,
    borderRadius,
    marginSpacing,
    paddingSpacing,
    shadowMaker,
} from "../../../theme/mixins/native";
import { BoxProps } from "./types";

const BaseBoxComponent = styled.View`
    ${backgroundColors};
    ${paddingSpacing};
    ${marginSpacing};
    ${borderColors};
    ${borderRadius};
    ${shadowMaker};
`;

export const BoxStyled = withGradientBackground<View, BoxProps>(BaseBoxComponent);

export const BoxPressableStyled = withGradientBackground<typeof Pressable, BoxProps>(
    BaseBoxComponent.withComponent(Pressable)
);
