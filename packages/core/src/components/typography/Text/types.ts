import * as React from "react";
import { TextProps } from "react-native";
import {
    FontFaceTypes,
    NativeFontFaceTypes,
    FontSizeTypes,
    FontWeightTypes,
    ColorTypes,
    NativeTextAlignTypes,
} from "../../../theme/types";

type CommonProps = {
    /** Renders components as text childrens. */
    children: React.ReactNode;

    /** Defines the color for the text */
    textColor?: ColorTypes;

    /** Defines the font family for the text. */
    fontFace?: FontFaceTypes;

    /** Defines the font size fot the text. */
    fontSize?: FontSizeTypes;

    /** Defines the font weight for the text. */
    fontWeight?: FontWeightTypes;

    /** Make the text italic. */
    italic?: boolean;

    /** Underline the text. */
    underline?: boolean;
};

type NativeProps = Omit<CommonProps, "fontFace"> & {
    fontFace?: NativeFontFaceTypes;
    textAlign?: NativeTextAlignTypes;
};

export type NativeTextProps = TextProps & NativeProps;
export type WebTextProps = React.ComponentPropsWithRef<"p"> & CommonProps;
