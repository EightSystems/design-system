import { theme, nativeTheme } from "../theme";
import { merge } from "lodash";

/**
 * Merges the default theme with a custom set of objects to compose a different
 * @param {string} environment Determinates if the default theme should be the web or nativeTheme. Defaults to "web"
 * @param {object} overrides Objects to be overriden/extended
 * @returns {object} Returns the result of the merge between the default theme and the override object
 */
export const useExtendedTheme = (environment, overrides) => {
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
