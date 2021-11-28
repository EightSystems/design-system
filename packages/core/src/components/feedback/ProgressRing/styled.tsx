import styled from "styled-components";
import { Box } from "../../layout/Box";

export const Container = styled(Box)`
    width: ${props => props.radius * 2}px;
    height: ${props => props.radius * 2}px;
    position: relative;
`;

export const StyledTextContainer = styled(Box)`
    position: absolute;
    z-index: 99;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;
