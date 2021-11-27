import styled from "styled-components";
import { Box } from "../../layout/Box";

export const WebVideoContainer = styled(Box)`
    width: 100%;
    height: 100%;

    background-color: ${({ theme }) => theme.colors.background};
`;
