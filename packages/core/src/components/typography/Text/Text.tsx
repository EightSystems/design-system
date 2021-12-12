import * as React from "react";
import * as S from "./styled";
import { TextProps } from "./types";

export const Text = React.memo<TextProps>(
    ({
        children,
        textColor = "dark",
        fontSize = "md",
        fontFace = "primary",
        textAlign = "left",
        fontWeight = "normal",
        italic = false,
        underline = false,
        margin,
        padding,
        selectable = false,
        ...props
    }: TextProps) => {
        const styleProps = {
            "data-fontsize": fontSize,
            "data-textcolor": textColor,
            "data-fontface": fontFace,
            "data-fontweight": fontWeight,
            "data-italic": italic,
            "data-underline": underline,
            "data-margin": margin,
            "data-padding": padding,
            "data-textalign": textAlign,
            selectable,
        };

        return (
            <S.Text {...styleProps} {...props}>
                {children}
            </S.Text>
        );
    }
);

Text.displayName = "Text";

export default Text;
