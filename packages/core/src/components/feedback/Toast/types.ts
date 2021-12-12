import React from "react";
import { ColorTypes } from "../../../theme/types";

export type ToastProps = {
    /** Show or hide toast */
    show: boolean;

    /** The number of milliseconds before the toast disappears, or 0 to be handled via `showToast` prop */
    duration?: number;

    /** Close button callback */
    onClose?: () => void;

    title: string;

    description: string;

    status: "info" | "success" | "warning";

    /** On native the props are transformed into `top` or `bottom`, so it will ignore the extra `left`, `center`, or `right` */
    position: "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";

    /** Replaces the close icon with a custom element, when you set a rightElement it will disable the onClick props for the container button, so you are responsible for binding it into your element */
    rightElement?: React.ReactElement;

    /** Replaces the information icon with a custom element */
    leftElement?: React.ReactElement;

    /** Custom Background Color */
    backgroundColor?: ColorTypes;

    /** Custom Text Color */
    textColor?: ColorTypes;
};

export type ToastProviderProps = {
    children: React.ReactNode;
};

export type ToastBodyProps = Omit<ToastProps, "show" | "position">;
