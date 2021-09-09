import styled from "styled-components/native";

export const DividerStyled = styled.View`
    width: 100%;
    height: ${({ height }) => (height ? `${height}px` : "1px")};
    background-color: ${({ theme }) => theme.colors.divider};
    border: 0px;
`;
