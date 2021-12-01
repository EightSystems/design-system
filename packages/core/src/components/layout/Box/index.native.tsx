import * as React from "react";
import { View } from "react-native";
import { BoxStyled } from "./styled.native";
import { NativeBoxProps } from "./types";

export const Box = React.forwardRef<View, NativeBoxProps>(
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
