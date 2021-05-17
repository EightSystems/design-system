import React from "react";
import styled from "styled-components";
import Proptypes from "prop-types";
import * as V from "../../styles/variables";

const ButtonWrapper = styled.button`
    font-family: ${V.FontFaces.Poppins};
    font-size: 18px;
    appearance: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    padding: 18px 24px;
    text-decoration: none;
    text-align: center;
    transition: 150ms ease-in-out;
    user-select: none;

    &[data-color="primary"] {
        background: var(--primary);
        border: solid 2px var(--primary);
        color: var(--primaryContrast);

        &[data-outline="true"] {
            background: none;
            border: solid 2px var(--primary);
            color: var(--primary);
            svg {
                color: var(--primary)
            }
        }
        &:hover,
        :focus {
            background: var(--primaryTint);
            border: solid 2px var(--primaryTint);
            color: var(--primaryContrast);
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.35);
            outline: none;
            svg {
                color: var(--primaryContrast)
            }
        }
        
    }

    &[data-color="danger"] {
        background: var(--danger);
        border: solid 2px var(--danger);
        color: var(--primaryContrast);

        &[data-outline="true"] {
            background: none;
            border: solid 2px var(--danger);
            color: var(--danger);
        }
        &:hover,
        :focus {
            background: var(--dangerTint);
            border: solid 2px var(--dangerTint);
            color: var(--primaryContrast);
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.35);
            outline: none;
        }
    }

    &[data-color="secondary"] {
        background: var(--text-body);
        border: solid 2px var(--text-body);
        color: var(--primaryContrast);

        &[data-outline="true"] {
            background: none;
            border: solid 2px var(--text-body);
            color: var(--text-body);
        }
        &:hover,
        :focus {
            background: var(--grayShade);
            border: solid 2px var(--grayShade);
            color: var(--primaryContrast);
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.35);
            outline: none;
        }
    }
`;

const Button = React.forwardRef((props, componentRef) => {
    return (
        <ButtonWrapper
            {...props}
            className={props.className}
            data-color={props.color}
            data-outline={props.hasOutline}
            type={props.type}
            disabled={props.disabled}
            ref={componentRef}
        >
            {props.children}
        </ButtonWrapper>
    );
});

Button.propTypes = {
    /** O conteúdo do botão. */
    children: Proptypes.node.isRequired,

    /** Sobrepõe ou extende as classes de estilo existentes. */
    className: Proptypes.string,

    /** Define a cor contextual do botão. */
    color: Proptypes.oneOf(["primary", "secondary", "danger"]),

    /** Caso seja `true`, o botão terá um estilo com background vazado e bordas com a cor definida em `color`. */
    hasOutline: Proptypes.bool,

    /** O componente que é usado no nó raiz. Pode ser util quando é usado em conjunto com outros botões em formulários controlados e é necessário evitar o comportamento de submit em determinados botões. */
    type: Proptypes.string,
};

Button.defaultProps = {
    color: "primary",
    hasOutline: false,
};

export default Button;
