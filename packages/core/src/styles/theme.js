const Theme = {
    space: {
        xxs: `.4rem`,
        xs: `.8rem`,
        sm: `1.6rem`,
        default: `2.4rem`,
        md: `3.2rem`,
        lg: `4.8rem`,
        xlg: `6.4rem`,
        xxlg: `9.6rem`,
    },

    colors: {
        background: `#F7F9FC`,
        textPrimary: `#090909`,
        textBody: `#68717A`,

        primary: `#00072e`,
        primaryShade: `#000628`,
        primaryTint: `#1a2043`,
        primaryContrast: `#f6f6f6`,

        secondary: `#005694`,
        secondaryShade: `#36abe0`,
        secondaryTint: `#50c8ff`,
        secondaryContrast: `#f6f6f6`,

        tertiary: `#b4e0ff`,
        tertiaryShade: `#9ec5e0`,
        tertiaryTint: `#bce3ff`,
        tertiaryContrast: `#090909`,

        danger: `#cf2525`,
        dangerTint: `#db2626`,
        success: `#20c997`,
        successShade: `#148060`,
        pending: `#db7804`,

        gray: `#b4b6c0`,
        grayShade: `#808289`,
        grayTint: `#9d9fa6`,
        lightGray: `#E7E9F2`,

        white: `#FFFFFF`,
    },

    boxShadow: {
        default: `0px 0px 10px rgba(0, 7, 46, 0.2)`,
    },

    border: {
        default: `solid 1px #9d9fa6`,
        hover: `solid 1px #36abe0`,
        danger: `solid 1px #cf2525`,
        success: `solid 1px #20c997`,
        light: `solid 1px #E7E9F2`,
    },

    fontFaces: {
        primary:
            "Poppins, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif",

        secondary:
            "Inter, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif",
    },
};

export default Theme;
