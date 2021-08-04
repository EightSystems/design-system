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
    0: {
        shadowColor: colors.dark,
        shadowOffset: {
            widht: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 1,
    },
    1: {
        shadowColor: colors.dark,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    2: {
        shadowColor: colors.dark,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    3: {
        shadowColor: colors.dark,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    4: {
        shadowColor: colors.dark,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    5: {
        shadowColor: colors.dark,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    6: {
        shadowColor: colors.dark,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    7: {
        shadowColor: colors.dark,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    8: {
        shadowColor: colors.dark,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    9: {
        shadowColor: colors.dark,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
};
