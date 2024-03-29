import * as React from "react";
import {
    ColorTypes,
    FontFaceTypes,
    FontSizeTypes,
    FontWeightTypes,
    SpacingDirections,
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
    paddingDirection?: SpacingDirections | SpacingDirections[];

    margin?: SpacingTypes;
    marginDirection?: SpacingDirections | SpacingDirections[];

    textAlign?: TextAlignTypes;

    /** Allows the text to be user selectable */
    selectable?: boolean;

    numberOfLines?: Number;

    /**
     * This adds support to Styled-Component as prop, but keep in mind that this is platform specific.
     */
    as?: React.ElementType | keyof JSX.IntrinsicElements;
    [key: string]: any;
};
