import * as React from "react";
import { Text } from "react-native";
import { NativeHeadingProps } from "./types";
import * as S from "./styled.native";

const Heading = React.forwardRef<Text, NativeHeadingProps>(
    (
        {
            children,
            textColor = "dark",
            fontSize = "lg",
            fontFace = "primaryRegular",
            textAlign = "left",
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
            "data-textalign": textAlign,
        };

        return (
            <S.Heading {...props} {...styleProps} ref={componentRef}>
                {children}
            </S.Heading>
        );
    }
);

export default React.memo(Heading);
