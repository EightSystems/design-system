import React from "react";
import { ActivityIndicatorProps } from "react-native";

type CommonProps = {
    color: any;
    size: number;
};

type NativeProps = Omit<CommonProps, "size"> & {
    size: "large" | "small";
};

export type SpinnerWebProps = CommonProps & React.ComponentProps<"div">;
export type SpinnerNativeProps = NativeProps & ActivityIndicatorProps;
