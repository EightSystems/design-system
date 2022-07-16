import { BoxProps } from "../Box/types";

export type FlexBoxProps = BoxProps & {
    flexDirection?: "row" | "column";
    alignItems?: "center" | "stretch" | "start" | "end";
    justifyContent?: "start" | "center" | "space-between" | "space-around" | "space-evenly";
};
