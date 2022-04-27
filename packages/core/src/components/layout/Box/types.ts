import React from "react";
import { ColorTypes, SpacingDirections, SpacingTypes } from "../../../theme/types";

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

    /**
     * This adds support to Styled-Component as prop, but keep in mind that this is platform specific.
     */
    as?: React.ElementType | keyof JSX.IntrinsicElements;
};
