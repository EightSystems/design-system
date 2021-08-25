import * as React from "react";
import styled from "styled-components";

function getHeight({ axis, size }) {
    return axis === "horizontal" ? 1 : size;
}

function getWidth({ axis, size }) {
    return axis === "vertical" ? 1 : size;
}

function getUnit({ unit }) {
    return unit === undefined ? "px" : unit;
}

const StyledSpacer = styled.div`
    width: ${getWidth}${getUnit};
    min-width: ${getWidth}${getUnit};
    height: ${getHeight}${getUnit};
    min-height: ${getHeight}${getUnit};
`;

export type SpacerProps = {
    size?: number;
};

const Spacer = ({ size }: SpacerProps) => {
    return <StyledSpacer size={size} />;
};
export default Spacer;
