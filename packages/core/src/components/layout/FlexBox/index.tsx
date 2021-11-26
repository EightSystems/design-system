import React from "react";
import { WebBoxProps } from "../Box/types";
import { CenteredFlexBoxStyled, FlexBoxStyled } from "./styled";

export const FlexBox = (props: WebBoxProps) => {
    return <FlexBoxStyled {...props} />;
};

export const CenteredFlexBox = (props: WebBoxProps) => {
    return <CenteredFlexBoxStyled {...props} />;
};
