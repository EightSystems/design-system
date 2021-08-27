import React from "react";
import { ActivityIndicatorProps } from "react-native";

type CommonProps = {
    color: any;
    size: number;
};

export type SpinnerWebProps = CommonProps & React.ComponentProps<"div">;
export type SpinnerNativeProps = CommonProps & ActivityIndicatorProps;
