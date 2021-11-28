import * as React from "react";
import { ViewProps } from "react-native";
import { ColorTypes, FontFaceTypes, FontSizeTypes } from "../../../theme/types";

export type CommonProps = {
    children?: React.ReactNode | string;

    /** Defines the size of the ring's radius. */
    radius: number;

    /** Defines the width of the ring's stroke. */
    stroke: number;

    /** Defines the color of the ring's stroke. */
    strokeColor: ColorTypes;

    /** If specified, defines the string of text inside the ring. */
    text?: string;

    /** If specified, defines the color of the text inside the progress ring. */
    textColor?: ColorTypes;

    textFontSize?: FontSizeTypes;

    textFontFace?: FontFaceTypes;

    /** Define o número do progresso em uma escala de 0 a 100. */
    progress: number;
};

export type WebProgressRingProps = React.ComponentPropsWithRef<"div"> & CommonProps;
export type NativeProgressRingProps = ViewProps & CommonProps;
