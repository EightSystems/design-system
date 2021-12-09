import styled from "styled-components/native";
import { Box } from "../../layout/Box";

export const AccordionWrapper = styled(Box)`
    margin-top: ${props => props.theme.spacing.xs};
`;

/**
 * This is here because we need some custom events
 * that our button component wouldn't provide that easily
 */
export const AccordionTitleContainer = styled.Pressable`
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
    min-height: ${props => props.theme.spacing.lg};
`;
