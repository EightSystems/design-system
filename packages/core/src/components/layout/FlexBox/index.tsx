import React from "react";
import { FlexBoxStyled } from "./styled";
import { FlexBoxProps } from "./types";

export const FlexBox = ({
    flexDirection = "row",
    alignItems = null,
    justifyContent = null,
    ...otherProps
}: FlexBoxProps) => {
    return (
        <FlexBoxStyled
            flexDirection={flexDirection}
            alignItems={alignItems}
            justifyContent={justifyContent}
            {...otherProps}
        />
    );
};

export const CenteredFlexBox = ({ flexDirection = "row", ...otherProps }: FlexBoxProps) => {
    return <FlexBox flexDirection={flexDirection} alignItems={"center"} justifyContent={"center"} {...otherProps} />;
};
