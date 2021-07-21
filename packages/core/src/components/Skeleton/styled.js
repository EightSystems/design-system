import styled from "styled-components";

export const SkeletonWrapper = styled.div`
    border-radius: ${props => (props.isCircular ? "50%" : `${props.borderRadius}px`)};
    background: ${props => props.theme.colors.grayShade};
    animation: ${props => `pulse ${props.animationSpeed}s linear infinite alternate`};
    cursor: default;
    pointer-events: none;
    user-select: none;
    width: ${props => (props.isCircular ? `${props.size}px` : "100%")};
    height: ${props => `${props.size}px`};

    @keyframes pulse {
        from {
            opacity: 0.3;
        }
        to {
            opacity: 0.1;
        }
    }
`;
