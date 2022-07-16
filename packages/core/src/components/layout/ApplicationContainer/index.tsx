import React from "react";
import { BoxProps } from "../Box/types";
import { ApplicationContainerStyled } from "./styled";

export const ApplicationContainer = ({ children, ...otherProps }: BoxProps) => {
    return (
        <ApplicationContainerStyled backgroundColor="background" {...otherProps}>
            {children}
        </ApplicationContainerStyled>
    );
};
