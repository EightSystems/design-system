import { BoxProps } from "../Box/types";

export type SpacerProps = BoxProps & {
    size: number;
    axis?: "horizontal" | "vertical";
};
