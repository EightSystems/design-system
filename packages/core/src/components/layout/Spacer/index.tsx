import * as React from "react";
import { StyledSpacer } from "./styled";
import { SpacerProps } from "./types";

export type { SpacerProps };

export const Spacer = ({ size, axis = "vertical", ...otherProps }: SpacerProps) => {
    return <StyledSpacer size={size} axis={axis} {...otherProps} />;
};
export default Spacer;
