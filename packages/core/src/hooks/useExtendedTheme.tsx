import { theme, nativeTheme } from "../theme";
import { merge } from "lodash";

export const useExtendedTheme = (environment: string, overrides: object) => {
    const defaultTheme = environment === "web" || undefined ? theme : nativeTheme;
    const themeMerge = merge(defaultTheme, overrides || {});

    if (typeof overrides !== "object") {
        return new Error(
            `Invalid "overrides" parameter used in "useExtendedTheme()", must be an valid theme object.` +
                "See: https://someplace.com"
        );
    }
    return themeMerge;
};
