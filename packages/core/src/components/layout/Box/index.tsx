import * as React from "react";
import { BoxStyled } from "./styled";
import { WebBoxProps } from "./types";

export const Box = React.forwardRef<HTMLDivElement, WebBoxProps>(
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
