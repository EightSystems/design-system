import * as React from "react";
import {
    BorderTypes,
    ColorTypes,
    FontFaceTypes,
    FontSizeTypes,
    FontWeightTypes,
    RadiusTypes,
    TextAlignTypes,
} from "../../../theme/types";

export type WebButtonProps = {
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

    /** Replaces the `onClick` for HTML buttons */
    onPress?: null | ((event: any) => void) | undefined;

    onClick?: null | ((event: any) => void) | undefined;

    children: React.ReactNode;
};

export type NativeButtonProps = Omit<WebButtonProps, "onClick"> & {
    /** Replaces the `onPress` for Pressables */
    onClick?: null | ((event: any) => void) | undefined;
};
