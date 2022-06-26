import { ColorTypes, RadiusTypes } from "../../../theme/types";

export type ProgressBarProps = {
    progress: number;
    height?: number;
    color?: ColorTypes;
    backgroundColor?: ColorTypes;
    indeterminate?: boolean;
    visible?: boolean;
    backgroundStyle?: any;
    progressStyle?: any;

    borderRadius?: RadiusTypes;
};
