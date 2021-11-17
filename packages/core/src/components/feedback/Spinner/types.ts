import React from "react";
import { ActivityIndicatorProps } from "react-native";

type CommonProps = {
    color: any;
    size: number;
};

export type WebSpinnerProps = CommonProps & React.ComponentProps<"div">;
export type NativeSpinnerProps = CommonProps & ActivityIndicatorProps;
