import styled from "styled-components";

export const PaymentStatusWrapper = styled.div`
    font-family: ${({ theme }) => theme.typography.fontFaces.primary};
    box-shadow: ${({ theme }) => theme.shadows.lg};
    padding: ${({ theme }) => theme.spacing.default};
    text-align: center;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &[data-background="approved"] {
        background: ${({ theme }) => theme.colors.primary};
    }
    &[data-background="refused"] {
        background: ${({ theme }) => theme.colors.danger};
    }
    &[data-background="pending"] {
        background: ${({ theme }) => theme.colors.warning};
    }
`;
export const IconWrapper = styled.div`
    margin-top: ${({ theme }) => theme.spacing.xs};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    svg {
        width: ${({ theme }) => theme.spacing.xlg};
        height: ${({ theme }) => theme.spacing.xlg};
        color: ${({ theme }) => theme.colors.primaryContrast};
    }
`;
export const PaymentStatusTitle = styled.h1`
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.primaryContrast};
    font-size: ${({ theme }) => theme.typography.fontSizes.lg};
    font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
`;
export const PaymentStatusDescription = styled.p`
    margin: ${({ theme }) => `${theme.spacing.sm} 0`};
    color: ${({ theme }) => theme.colors.primaryContrast};
    font-size: ${({ theme }) => theme.typography.fontSizes.sm};
`;
