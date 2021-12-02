import React from "react";
import { ColorTypes, SpacingTypes } from "../../../theme/types";

export type BoxProps = {
    children: React.ReactNode | React.ReactElement;
    style?: any;
    className?: string;
    /** Color of the button background. */
    backgroundColor?: ColorTypes;

    padding?: SpacingTypes;
    margin?: SpacingTypes;
};
