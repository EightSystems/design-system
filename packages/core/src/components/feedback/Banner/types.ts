import React from "react";
import { ColorTypes } from "../../../theme/types";

export type BannerProps = {
    /** Close button callback */
    onClose?: () => void;

    title: string;

    description: string;

    status: "info" | "success" | "warning";

    /** Replaces the close icon with a custom element, when you set a rightElement it will disable the onClick props for the container button, so you are responsible for binding it into your element */
    rightElement?: React.ReactElement;

    /** Replaces the information icon with a custom element */
    leftElement?: React.ReactElement;

    /** Custom Background Color */
    backgroundColor?: ColorTypes;

    /** Custom Text Color */
    textColor?: ColorTypes;
};
