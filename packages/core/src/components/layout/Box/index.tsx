import * as React from "react";
import { BoxStyled } from "./styled";
import { BoxProps } from "./types";

export const Box = React.forwardRef<HTMLDivElement, BoxProps>(
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
