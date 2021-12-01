import { ColorTypes, FontSizeTypes } from "../../../theme/types";

export type WebIconProps = {
    familyName: "AntDesign" | "FontAwesome" | "Feather" | "Ionic" | "Material";
    icon: string;
    className?: string;
    style?: any;
    size?: FontSizeTypes;
    color?: ColorTypes;
};

export type NativeIconProps = Omit<WebIconProps, "className">;
