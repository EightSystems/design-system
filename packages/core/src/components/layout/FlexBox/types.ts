import { BoxProps } from "../Box/types";

export type FlexBoxProps = BoxProps & {
    flexDirection?: "row" | "column";
    alignItems?: "center" | "stretch" | "flex-start" | "flex-end";
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
};
