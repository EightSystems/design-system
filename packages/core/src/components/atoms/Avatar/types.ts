import * as React from "react";

export type AvatarProps = {
    /** Used to render icons or text elements inside the component if `src` is not defined. Can be a valid React element, or just a string. */
    children?: React.ReactNode | string;

    /** Used in combination with `src` to provide the attribute `alt` if `src` is specified. */
    alt: string;

    /** The `src` attribute of the `img` element. */
    src?: any;

    /** Defines the component size. */
    size: "large" | "medium" | "small";
};
