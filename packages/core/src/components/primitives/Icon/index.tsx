import React from "react";
import * as AntDesign from "react-icons/ai";
import * as FontAwesome from "react-icons/fa";
import * as Feather from "react-icons/fi";
import * as Ionic from "react-icons/io5";
import { IconType } from "react-icons/lib";
import * as Material from "react-icons/md";
import { ThemeContext } from "styled-components";
import { theme } from "../../../theme";
import { IconProps } from "./types";

const toCamelCase = phrase => {
    return phrase
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join("");
};

const Icon = ({ familyName, icon, size = "sm", color = "black", ...otherProps }: IconProps) => {
    const themeContext = React.useContext<typeof theme>(ThemeContext);

    const fontRealSize =
        typeof themeContext.typography?.fontSizes[size] != "undefined"
            ? +themeContext.typography?.fontSizes[size].replace(/[^0-9]+/g, "")
            : 12;

    const fontRealColor =
        typeof themeContext.colors[color] != "undefined" ? (themeContext.colors[color] as string) : "white";

    let libraryModule = null;
    const iconComponentName = toCamelCase(icon.replace(/-/g, " ").replace(/_/g, " "));
    let IconComponent: IconType = null;

    switch (familyName) {
        case "AntDesign":
            libraryModule = AntDesign;
            break;
        case "Feather":
            libraryModule = Feather;
            break;
        case "FontAwesome":
            libraryModule = FontAwesome;
            break;
        case "Ionic":
            libraryModule = Ionic;
            break;
        case "Material":
            libraryModule = Material;
            break;
        default:
            console.log(`${familyName} is not supported`);
            break;
    }

    if (libraryModule) {
        if (typeof libraryModule[iconComponentName] != "undefined") {
            IconComponent = libraryModule[iconComponentName];
        } else {
            console.log(`${icon} in ${familyName} is not supported (Camel Case: ${iconComponentName})`);
        }

        if (IconComponent) {
            return <IconComponent size={fontRealSize} color={fontRealColor} {...otherProps} />;
        }
    }

    return null;
};

export type { IconProps } from "./types";
export { Icon };
