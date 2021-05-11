import React from "react";
import styled from "styled-components";
import Proptypes from "prop-types";

const SkeletonWrapper = styled.div`
    border-radius: ${props => (props.isCircular ? "50%" : `${props.borderRadius}px`)};
    background: var(--grayShade);
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

const Skeleton = props => {
    return (
        <SkeletonWrapper
            {...props}
            borderRadius={props.borderRadius}
            isCircular={props.isCircular}
            size={props.size}
            animationSpeed={props.animationSpeed}
            className={props.className}
        />
    );
};

Skeleton.propTypes = {
    /** Define o tamanho da propriedade border-radius do component Skeleton, em `px`. */
    borderRadius: Proptypes.number,

    /** Caso seja true, o Skeleton assume um formato circular. */
    isCircular: Proptypes.bool,

    /** Define o tamanho do Skeleton em `px`. Quando `isCircular=true` também define a largura e altura do Skeleton igualmente. */
    size: Proptypes.number.isRequired,

    /** Velocidade com que a animação de pulso deve ser executada, em segundos. */
    animationSpeed: Proptypes.number,

    className: Proptypes.string,
};

Skeleton.defaultProps = {
    borderRadius: 4,
    isCircular: false,
    size: 20,
    animationSpeed: 0.8,
};

export default Skeleton;
