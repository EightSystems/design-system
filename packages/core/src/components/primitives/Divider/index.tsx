import React from "react";
import { WebDividerProps } from "./types";
import * as S from "./styled";

const Divider = ({ height = 2, ...otherProps }: WebDividerProps) => {
    return <S.DividerStyled height={height} {...otherProps} />;
};

export type { WebDividerProps } from "./types";

export { Divider };
