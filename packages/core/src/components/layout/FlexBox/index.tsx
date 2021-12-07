import React from "react";
import { CenteredFlexBoxStyled, FlexBoxStyled } from "./styled";
import { FlexBoxProps } from "./types";

export const FlexBox = ({ flexDirection = "row", ...otherProps }: FlexBoxProps) => {
    return <FlexBoxStyled flexDirection={flexDirection} {...otherProps} />;
};

export const CenteredFlexBox = ({ flexDirection = "row", ...otherProps }: FlexBoxProps) => {
    return <CenteredFlexBoxStyled flexDirection={flexDirection} {...otherProps} />;
};
