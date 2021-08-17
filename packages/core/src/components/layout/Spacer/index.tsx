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

const Spacer = styled.div`
    width: ${getWidth}${getUnit};
    min-width: ${getWidth}${getUnit};
    height: ${getHeight}${getUnit};
    min-height: ${getHeight}${getUnit};
`;

export default Spacer;
