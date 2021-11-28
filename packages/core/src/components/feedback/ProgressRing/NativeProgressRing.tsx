import * as React from "react";
import { Circle, Color, Svg } from "react-native-svg";
import styled, { ThemeContext } from "styled-components/native";
import { nativeTheme } from "../../../theme";
import { Text } from "../../typography/Text";
import * as S from "./styled";
import { NativeProgressRingProps } from "./types";

const StyledSvgTransformed = styled(Svg)`
    transform: rotate(-90deg);
    position: absolute;
    top: 0;
    left: 0;
`;

const ProgressRing = ({
    children,
    radius,
    stroke,
    strokeColor = "gray",
    text,
    textColor = "gray",
    textFontSize = "xxxs",
    textFontFace = "primary",
    ...props
}: NativeProgressRingProps) => {
    const themeContext = React.useContext<typeof nativeTheme>(ThemeContext);
    const strokeRealColor =
        typeof themeContext.colors[strokeColor] != "undefined" ? themeContext.colors[strokeColor] : "gray";

    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;

    const strokeDashOffset = circumference - (props.progress / 100) * circumference;

    return (
        <S.Container radius={radius}>
            <StyledSvgTransformed height={radius * 2} width={radius * 2}>
                <Circle
                    stroke={strokeRealColor as Color}
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeDasharray={circumference + " " + circumference}
                    strokeDashoffset={strokeDashOffset}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                ></Circle>
            </StyledSvgTransformed>
            {text ? (
                <S.StyledTextContainer>
                    <Text textColor={textColor} fontSize={textFontSize} fontFace={textFontFace} fontWeight={"bold"}>
                        {text}
                    </Text>
                </S.StyledTextContainer>
            ) : null}
        </S.Container>
    );
};

export default React.memo(ProgressRing);
