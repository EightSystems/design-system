import React from "react";
import styled from "styled-components";
import Proptypes from "prop-types";
import { GlobalStyles } from "../../styles/theme";
import * as V from "../../styles/variables";

const ButtonWrapper = styled.button`
    ${GlobalStyles};
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

    &[data-color="primary"] {
        background: var(--primary);
        border: solid 2px var(--primary);
        color: var(--primaryContrast);

        &[data-hasOutline="true"] {
            background: none;
            border: solid 2px var(--primary);
            color: var(--primary);
        }
        &:hover {
            background: var(--primaryTint);
            border: solid 2px var(--primaryTint);
            color: var(--primaryContrast);
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.35);
        }
    }

    &[data-color="danger"] {
        background: var(--danger);
        border: solid 2px var(--danger);
        color: var(--primaryContrast);

        &[data-hasOutline="true"] {
            background: none;
            border: solid 2px var(--danger);
            color: var(--danger);
        }
        &:hover {
            background: var(--dangerTint);
            border: solid 2px var(--dangerTint);
            color: var(--primaryContrast);
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.35);
        }
    }
`;

const Button = React.forwardRef((props, componentRef) => {
    console.log(props);
    return (
        <ButtonWrapper
            className={props.className}
            data-color={props.color}
            data-hasOutline={props.hasOutline}
            type={props.type}
            onClick={props.onClick}
            disabled={props.disabled}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
            aria-label={props.ariaLabel}
            ref={componentRef}
        >
            {props.children}
        </ButtonWrapper>
    );
});

Button.propTypes = {
    children: Proptypes.node.isRequired,
    className: Proptypes.string,
    color: Proptypes.oneOf(["primary", "danger"]),
    hasOutline: Proptypes.bool,
    type: Proptypes.string,
    onClick: Proptypes.func,
    disabled: Proptypes.bool,
    onMouseEnter: Proptypes.func,
    onMouseLeave: Proptypes.func,
    onFocus: Proptypes.func,
    onBlur: Proptypes.func,
    ariaLabel: Proptypes.string,
};

Button.defaultProps = {
    color: "primary",
    hasOutline: false,
};

export default Button;
