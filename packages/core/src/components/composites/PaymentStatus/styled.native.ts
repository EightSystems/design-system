import styled, { css } from "styled-components/native";

export const PaymentStatusWrapper = styled.View`
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

export const IconWrapper = styled.View`
    margin: ${({ theme }) => `${theme.spacing.xs} 0`};
`;
export const PaymentStatusTitle = styled.Text`
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.primaryContrast};
    font-size: ${({ theme }) => theme.nativeTypography.fontSizes.lg};
`;
export const PaymentStatusDescription = styled.Text`
    margin: ${({ theme }) => `${theme.spacing.sm} 0`};
    color: ${({ theme }) => theme.colors.primaryContrast};
    font-size: ${({ theme }) => theme.nativeTypography.fontSizes.sm};
`;
