import * as React from "react";
import * as S from "./styled.native";
import { NativeTextProps } from "./types";

const Text = ({
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
    ...props
}: NativeTextProps) => {
    const styleProps = {
        "data-fontsize": fontSize,
        "data-textcolor": textColor,
        "data-fontface": fontFace,
        "data-fontweight": fontWeight,
        "data-italic": italic,
        "data-underline": underline,
        "data-textalign": textAlign,
        "data-margin": margin,
        "data-padding": padding,
    };

    return (
        <S.Text {...styleProps} {...props}>
            {children}
        </S.Text>
    );
};

export default Text;
