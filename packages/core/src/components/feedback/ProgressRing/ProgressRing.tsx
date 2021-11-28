import * as React from "react";
import styled, { ThemeContext } from "styled-components";
import { theme } from "../../../theme";
import { Text } from "../../typography/Text";
import * as S from "./styled";
import { WebProgressRingProps } from "./types";

const StyledCircle = styled.circle`
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
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
}: WebProgressRingProps) => {
    const themeContext = React.useContext<typeof theme>(ThemeContext);
    const strokeRealColor =
        typeof themeContext.colors[strokeColor] != "undefined" ? themeContext.colors[strokeColor] : "gray";

    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;

    const strokeDashOffset = circumference - (props.progress / 100) * circumference;

    return (
        <S.Container radius={radius}>
            <S.StyledTextContainer>
                <svg height={radius * 2} width={radius * 2}>
                    <StyledCircle
                        stroke={strokeRealColor}
                        fill="transparent"
                        strokeWidth={stroke}
                        strokeDasharray={circumference + " " + circumference}
                        strokeDashoffset={strokeDashOffset}
                        r={normalizedRadius}
                        cx={radius}
                        cy={radius}
                    />
                </svg>
            </S.StyledTextContainer>
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
