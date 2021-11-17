import * as React from "react";
import { PressableProps } from "react-native";
import { ColorTypes, FontFaceTypes, NativeFontFaceTypes, FontWeightTypes, FontSizeTypes } from "../../../theme/types";

type CommonProps = {
    /** The color of the text inside the button. */
    textColor?: ColorTypes;

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
    spinnerColor?: any;

    /** Size of the spinner. */
    spinnerSize?: number;

    /** When `true` the button is shown as disabled. */
    disabled?: boolean;
};

type NativeProps = Omit<CommonProps, "fontWeight" | "fontFace"> & {
    fontFace?: NativeFontFaceTypes;
};

export type NativeButtonProps = PressableProps & NativeProps;
export type WebButtonProps = React.ComponentPropsWithRef<"button"> & CommonProps;
