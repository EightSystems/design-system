import React from "react";
import { TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionic from "react-native-vector-icons/Ionicons";
import Material from "react-native-vector-icons/MaterialIcons";
import { ThemeContext } from "styled-components/native";
import { nativeTheme } from "../../../theme";
import { IconProps } from "./types";

const Icon = ({ familyName, icon, size = "sm", color = "black", onPress, onClick, ...otherProps }: IconProps) => {
    const onClickListener = onPress || onClick;

    const themeContext = React.useContext<typeof nativeTheme>(ThemeContext);

    const fontRealSize =
        typeof themeContext.nativeTypography?.fontSizes[size] != "undefined"
            ? +themeContext.nativeTypography?.fontSizes[size].replace(/[^0-9]+/g, "")
            : 12;

    const fontRealColor =
        typeof themeContext.colors[color] != "undefined" ? (themeContext.colors[color] as string) : "white";

    let glyphMap = null;
    let IconComponent = null;

    switch (familyName) {
        case "AntDesign":
            IconComponent = AntDesign;
            glyphMap = AntDesign.getRawGlyphMap();
            break;
        case "Feather":
            IconComponent = Feather;
            glyphMap = Feather.getRawGlyphMap();
            break;
        case "FontAwesome":
            IconComponent = FontAwesome;
            glyphMap = FontAwesome.getRawGlyphMap();
            break;
        case "Ionic":
            IconComponent = Ionic;
            glyphMap = Ionic.getRawGlyphMap();
            break;
        case "Material":
            IconComponent = Material;
            glyphMap = Material.getRawGlyphMap();
            break;
        default:
            console.log(`${familyName} is not supported`);
            break;
    }

    if (IconComponent) {
        let iconName = icon.split("-");
        let triedNames = [];
        let finalIconName = null;

        while (iconName.length > 0) {
            triedNames.push(iconName.join("-"));
            if (typeof glyphMap[iconName.join("-")] != "undefined") {
                finalIconName = iconName.join("-");
                break;
            } else {
                iconName.shift();
            }
        }

        if (finalIconName) {
            return onClickListener ? (
                <TouchableOpacity onPress={onClickListener}>
                    <IconComponent name={finalIconName} color={fontRealColor} size={fontRealSize} {...otherProps} />
                </TouchableOpacity>
            ) : (
                <IconComponent name={finalIconName} color={fontRealColor} size={fontRealSize} {...otherProps} />
            );
        } else {
            console.log(`${icon} in ${familyName} is not supported (Tried these icon names: ${triedNames.join(", ")})`);
        }
    }

    return null;
};

export type { IconProps } from "./types";
export { Icon };
