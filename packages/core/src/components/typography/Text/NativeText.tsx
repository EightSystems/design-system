import * as React from "react";
import * as S from "./styled.native";
import { NativeTextProps } from "./types";

const Text = React.forwardRef<any, NativeTextProps>(
    (
        {
            children,
            textColor = "dark",
            fontSize = "md",
            fontFace = "primary",
            textAlign = "left",
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
            "data-textalign": textAlign,
        };

        return (
            <S.Text {...styleProps} {...props} ref={componentRef}>
                {children}
            </S.Text>
        );
    }
);

export default React.memo(Text);
