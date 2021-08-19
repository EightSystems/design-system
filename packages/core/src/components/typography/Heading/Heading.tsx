import * as React from "react";
import { WebHeadingProps } from "./types";
import * as S from "./styled";

const Heading = React.forwardRef<HTMLHeadingElement, WebHeadingProps>(
    (
        {
            children,
            textColor = "dark",
            fontSize = "lg",
            fontFace = "primary",
            fontWeight = "normal",
            letterSpacing = "default",
            lineHeight = "tall",
            italic = false,
            underline = false,
            htmlElement = "h1",
            ...props
        },
        componentRef
    ) => {
        const styleProps = {
            "data-fontsize": fontSize,
            "data-letterspacing": letterSpacing,
            "data-textcolor": textColor,
            "data-lineheight": lineHeight,
            "data-fontface": fontFace,
            "data-fontweight": fontWeight,
            "data-italic": italic,
            "data-underline": underline,
        };

        switch (htmlElement) {
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
