import { BoxProps } from "../Box/types";

export type SpacerProps = Omit<BoxProps, "children"> & {
    size: number;
    axis?: "horizontal" | "vertical";
};
