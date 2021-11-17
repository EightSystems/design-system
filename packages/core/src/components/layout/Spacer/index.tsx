import * as React from "react";
import styled from "styled-components";

import { getWidth, getHeight, getUnit, SpacerProps } from "./helpers";

const StyledSpacer = styled.div`
    width: ${getWidth}${getUnit};
    min-width: ${getWidth}${getUnit};
    height: ${getHeight}${getUnit};
    min-height: ${getHeight}${getUnit};
`;

export type { SpacerProps };

const Spacer = ({ size }: SpacerProps) => {
    return <StyledSpacer size={size} />;
};
export default Spacer;
