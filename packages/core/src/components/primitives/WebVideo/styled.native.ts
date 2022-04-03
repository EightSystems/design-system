import styled from "styled-components";
import { Box } from "../../layout/Box";
import { FlexBox } from "../../layout/FlexBox";

export const WebVideoContainer = styled(FlexBox)`
    background-color: ${({ theme }) => theme.colors.background};
`;

export const WebVideoPlaceholderContainer = styled(Box)`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
`;

export const WebVideoPlaceholderSpinnerContainer = styled(Box)`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 101;
`;
