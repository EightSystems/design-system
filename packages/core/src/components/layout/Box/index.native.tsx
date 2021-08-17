import * as React from "react";
import { View, ViewProps } from "react-native";

export type NativeBoxProps = ViewProps & {
    children: React.ReactNode;
};

const Box = ({ children }: NativeBoxProps) => {
    return <View>{children}</View>;
};

export default Box;
