import React from "react";
import {
    BorderPosition,
    BorderTypes,
    ColorTypes,
    RadiusTypes,
    ShadowTypes,
    SpacingDirections,
    SpacingTypes,
} from "../../../theme/types";

export type BoxProps = {
    children: React.ReactNode | React.ReactElement;
    style?: any;
    className?: string;
    /** Color of the button background. */
    backgroundColor?: ColorTypes;

    /** This is the same as `padding` = "default" */
    padded?: boolean;

    padding?: SpacingTypes;
    paddingDirection?: SpacingDirections;

    margin?: SpacingTypes;
    marginDirection?: SpacingDirections;

    /** Color of the button border. */
    borderColor?: ColorTypes;

    /** Type of the button border. */
    borderType?: BorderTypes;

    /** Radius of the button border. */
    borderRadius?: RadiusTypes;

    /** Position of the border, it can be a single string, or an array of strings */
    borderPosition?: BorderPosition | BorderPosition[];

    shadowSize?: ShadowTypes;

    /**
     * This adds support to Styled-Component as prop, but keep in mind that this is platform specific.
     */
    as?: React.ElementType | keyof JSX.IntrinsicElements;
    [key: string]: any;
};
