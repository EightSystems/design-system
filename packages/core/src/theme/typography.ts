export const typography = {
    lineHeights: {
        none: 1,
        shorter: 1.3,
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
        primaryRegular: "Poppins-Regular",
        primaryMedium: "Poppins-Medium",
        primarySemiBold: "Poppins-SemiBold",
        primaryBold: "Poppins-Bold",

        secondary: "Inter-Regular",
        secondaryRegular: "Inter-Regular",
        secondaryMedium: "Inter-Medium",
        secondarySemiBold: "Inter-SemiBold",
        secondaryBold: "Inter-Bold",
    },
};
