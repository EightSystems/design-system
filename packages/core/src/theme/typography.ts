import { css } from "styled-components";

export const typography = {
    lineHeights: {
        none: 1,
        shorter: 1.3,
        short: 1.5,
        base: 1.7,
        tall: 2,
        taller: 2.5,
    },
    letterSpacings: {
        none: 0,
        shorter: 1,
        short: 1.5,
        base: 1.7,
        tall: 2,
        taller: 2.5,
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
        xxxs: "12px",
        xxs: "14px",
        xs: "16px",
        sm: "18px",
        md: "20px",
        lg: "32px",
        xl: "40px",
        xxl: "48px",
        xxxl: "64px",
        display: "80px",
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
        primary: "Poppins-Regular",
        primaryHairline: "Poppins-Regular",
        primaryThin: "Poppins-Regular",
        primaryLight: "Poppins-Regular",
        primaryNormal: "Poppins-Regular",
        primaryMedium: "Poppins-Medium",
        primarySemiBold: "Poppins-SemiBold",
        primaryBold: "Poppins-Bold",
        primaryExtraBold: "Poppins-Bold",
        primaryBlack: "Poppins-Bold",

        secondary: "Inter-Regular",
        secondaryHairline: "Inter-Regular",
        secondaryThin: "Inter-Regular",
        secondaryLight: "Inter-Regular",
        secondaryNormal: "Inter-Regular",
        secondaryMedium: "Inter-Medium",
        secondarySemiBold: "Inter-SemiBold",
        secondaryBold: "Inter-Bold",
        secondaryExtraBold: "Inter-Bold",
        secondaryBlack: "Inter-Bold",

        primaryRegular: "Poppins-Regular", // For legacy support
        secondaryRegular: "Inter-Regular", // For legacy support
    },
};

//TEMPORARY

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
    font-family: ${({ theme }) => theme.typography.fontFaces.secondary};
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
    font-family: ${({ theme }) => theme.typography.fontFaces.secondary};
    color: ${({ theme }) => theme.colors.textBody};
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
`;

export const FormInput = css`
    font-family: ${({ theme }) => theme.typography.fontFaces.secondary};
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
`;
export const PlaceholderFormInput = css`
    font-family: ${({ theme }) => theme.typography.fontFaces.secondary};
    color: ${({ theme }) => theme.colors.textBody};
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
`;

export const FormValidationMessage = css`
    font-family: ${({ theme }) => theme.typography.fontFaces.primary};
    color: ${({ theme }) => theme.colors.danger};
    font-size: 13px;
`;
