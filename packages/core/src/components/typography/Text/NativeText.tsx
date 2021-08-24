import * as React from "react";
import { NativeTextProps } from "./types";
import * as S from "./styled.native";

const Text = React.forwardRef<any, NativeTextProps>(
    (
        {
            children,
            textColor = "dark",
            fontSize = "md",
            fontFace = "primaryRegular",
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
