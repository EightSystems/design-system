import React, { OptionHTMLAttributes } from "react";

export const Option = ({ children, ...otherProps }: OptionHTMLAttributes<HTMLOptionElement>) => {
    return <option {...otherProps}>{children}</option>;
};
