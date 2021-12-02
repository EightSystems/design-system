import styled from "styled-components";
import { Box } from "../Box";
import { getHeight, getUnit, getWidth } from "./helpers";

export const StyledSpacer = styled(Box)`
    width: ${getWidth}${getUnit};
    min-width: ${getWidth}${getUnit};
    height: ${getHeight}${getUnit};
    min-height: ${getHeight}${getUnit};
`;
