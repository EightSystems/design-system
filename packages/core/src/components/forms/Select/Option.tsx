import React from "react";
import { OptionProps } from "./types";

export const Option = ({ children, ...otherProps }: OptionProps) => {
    return <option {...otherProps}>{children}</option>;
};
