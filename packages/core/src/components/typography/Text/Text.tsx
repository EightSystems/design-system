import * as React from "react";
import * as S from "./styled";
import { WebTextProps } from "./types";

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
}: WebTextProps) => {
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
    };

    return (
        <S.Text {...styleProps} {...props}>
            {children}
        </S.Text>
    );
};

export default Text;
