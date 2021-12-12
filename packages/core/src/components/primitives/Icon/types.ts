import { ColorTypes, FontSizeTypes } from "../../../theme/types";

export type IconProps = {
    familyName: "AntDesign" | "FontAwesome" | "Feather" | "Ionic" | "Material";
    icon: string;
    className?: string;
    style?: any;
    size?: FontSizeTypes;
    color?: ColorTypes;

    onPress?: () => void;
    onClick?: () => void;
};
