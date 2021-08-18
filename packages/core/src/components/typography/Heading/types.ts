import * as React from "react";
import { TextProps } from "react-native";
import { FontSizeTypes, LetterSpacingTypes, LineHeightsTypes, FontFaceTypes } from "../../../theme/types";

type CommonProps = {
    /** Renders components as text childrens. */
    children: React.ReactNode;

    fontFace?: FontFaceTypes;

    /** The size of the text. */
    fontSize?: FontSizeTypes;

    /** Defines the letter spacing for the text. */
    letterSpacing?: LetterSpacingTypes;

    /** Defines the line height for the text. */
    lineHeight?: LineHeightsTypes;

    /** Make the text bold. */
    bold?: boolean;

    /** Make the text italic. */
    italic?: boolean;

    /** Underline the text. */
    underline?: boolean;

    /** On web platforms, defines the element that should be used to render the text string. */
    htmlElement?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export type NativeHeadingProps = TextProps & CommonProps;
export type WebHeadingProps = React.ComponentProps<"h1"> & CommonProps;
