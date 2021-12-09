import * as React from "react";
import * as S from "./styled";
import { HeadingProps } from "./types";

export const Heading = React.memo<HeadingProps>(
    ({
        children,
        textColor = "dark",
        fontSize,
        fontFace = "primary",
        fontWeight = "bold",
        textAlign = "left",
        italic = false,
        underline = false,
        elementLevel = "h1",
        selectable = false,
        ...props
    }: HeadingProps) => {
        const styleProps = {
            "data-fontsize": fontSize,
            "data-textcolor": textColor,
            "data-fontface": fontFace,
            "data-italic": italic,
            "data-fontweight": fontWeight,
            "data-underline": underline,
            "data-textalign": textAlign,
            selectable,
        };

        switch (elementLevel) {
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
    }
);

Heading.displayName = "Heading";

export default Heading;
