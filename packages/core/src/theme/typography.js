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
`;

export const typography = {
    letterSpacings: {
        xxs: -1.5,
        xs: -0.5,
        sm: 0,
        md: 0.1,
        lg: 0.15,
        xl: 0.25,
        "2xl": 0.4,
        "3xl": 0.5,
        "4xl": 1.25,
        "5xl": 1.5,
    },
    lineHeights: {
        none: 1,
        shorter: 1.25,
        short: 1.375,
        base: 1.5,
        tall: 1.625,
        taller: "2",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        7: "28px",
        8: "32px",
        9: "36px",
        10: "40px",
    },
    fontWeights: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
    },
    fontSizes: {
        xxs: "10px",
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "30px",
        "4xl": "36px",
        "5xl": "48px",
        "6xl": "60px",
        "7xl": "72px",
        "8xl": "96px",
        "9xl": "128px",
    },
    fontFaces: {
        primary:
            "Poppins, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif",

        secondary:
            "Inter, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif",
    },
};

export const nativeTypography = {
    ...typography,
    fontFaces: {
        primaryRegular: "Poppins-Regular",
        primaryMedium: "Poppins-Medium",
        primarySemibold: "Poppins-Semibold",
        primaryBold: "Poppins-Bold",

        secondaryRegular: "Inter-Regular",
        secondaryMedium: "Inter-Medium",
        secondarySemibold: "Inter-Semibold",
        secondaryBold: "Inter-Bold",
    },
};
