import * as React from "react";
import { IPopoverProps } from "react-native-popper/src/types";
import { ColorTypes, FontFaceTypes, NativeFontFaceTypes, FontWeightTypes, FontSizeTypes } from "../../../theme/types";

type CommonProps = {
    children: React.ReactNode;

    /** Determinates the tooltip positioning in relation to the component it's attached to. */
    placement?:
        | "auto"
        | "auto-start"
        | "auto-end"
        | "top"
        | "top-start"
        | "top-end"
        | "bottom"
        | "bottom-start"
        | "bottom-end"
        | "right"
        | "right-start"
        | "right-end"
        | "left"
        | "left-start"
        | "left-end";

    /** The content of the tooltip. */
    tooltipContent?: React.ReactNode | string;

    /** Defines the distance between the tooltip and the component it's attached to. */
    offset?: number;

    /** Distance between popover and trigger's cross axis. */
    crossOffset?: number;

    /** The size of the Tooltip. */
    size?: "small" | "medium" | "large";

    /** The color of the text inside the tooltip. */
    textColor?: ColorTypes;

    /** The font family for the text inside the tooltip. */
    fontFace?: FontFaceTypes;

    /** The fontWeight for the text inside the tooltip. */
    fontWeight?: FontWeightTypes;

    /** The fontSize for the text inside the tooltip. */
    fontSize?: FontSizeTypes;
};

type NativeProps = Omit<CommonProps, "fontFace" | "placement"> & {
    children: React.ReactElement | React.RefObject<any>;

    /** Determinates the tooltip positioning in relation to the component it's attached to. */
    placement:
        | "top"
        | "top-start"
        | "top-end"
        | "bottom"
        | "bottom-start"
        | "bottom-end"
        | "right"
        | "right-start"
        | "right-end"
        | "left"
        | "left-start"
        | "left-end";

    fontFace?: NativeFontFaceTypes;
};

export type WebTooltipProps = React.ComponentPropsWithRef<"div"> & CommonProps;
export type NativeTooltipProps = IPopoverProps & NativeProps;
