import React from "react";
import Proptypes from "prop-types";
import classnames from "classnames";
import * as S from "./styles";

const Button = React.forwardRef((props, componentRef) => {
    const buttonClasses = classnames({
        "button--primary": props.color === "primary",
        "button--danger": props.color === "danger",
        "button--primary__outline": props.color === "primary" && props.hasOutline === true,
        "button--danger__outline": props.color === "danger" && props.hasOutline === true,
    });
    return (
        <S.Wrapper>
            <button
                className={`${props.className ? props.className + " " : ""}button ${buttonClasses}`}
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
            </button>
        </S.Wrapper>
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
