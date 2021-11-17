import * as React from "react";
import { WebTextProps } from "./types";
import * as S from "./styled";

const Text = React.forwardRef<HTMLParagraphElement, WebTextProps>(
    (
        {
            children,
            textColor = "dark",
            fontSize = "md",
            fontFace = "primary",
            fontWeight = "normal",
            italic = false,
            underline = false,
            ...props
        },
        componentRef
    ) => {
        const styleProps = {
            "data-fontsize": fontSize,
            "data-textcolor": textColor,
            "data-fontface": fontFace,
            "data-fontweight": fontWeight,
            "data-italic": italic,
            "data-underline": underline,
        };

        return (
            <S.Text {...styleProps} {...props} ref={componentRef}>
                {children}
            </S.Text>
        );
    }
);

export default React.memo(Text);
