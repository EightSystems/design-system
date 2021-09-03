import React from "react";

import * as AntDesign from "react-icons/ai";
import * as Feather from "react-icons/fi";
import * as FontAwesome from "react-icons/fa";
import * as Ionic from "react-icons/io5";
import * as Material from "react-icons/md";
import { IconProps } from "./types";

const toCamelCase = phrase => {
    return phrase
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join("");
};

const Icon = ({ familyName, icon, ...otherProps }: IconProps) => {
    let libraryModule = null;
    const iconComponentName = toCamelCase(icon.replace(/-/g, " ").replace(/_/g, " "));
    let IconComponent = null;

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
            return <IconComponent {...otherProps} />;
        }
    }

    return null;
};

export type { IconProps } from "./types";

export { Icon };
