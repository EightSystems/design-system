import { ColorTypes, FontSizeTypes, SpacingTypes } from "../../../theme/types";
import { BoxProps } from "../../layout/Box/types";

export type BadgeProps = BoxProps & {
    size?: SpacingTypes;
    textColor?: ColorTypes;
    textSize?: FontSizeTypes;
};
