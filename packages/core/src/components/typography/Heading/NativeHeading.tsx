import * as React from "react";
import { StyleSheet } from "react-native";
import { NativeHeadingProps } from "./types";
import * as S from "./styled.native";

const Heading = React.forwardRef<any, NativeHeadingProps>(
    (
        {
            children,
            textColor = "dark",
            fontSize = "lg",
            fontFace = "primaryRegular",
            letterSpacing = "default",
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
            <S.Heading
                {...props}
                {...styleProps}
                ref={componentRef}
                style={StyleSheet.flatten([S.getLetterSpacingStyle(letterSpacing)])}
            >
                {children}
            </S.Heading>
        );
    }
);

export default React.memo(Heading);
