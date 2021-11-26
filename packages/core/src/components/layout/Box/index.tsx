import * as React from "react";
import { BoxStyled } from "./styled";
import { WebBoxProps } from "./types";

export const Box: React.FC<WebBoxProps> = ({
    children,
    backgroundColor,
    margin,
    padding,
    ...otherProps
}: WebBoxProps) => {
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
