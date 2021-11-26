import React from "react";
import { NativeBoxProps } from "../Box/types";
import { CenteredFlexBoxStyled, FlexBoxStyled } from "./styled";

export const FlexBox = (props: NativeBoxProps) => {
    return <FlexBoxStyled {...props} />;
};

export const CenteredFlexBox = (props: NativeBoxProps) => {
    return <CenteredFlexBoxStyled {...props} />;
};
