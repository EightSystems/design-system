import styled, { css } from "styled-components";
import { Box } from "../../layout/Box";

export const PaymentStatusWrapper = styled(Box)`
    padding: ${({ theme }) => theme.spacing.default};
    text-align: center;
    border-radius: 5px;
    flex: 1;
    flex-direction: column;
    align-items: center;

    ${props =>
        props["data-background"] == "approved"
            ? css`
                  background: ${({ theme }) => theme.colors.primary};
              `
            : null}

    ${props =>
        props["data-background"] == "refused"
            ? css`
                  background: ${({ theme }) => theme.colors.danger};
              `
            : null}

    ${props =>
        props["data-background"] == "pending"
            ? css`
                  background: ${({ theme }) => theme.colors.warning};
              `
            : null}
`;

export const IconWrapper = styled(Box)`
    margin: ${({ theme }) => `${theme.spacing.xs} 0`};
`;
