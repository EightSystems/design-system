import styled from "styled-components";
import { Box } from "../../layout/Box";

export const BannerWrapper = styled(Box)`
    display: flex;
    align-items: center;

    box-shadow: ${props => props.theme.shadows.default};
    border-radius: 3px;
`;

export const CloseButton = styled.button`
    cursor: pointer;
`;
