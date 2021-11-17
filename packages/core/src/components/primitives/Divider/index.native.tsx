import React from "react";
import { NativeDividerProps } from "./types";
import * as S from "./styled.native";

const Divider = ({ height = 2, ...otherProps }: NativeDividerProps) => {
    return <S.DividerStyled height={height} {...otherProps} />;
};

export type { NativeDividerProps } from "./types";

export { Divider };
