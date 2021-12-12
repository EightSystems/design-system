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
};
