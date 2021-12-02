import React from "react";
import { ViewProps } from "react-native";

type CommonProps = {
    /** Defines the size of the border-radius. */
    borderRadius?: number;

    /** If true, renders the Skeleton as a circle. */
    isCircular?: boolean;

    /** Defines the Skeleton size in `px`. */
    size: number;

    /** Speed in which the pulsating animation loop should be executed. */
    animationSpeed: number;
};

export type WebSkeletonProps = CommonProps & React.ComponentProps<"div">;
export type NativeSkeletonProps = CommonProps & ViewProps;
