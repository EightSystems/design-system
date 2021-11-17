import colors from "./colors";

export const shadows = {
    xxs: "0px 1px 1.41px rgba(34, 36, 40, 0.2)",
    xs: "0px 2px 3.54px rgba(34, 36, 40, 0.25)",
    sm: "0px 3px 4.65px rgba(34, 36, 40, 0.29)",
    default: "0px 4px 5.46px rgba(34, 36, 40, 0.32)",
    md: "0px 6px 7.49px rgba(34, 36, 40, 0.37)",
    lg: "0px 7px 9.51px rgba(34, 36, 40, 0.43)",
};

export const nativeShadows = {
    xxs: {
        shadowColor: colors.dark,
        shadowOffset: {
            width: 0,
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
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 3,
        elevation: 4,
    },
    sm: {
        shadowColor: colors.dark,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 5,
        elevation: 6,
    },
    default: {
        shadowColor: colors.dark,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 7,
        elevation: 10,
    },
    md: {
        shadowColor: colors.dark,
        shadowOffset: {
            width: 0,
            height: 7,
        },
        opacity: 0.43,
        shadowRadius: 10,
        elevation: 15,
    },
    lg: {
        shadowColor: colors.dark,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        opacity: 0.51,
        shadowRadius: 13,
        elevation: 15,
    },
};
