import { css } from "styled-components";

export const Heading1 = css`
    font-family: ${({ theme }) => theme.fontFaces.primary};
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 48px;
    font-weight: 700;
    line-height: 64px;
    @media (max-width: 768px) {
        font-size: 36px;
        line-height: 48px;
    }
`;

export const Heading2 = css`
    font-family: ${({ theme }) => theme.fontFaces.primary};
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 36px;
    font-weight: 700;
    line-height: 48px;
    @media (max-width: 768px) {
        font-size: 24px;
        line-height: 32px;
    }
`;

export const Body = css`
    font-family: ${({ theme }) => theme.fontFaces.secondary};
    color: ${({ theme }) => theme.colors.textBody};
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    @media (max-width: 768px) {
        font-size: 16px;
        line-height: 20px;
    }
`;

export const FormLabel = css`
    font-family: ${({ theme }) => theme.fontFaces.secondary};
    color: ${({ theme }) => theme.colors.textBody};
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
`;

export const FormInput = css`
    font-family: ${({ theme }) => theme.fontFaces.secondary};
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
`;
export const PlaceholderFormInput = css`
    font-family: ${({ theme }) => theme.fontFaces.secondary};
    color: ${({ theme }) => theme.colors.textBody};
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
`;

export const FormValidationMessage = css`
    font-family: ${({ theme }) => theme.fontFaces.primary};
    color: ${({ theme }) => theme.colors.danger};
    font-size: 13px;
`;

export const CurrencyLabel = css`
    font-family: ${({ theme }) => theme.fontFaces.primary};
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 36px;
    font-weight: 700;

    .styled__comma {
        color: var(--secondary);
    }
`;
