import styled, { css } from "styled-components";
import Box from "../../layout/Box";
import { CheckBoxProps } from "./types";

export const CheckBoxStyled = styled(Box)`
    ${(props: CheckBoxProps) => css`
        ${props.indeterminate ? css`` : null}
    `}
`;
