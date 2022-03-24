import * as React from "react";
import {
    ColorTypes,
    FontFaceTypes,
    FontSizeTypes,
    FontWeightTypes,
    SpacingTypes,
    TextAlignTypes,
} from "../../../theme/types";

export type TextProps = {
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

    /** Allows the text to be user selectable */
    selectable?: boolean;

    numberOfLines?: Number;
};
