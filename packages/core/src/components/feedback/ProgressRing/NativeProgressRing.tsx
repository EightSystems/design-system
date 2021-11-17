import * as React from "react";
import styled from "styled-components/native";
import { NativeProgressRingProps } from "./types";
import { Svg, Circle, Text } from "react-native-svg";
import { fontFaces } from "../../../theme/mixins/native";

const StyledSvgText = styled(Text)`
    ${fontFaces};
`;

const ProgressRing = ({
    children,
    radius,
    stroke,
    strokeColor,
    text,
    textFillColor,
    textFontSize,
    textFontFace,
    textXAxis,
    textYAxis,
    ...props
}: NativeProgressRingProps) => {
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;

    const strokeDashOffset = circumference - (props.progress / 100) * circumference;

    return (
        <Svg height={radius * 2} width={radius * 2}>
            <Circle
                {...props}
                stroke={strokeColor}
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={circumference + " " + circumference}
                strokeDashoffset={strokeDashOffset}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
            >
                {text ? (
                    <StyledSvgText
                        data-fontface={textFontFace}
                        textAnchor="middle"
                        alignmentBaseline="central"
                        fill={textFillColor}
                        fontSize={textFontSize}
                        x={textXAxis}
                        y={textYAxis}
                    >
                        {text}
                    </StyledSvgText>
                ) : null}
            </Circle>
        </Svg>
    );
};

export default React.memo(ProgressRing);
