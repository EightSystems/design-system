import React from "react";
import { DividerProps } from "./types";
import * as S from "./styled";

const Divider = ({ height = 2, ...otherProps }: DividerProps) => {
    return <S.DividerStyled height={height} {...otherProps} />;
};

export type { DividerProps } from "./types";

export { Divider };
