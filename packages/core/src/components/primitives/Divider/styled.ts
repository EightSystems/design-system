import styled from "styled-components";

export const DividerStyled = styled.hr`
    display: block;
    width: 100%;
    height: ${({ height }) => (height ? `${height}px` : "1px")};
    background-color: ${({ theme }) => theme.colors.divider};
    border: 0px;
`;
