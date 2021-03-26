import React from "react"
import "./Button.scss"
import Proptypes from "prop-types"
import classnames from "classnames"

const Button = ({
    children,
    color,
    outline,
    onClick,
    disabled,
    ref,
    className,
    "aria-label": ariaLabel,
}) => {
    const buttonClasses = classnames({
        "button--primary": color === "primary",
        "button--danger": color === "danger",
        "button--primary__outline": color === "primary" && outline === true,
        "button--danger__outline": color === "danger" && outline === true,
    })

    return (
        <button
            className={`${className ? className + " " : ""}button ${buttonClasses}`}
            onClick={onClick}
            disabled={disabled}
            ref={ref}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    children: Proptypes.node,
    color: Proptypes.oneOf(["primary", "danger"]),
    outline: Proptypes.bool,
    onClick: Proptypes.func,
    disabled: Proptypes.bool,
    ref: Proptypes.oneOf([Proptypes.object, Proptypes.func, Proptypes.string]),
    className: Proptypes.string,
    "aria-label": Proptypes.string,
}

Button.defaultProps = {
    color: "primary",
    outline: false,
}

export default Button
