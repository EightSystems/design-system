import * as React from "react";
import { WebHeadingProps } from "./types";
import * as S from "./styled";

const Heading = ({
    children,
    fontSize = "lg",
    fontFace = "primary",
    letterSpacing = "default",
    lineHeight = "tall",
    bold = false,
    italic = false,
    underline = false,
    htmlElement = "h1",
    ...props
}: WebHeadingProps) => {
    const styleProps = {
        "data-fontsize": fontSize,
        "data-letterspacing": letterSpacing,
        "data-lineheight": lineHeight,
        "data-fontface": fontFace,
        "data-bold": bold,
        "data-italic": italic,
        "data-underline": underline,
    };

    switch (htmlElement) {
        case "h1":
            return (
                <S.Heading1 {...styleProps} {...props}>
                    {children}
                </S.Heading1>
            );
        case "h2":
            return (
                <S.Heading2 {...styleProps} {...props}>
                    {children}
                </S.Heading2>
            );
        case "h3":
            return (
                <S.Heading3 {...styleProps} {...props}>
                    {children}
                </S.Heading3>
            );
        case "h4":
            return (
                <S.Heading4 {...styleProps} {...props}>
                    {children}
                </S.Heading4>
            );
        case "h5":
            return (
                <S.Heading5 {...styleProps} {...props}>
                    {children}
                </S.Heading5>
            );
        case "h6":
            return (
                <S.Heading6 {...styleProps} {...props}>
                    {children}
                </S.Heading6>
            );
    }
};

export default Heading;
