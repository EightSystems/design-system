import React from "react";
import styled from "styled-components/native";
import { Circle, Text, Svg } from "react-native-svg";

export const StyledCircle = ({ children, ...otherProps }) => {
    return (
        <Circle {...otherProps} transform={`rotate(-90, ${otherProps.cx}, ${otherProps.cy})`}>
            {children}
        </Circle>
    );
};

export const StyledText = styled(Text)`
    font-family: ${props => props.theme.nativeTypography.fontFaces.secondarySemiBold};
    font-weight: 700;
`;

export const StyledSvg = styled(Svg)``;
