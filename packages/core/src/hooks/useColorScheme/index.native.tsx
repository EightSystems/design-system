import { useColorScheme as rnUseColorScheme } from "react-native";
import { ColorSchemeName } from "./types";

export const useColorScheme = (): ColorSchemeName => {
    return rnUseColorScheme() as ColorSchemeName;
};
