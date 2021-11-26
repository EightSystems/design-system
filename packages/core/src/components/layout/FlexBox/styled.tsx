import styled from "styled-components";
import Box from "../Box";

export const FlexBoxStyled = styled(Box)`
    flex: 1;
    display: flex;
`;

export const CenteredFlexBoxStyled = styled(FlexBoxStyled)`
    align-items: center;
    justify-content: center;
`;
