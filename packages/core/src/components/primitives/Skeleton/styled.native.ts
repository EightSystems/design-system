import styled from "styled-components/native";
import { Animated } from "react-native";

export const SkeletonWrapper = styled(Animated.View)`
    border-radius: ${props => (props.isCircular ? "1000px" : `${props.borderRadius}px`)};
    background: ${props => props.theme.colors.mediumTint};
    width: ${props => (props.isCircular ? `${props.size}px` : "100%")};
    height: ${props => `${props.size}px`};
`;
