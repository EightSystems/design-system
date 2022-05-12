import * as React from "react";
import {
    BorderPosition,
    BorderTypes,
    ColorTypes,
    FontFaceTypes,
    FontSizeTypes,
    FontWeightTypes,
    RadiusTypes,
    TextAlignTypes,
} from "../../../theme/types";

export type ButtonProps = {
    /** The color of the text inside the button. */
    textColor?: ColorTypes;

    textAlign?: TextAlignTypes;

    /** The font family for the text inside the button. */
    fontFace?: FontFaceTypes;

    /** The fontWeight for the text inside the button. */
    fontWeight?: FontWeightTypes;

    /** Defines the font size fot the text. */
    fontSize?: FontSizeTypes;

    /** Color of the button background. */
    backgroundColor?: ColorTypes;

    /** Color of the button border. */
    borderColor?: ColorTypes;

    /** Type of the button border. */
    borderType?: BorderTypes;

    /** Radius of the button border. */
    borderRadius?: RadiusTypes;

    /** Position of the border, it can be a single string, or an array of strings */
    borderPosition?: BorderPosition | BorderPosition[];

    /** Color when the button is focused. */
    focusColor?: ColorTypes;

    /** When `true`, the button will be shown as disabled and with a spinner. */
    loading?: boolean;

    /** The size of the button. */
    size?: "small" | "medium" | "large";

    /** The startIcon to use in the Button. */
    startIcon?: React.ReactNode;

    /** The end icon to use in the Button. */
    endIcon?: React.ReactNode;

    /** The padding between the icon and the text. */
    iconPadding?: number;

    /** The color of the spinner. */
    spinnerColor?: ColorTypes;

    /** Size of the spinner. */
    spinnerSize?: FontSizeTypes;

    /** When `true` the button is shown as disabled. */
    disabled?: boolean;

    onPress?: null | ((event: any) => void) | undefined;
    onLongPress?: null | ((event: any) => void) | undefined;
    onPressIn?: null | ((event: any) => void) | undefined;
    onPressOut?: null | ((event: any) => void) | undefined;

    /** This prop is used for backwards compatibility, you should use onPress and it's variants */
    onClick?: null | ((event: any) => void) | undefined;

    children: React.ReactNode;

    /**
     * This adds support to Styled-Component as prop, but keep in mind that this is platform specific.
     */
    as?: React.ElementType | keyof JSX.IntrinsicElements;
    [key: string]: any;
};
