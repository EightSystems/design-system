import * as React from "react";
import { BoxStyled } from "./styled.native";
import { NativeBoxProps } from "./types";

export const Box: React.FC<NativeBoxProps> = ({
    children,
    backgroundColor,
    padding,
    margin,
    ...otherProps
}: NativeBoxProps) => {
    const styleProps = {
        "data-backgroundcolor": backgroundColor,
        "data-margin": margin,
        "data-padding": padding,
    };

    return (
        <BoxStyled {...otherProps} {...styleProps}>
            {children}
        </BoxStyled>
    );
};

export default Box;
