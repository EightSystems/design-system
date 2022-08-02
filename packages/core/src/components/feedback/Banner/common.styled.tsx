import styled from "styled-components";
import { Box } from "../../layout/Box";

export const TextWrapper = styled(Box)`
    margin-right: ${props => props.theme.spacing.md};
    flex-grow: 1;
    justify-content: center;
`;

export const ContextIconWrapper = styled(Box)`
    margin-right: ${props => props.theme.spacing.sm};
`;

export const CloseButtonIconWrapper = styled(Box)``;
