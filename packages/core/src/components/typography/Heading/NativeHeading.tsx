import * as React from "react";
import { Text } from "react-native";
import * as S from "./styled.native";
import { NativeHeadingProps } from "./types";

const Heading = React.forwardRef<Text, NativeHeadingProps>(
    (
        {
            children,
            textColor = "dark",
            fontSize,
            fontFace = "primary",
            fontWeight = "bold",
            textAlign = "left",
            italic = false,
            underline = false,
            elementLevel = "h1",
            ...props
        },
        componentRef
    ) => {
        const styleProps = {
            "data-fontsize": fontSize,
            "data-textcolor": textColor,
            "data-fontface": fontFace,
            "data-italic": italic,
            "data-fontweight": fontWeight,
            "data-underline": underline,
            "data-textalign": textAlign,
        };

        switch (elementLevel) {
            case "h1":
                return (
                    <S.Heading1 ref={componentRef} {...styleProps} {...props}>
                        {children}
                    </S.Heading1>
                );
            case "h2":
                return (
                    <S.Heading2 ref={componentRef} {...styleProps} {...props}>
                        {children}
                    </S.Heading2>
                );
            case "h3":
                return (
                    <S.Heading3 ref={componentRef} {...styleProps} {...props}>
                        {children}
                    </S.Heading3>
                );
            case "h4":
                return (
                    <S.Heading4 ref={componentRef} {...styleProps} {...props}>
                        {children}
                    </S.Heading4>
                );
            case "h5":
                return (
                    <S.Heading5 ref={componentRef} {...styleProps} {...props}>
                        {children}
                    </S.Heading5>
                );
            case "h6":
                return (
                    <S.Heading6 ref={componentRef} {...styleProps} {...props}>
                        {children}
                    </S.Heading6>
                );
        }
    }
);

export default React.memo(Heading);
