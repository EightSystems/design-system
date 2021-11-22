import * as React from "react";
import { View } from "react-native";
import { NativeBoxProps } from "./types";

export const Box: React.FC<NativeBoxProps> = ({ children, ...otherProps }: NativeBoxProps) => {
    return <View {...otherProps}>{children}</View>;
};

export default Box;
