import React from "react";
import { BoxProps } from "../Box/types";
import { CenteredFlexBoxStyled, FlexBoxStyled } from "./styled";

export const FlexBox = (props: BoxProps) => {
    return <FlexBoxStyled {...props} />;
};

export const CenteredFlexBox = (props: BoxProps) => {
    return <CenteredFlexBoxStyled {...props} />;
};
