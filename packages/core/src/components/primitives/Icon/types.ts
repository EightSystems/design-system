export type WebIconProps = {
    familyName: "AntDesign" | "FontAwesome" | "Feather" | "Ionic" | "Material";
    icon: string;
    className?: string;
    style?: any;
};

export type NativeIconProps = Omit<WebIconProps, "className">;
