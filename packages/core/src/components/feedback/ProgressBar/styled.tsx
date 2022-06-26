import styled, { css } from "styled-components";
import Box from "../../layout/Box";
import { ProgressBarProps } from "./types";

export const ProgressBarBackground = styled(Box)`
    width: 100%;
    height: ${props => props.height}px;
`;

export const ProgressBarElement = styled(Box)`
    ${(props: ProgressBarProps) => css`
        width: ${props.progress * 100}%;
    `}

    height: ${props => props.height}px;
    position: relative;
    top: 0;
    left: ${props => props.leftPosition}%;
`;
