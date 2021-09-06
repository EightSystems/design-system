export type IconProps = {
    familyName: "AntDesign" | "FontAwesome" | "Feather" | "Ionic" | "Material";
    icon: string;
    className?: string;
    style?: any;
};

export type NativeIconProps = Omit<IconProps, "className">;
