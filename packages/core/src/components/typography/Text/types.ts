import * as React from "react";
import { TextProps } from "react-native";
import {
    ColorTypes,
    FontFaceTypes,
    FontSizeTypes,
    FontWeightTypes,
    NativeFontFaceTypes,
    SpacingTypes,
    TextAlignTypes,
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

    padding?: SpacingTypes;
    margin?: SpacingTypes;

    textAlign?: TextAlignTypes;
};

type NativeProps = Omit<CommonProps, "fontFace"> & {
    fontFace?: NativeFontFaceTypes;
};

export type NativeTextProps = TextProps & NativeProps;
export type WebTextProps = React.ComponentPropsWithRef<"p"> & CommonProps;
