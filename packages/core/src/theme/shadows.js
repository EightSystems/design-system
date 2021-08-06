import colors from "./colors";

export const shadows = {
    xxs: "0px 1px 1.41px rgba(34, 36, 40, 0.2)",
    xs: "0px 2px 3.54px rgba(34, 36, 40, 0.25)",
    sm: "0px 3px 4.65px rgba(34, 36, 40, 0.29)",
    default: "0px 4px 5.46px rgba(34, 36, 40, 0.32)",
    md: "0px 6px 7.49px rgba(34, 36, 40, 0.37)",
    lg: "0px 7px 9.51px rgba(34, 36, 40, 0.43)",
    xlg: "0px 6px 7.49px rgba(34, 36, 40, 0.37)",
    xxlg: "0px 11px 14.78px rgba(34, 36, 40, 0.45)",
};

export const nativeShadows = {
    xxs: {
        shadowColor: colors.dark,
        shadowOffset: {
            widht: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 1,
    },
    xs: {
        shadowColor: colors.dark,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    sm: {
        shadowColor: colors.dark,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    default: {
        shadowColor: colors.dark,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    md: {
        shadowColor: colors.dark,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    lg: {
        shadowColor: colors.dark,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    xlg: {
        shadowColor: colors.dark,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    xxlg: {
        shadowColor: colors.dark,
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.45,
        shadowRadius: 14.78,
        elevation: 22,
    },
};
