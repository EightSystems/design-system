import styled from "styled-components";

export const SpinnerContainer = styled.div`
    width: ${props => `${props.size}px`};
    height: ${props => `${props.size}px`};
`;

export const SpinnerBody = styled.span`
    @keyframes spinner {
        to {
            transform: rotate(360deg);
        }
    }

    :before {
        width: ${props => `${props.size}px`};
        height: ${props => `${props.size}px`};
        content: "";
        position: absolute;
        border-radius: 50%;
        border: 2px solid #ccc;
        border-top-color: ${props => props.color};
        animation: spinner 0.6s linear infinite;
    }
`;
