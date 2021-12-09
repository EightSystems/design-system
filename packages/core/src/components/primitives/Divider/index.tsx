import React from "react";
import * as S from "./styled";
import { DividerProps } from "./types";

export const Divider = ({ height = "tall", backgroundColor = "divider" }: DividerProps) => {
    return <S.DividerStyled height={height} backgroundColor={backgroundColor} />;
};

export type { DividerProps } from "./types";
