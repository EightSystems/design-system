import * as React from "react";
import { BoxStyled, BoxPressableStyled } from "./styled";
import { BoxProps } from "./types";

export const Box = ({
    children,
    backgroundColor,
    margin,
    padding,
    paddingDirection = "all",
    marginDirection = "all",
    padded = false,
    borderColor,
    borderPosition,
    borderType,
    borderRadius,
    shadowSize,
    onPress,
    ...otherProps
}: BoxProps) => {
    const styleProps = {
        "data-backgroundcolor": backgroundColor,
        "data-margin": margin,
        "data-margin-direction": marginDirection,
        "data-padding": padded ? "default" : padding,
        "data-padding-direction": padded ? "all" : paddingDirection,
        "data-bordercolor": borderColor,
        "data-borderradius": borderRadius,
        "data-bordertype": borderType,
        "data-borderposition": borderPosition,
        "data-shadowsize": shadowSize,
    };

    return onPress ? (
        <BoxPressableStyled {...otherProps} {...styleProps} onPress={onPress} onClick={onPress}>
            {children}
        </BoxPressableStyled>
    ) : (
        <BoxStyled {...otherProps} {...styleProps}>
            {children}
        </BoxStyled>
    );
};

export default Box;
