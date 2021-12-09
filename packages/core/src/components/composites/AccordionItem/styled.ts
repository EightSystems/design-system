import styled from "styled-components";
import { Box } from "../../layout/Box";

export const AccordionWrapper = styled(Box)`
    margin-top: ${props => props.theme.spacing.xs};
    .ReactCollapse--collapse {
        transition: height 300ms ease-in-out;
    }
`;

/**
 * This is here because we need some custom events
 * that our button component wouldn't provide that easily
 */
export const AccordionTitleContainer = styled.button`
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 100%;
    :focus {
        outline: none;
    }
`;
