import * as React from "react";
import { ImageProps } from "react-native";

type CommonProps = {
    /** Used to render icons or text elements inside the component if `src` is not defined. Can be a valid React element, or just a string. */
    children: React.ReactNode | string;

    /** Used in combination with `src` to provide the attribute `alt` if `src` is specified. */
    alt: string;

    /** The `src` attribute of the `img` element. */
    src: string;

    /** Defines the component size. */
    size: "large" | "medium" | "small";
};

export type WebAvatarProps = React.ComponentPropsWithRef<"img"> & CommonProps;
export type NativeAvatarProps = ImageProps & CommonProps;
