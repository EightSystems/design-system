import styled, { css } from "styled-components";

export const Container = styled.label`
    position: relative;
    display: inline-block;
    width: 51px;
    height: 31px;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;

    ${props =>
        props.disabled
            ? css`
                  cursor: not-allowed;
                  opacity: 0.7;
              `
            : null}
`;

export const Track = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 1000px;
    background-color: ${props => props.color};
`;

export const Button = styled.span`
    position: absolute;
    top: 10%;
    left: 8%;
    right: 45%;
    bottom: 10%;
    border-radius: 50%;
    background-color: ${props => props.color};
    transition: all 100ms ease;

    ${props =>
        props.checked
            ? css`
                  right: 8%;
                  left: 45%;
              `
            : null}
`;
