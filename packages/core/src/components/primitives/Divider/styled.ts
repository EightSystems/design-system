import styled from "styled-components";
import { Box } from "../../layout/Box";

export const DividerStyled = styled(Box)`
    height: ${({ height, theme }) => {
        if (theme.nativeTypography?.lineHeights[height]) {
            return `${theme.nativeTypography?.lineHeights[height]}px`;
        } else if (theme.typography?.lineHeights[height]) {
            return `${theme.typography?.lineHeights[height]}px`;
        } else {
            return `${height}px`;
        }
    }};
    margin-top: ${({ theme }) => theme.spacing.xs};
`;
