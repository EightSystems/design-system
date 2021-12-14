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

        tertiary:
            "Inter, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif",

        custom1:
            "Poppins, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif",
        custom2:
            "Poppins, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif",
        custom3:
            "Poppins, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif",
        custom4:
            "Poppins, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif",
        custom5:
            "Poppins, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif",
    },
};

export const nativeTypography = {
    ...typography,
    fontFaces: {
        primary: "Poppins Regular",
        primaryHairline: "Poppins Regular",
        primaryThin: "Poppins Regular",
        primaryLight: "Poppins Regular",
        primaryNormal: "Poppins Regular",
        primaryMedium: "Poppins Medium",
        primarySemiBold: "Poppins SemiBold",
        primaryBold: "Poppins Bold",
        primaryExtraBold: "Poppins Bold",
        primaryBlack: "Poppins Bold",

        secondary: "Inter Regular",
        secondaryHairline: "Inter Regular",
        secondaryThin: "Inter Regular",
        secondaryLight: "Inter Regular",
        secondaryNormal: "Inter Regular",
        secondaryMedium: "Inter Medium",
        secondarySemiBold: "Inter SemiBold",
        secondaryBold: "Inter Bold",
        secondaryExtraBold: "Inter Bold",
        secondaryBlack: "Inter Bold",

        tertiary: "Inter Regular",
        tertiaryHairline: "Inter Regular",
        tertiaryThin: "Inter Regular",
        tertiaryLight: "Inter Regular",
        tertiaryNormal: "Inter Regular",
        tertiaryMedium: "Inter Medium",
        tertiarySemiBold: "Inter SemiBold",
        tertiaryBold: "Inter Bold",
        tertiaryExtraBold: "Inter Bold",
        tertiaryBlack: "Inter Bold",

        custom1: "Poppins Regular",
        custom1Hairline: "Poppins Regular",
        custom1Thin: "Poppins Regular",
        custom1Light: "Poppins Regular",
        custom1Normal: "Poppins Regular",
        custom1Medium: "Poppins Medium",
        custom1SemiBold: "Poppins SemiBold",
        custom1Bold: "Poppins Bold",
        custom1ExtraBold: "Poppins Bold",
        custom1Black: "Poppins Bold",

        custom2: "Poppins Regular",
        custom2Hairline: "Poppins Regular",
        custom2Thin: "Poppins Regular",
        custom2Light: "Poppins Regular",
        custom2Normal: "Poppins Regular",
        custom2Medium: "Poppins Medium",
        custom2SemiBold: "Poppins SemiBold",
        custom2Bold: "Poppins Bold",
        custom2ExtraBold: "Poppins Bold",
        custom2Black: "Poppins Bold",

        custom3: "Poppins Regular",
        custom3Hairline: "Poppins Regular",
        custom3Thin: "Poppins Regular",
        custom3Light: "Poppins Regular",
        custom3Normal: "Poppins Regular",
        custom3Medium: "Poppins Medium",
        custom3SemiBold: "Poppins SemiBold",
        custom3Bold: "Poppins Bold",
        custom3ExtraBold: "Poppins Bold",
        custom3Black: "Poppins Bold",

        custom4: "Poppins Regular",
        custom4Hairline: "Poppins Regular",
        custom4Thin: "Poppins Regular",
        custom4Light: "Poppins Regular",
        custom4Normal: "Poppins Regular",
        custom4Medium: "Poppins Medium",
        custom4SemiBold: "Poppins SemiBold",
        custom4Bold: "Poppins Bold",
        custom4ExtraBold: "Poppins Bold",
        custom4Black: "Poppins Bold",

        custom5: "Poppins Regular",
        custom5Hairline: "Poppins Regular",
        custom5Thin: "Poppins Regular",
        custom5Light: "Poppins Regular",
        custom5Normal: "Poppins Regular",
        custom5Medium: "Poppins Medium",
        custom5SemiBold: "Poppins SemiBold",
        custom5Bold: "Poppins Bold",
        custom5ExtraBold: "Poppins Bold",
        custom5Black: "Poppins Bold",
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
