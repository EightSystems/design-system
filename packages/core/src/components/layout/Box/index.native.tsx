import * as React from "react";
import { View } from "react-native";
import { BoxStyled } from "./styled.native";
import { BoxProps } from "./types";

export const Box = React.forwardRef<View, BoxProps>(
    ({ children, backgroundColor, margin, padding, ...otherProps }, componentRef) => {
        const styleProps = {
            "data-backgroundcolor": backgroundColor,
            "data-margin": margin,
            "data-padding": padding,
        };

        return (
            <BoxStyled {...otherProps} {...styleProps} ref={componentRef}>
                {children}
            </BoxStyled>
        );
    }
);

export default Box;
