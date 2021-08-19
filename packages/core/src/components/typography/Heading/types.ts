import * as React from "react";
import { TextProps } from "react-native";
import {
    FontSizeTypes,
    LetterSpacingTypes,
    LineHeightsTypes,
    FontFaceTypes,
    FontWeightTypes,
    ColorTypes,
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

    /** Defines the letter spacing for the text. */
    letterSpacing?: LetterSpacingTypes;

    /** Defines the line height for the text. */
    lineHeight?: LineHeightsTypes;

    /** Make the text italic. */
    italic?: boolean;

    /** Underline the text. */
    underline?: boolean;

    /** On web platforms, defines the element that should be used to render the text string. Ignored on native platforms */
    htmlElement?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export type NativeHeadingProps = TextProps & CommonProps;
export type WebHeadingProps = React.ComponentProps<"h1"> & CommonProps;
