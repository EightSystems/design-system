import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import AntDesignGlyphMap from "react-native-vector-icons/glyphmaps/AntDesign.json";
import FeatherGlyphMap from "react-native-vector-icons/glyphmaps/Feather.json";
import FontAwesomeGlyphMap from "react-native-vector-icons/glyphmaps/FontAwesome5Free.json";
import IonicGlyphMap from "react-native-vector-icons/glyphmaps/Ionicons.json";
import MaterialGlyphMap from "react-native-vector-icons/glyphmaps/MaterialIcons.json";
import Ionic from "react-native-vector-icons/Ionicons";
import Material from "react-native-vector-icons/MaterialIcons";
import { IconProps } from "./types";

const FontIcon = ({ familyName, icon, ...otherProps }: IconProps) => {
    let glyphMap = null;
    let IconComponent = null;

    switch (familyName) {
        case "AntDesign":
            IconComponent = AntDesign;
            glyphMap = AntDesignGlyphMap;
            break;
        case "Feather":
            IconComponent = Feather;
            glyphMap = FeatherGlyphMap;
            break;
        case "FontAwesome":
            IconComponent = FontAwesome;
            glyphMap = FontAwesomeGlyphMap;
            break;
        case "Ionic":
            IconComponent = Ionic;
            glyphMap = IonicGlyphMap;
            break;
        case "Material":
            IconComponent = Material;
            glyphMap = MaterialGlyphMap;
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
            return <IconComponent name={finalIconName} {...otherProps} />;
        } else {
            console.log(`${icon} in ${familyName} is not supported (Tried these icon names: ${triedNames.join(", ")})`);
        }
    }

    return null;
};

export type { IconProps } from "./types";
export { FontIcon };
