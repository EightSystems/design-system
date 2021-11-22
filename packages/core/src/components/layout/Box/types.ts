import React from "react";
import { ViewProps } from "react-native";

export type NativeBoxProps = React.Component<ViewProps> & {
    children: React.ReactNode;
    style?: any;
};

export type WebBoxProps = {
    children: React.ReactNode;
    style?: any;
    className?: string;
};
