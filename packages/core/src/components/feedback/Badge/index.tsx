import React from "react";
import { Text } from "../../typography/Text";
import { BadgeStyled } from "./styled";
import { BadgeProps } from "./types";

export const Badge = ({
    size = "default",
    backgroundColor = "danger",
    borderRadius = "full",
    textColor = "white",
    textSize = "xs",
    children,
    ...otherProps
}: BadgeProps) => {
    return (
        <BadgeStyled backgroundColor={backgroundColor} borderRadius={borderRadius} size={size} {...otherProps}>
            <Text textColor={textColor} fontSize={textSize}>
                {children}
            </Text>
        </BadgeStyled>
    );
};
