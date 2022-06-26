import React, { useEffect, useState } from "react";

import { ProgressBarBackground, ProgressBarElement } from "./styled";
import { ProgressBarProps } from "./types";

export const ProgressBar = ({
    progress = 0.5,
    color = "primary",
    backgroundColor = "primaryContrast",
    indeterminate = false,
    visible = true,
    backgroundStyle,
    progressStyle,
    height = 10,
    borderRadius = "pill",
}: ProgressBarProps) => {
    const [leftPosition, setLeftPosition] = useState(0);

    useEffect(() => {
        let intervalId;

        if (indeterminate) {
            intervalId = setInterval(() => {
                if (visible) {
                    let newLeftPosition = leftPosition + 5;
                    if (newLeftPosition > 80) {
                        newLeftPosition = 0;
                    }

                    setLeftPosition(newLeftPosition);
                }
            }, 80);
        }

        return () => {
            if (indeterminate && intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [visible, indeterminate, leftPosition]);

    return visible ? (
        <ProgressBarBackground
            backgroundColor={backgroundColor}
            style={backgroundStyle}
            height={height}
            borderRadius={borderRadius}
        >
            <ProgressBarElement
                progress={indeterminate ? 0.2 : progress > 1 ? 1 : progress}
                leftPosition={indeterminate ? leftPosition : 0}
                style={progressStyle}
                backgroundColor={color}
                height={height}
                borderRadius={borderRadius}
            />
        </ProgressBarBackground>
    ) : null;
};

export default ProgressBar;
