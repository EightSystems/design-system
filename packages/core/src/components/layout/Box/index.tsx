import * as React from "react";
import { WebBoxProps } from "./types";

export const Box: React.FC<WebBoxProps> = ({ children, ...otherProps }: WebBoxProps) => {
    return <div {...otherProps}>{children}</div>;
};

export default Box;
