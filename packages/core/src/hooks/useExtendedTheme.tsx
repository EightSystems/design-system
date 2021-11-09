import merge from "lodash/merge";
import { nativeTheme, theme } from "../theme";

export type environmentTypes = "web" | "native";

export const useExtendedTheme = (environment: environmentTypes, overrides: object) => {
    if (environment === "web") {
        return merge(theme, overrides || {});
    } else if (environment === "native") {
        return merge(nativeTheme, overrides || {});
    }

    if (typeof overrides !== "object") {
        return new Error(
            `Invalid "overrides" parameter used in "useExtendedTheme()", must be an valid theme object.` +
                "See: https://someplace.com"
        );
    }
};
