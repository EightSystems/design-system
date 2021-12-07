import { BoxProps } from "../Box/types";

export type FlexBoxProps = BoxProps & {
    flexDirection?: "row" | "column";
};
