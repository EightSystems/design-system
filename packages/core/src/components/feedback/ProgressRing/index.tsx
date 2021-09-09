import React from "react";
import * as S from "./styled";

import { ProgressRingProps } from "./types";

const ProgressRing = (props: ProgressRingProps) => {
    const normalizedRadius = props.radius - props.stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;

    const strokeDashOffset = circumference - (props.progress / 100) * circumference;

    return (
        <S.StyledSvg height={props.radius * 2} width={props.radius * 2}>
            <S.StyledCircle
                stroke={props.strokeColor}
                fill="transparent"
                strokeWidth={props.stroke}
                strokeDasharray={circumference + " " + circumference}
                strokeDashoffset={strokeDashOffset}
                r={normalizedRadius}
                cx={props.radius}
                cy={props.radius}
            />
            {props.text ? (
                <S.StyledText
                    text-anchor="middle"
                    alignment-baseline="central"
                    fill={props.textColor}
                    fontSize={props.textFontSize}
                    x={props.textXAxis}
                    y={props.textYAxis}
                >
                    {props.text}
                </S.StyledText>
            ) : null}
        </S.StyledSvg>
    );
};

export { ProgressRing };
export type { ProgressRingProps } from "./types";
