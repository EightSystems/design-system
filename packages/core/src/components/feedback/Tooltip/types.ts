import * as React from "react";
import { IPopoverProps } from "react-native-popper/src/types";

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
    offset?: [number, number];
};

type NativeProps = CommonProps & {
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
};

export type WebTooltipProps = React.ComponentPropsWithRef<"div"> & CommonProps;
export type NativeTooltipProps = IPopoverProps & NativeProps;
