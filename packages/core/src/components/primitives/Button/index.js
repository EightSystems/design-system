import React from "react";
import Proptypes from "prop-types";

import * as S from "./styled";

/**
 * @type {React.FC<Props>}
 * @typedef {Object} Props
 * @property {string} className
 * @property {string} color
 * @property {boolean} hasOutline
 * @property {function} onClick
 *
 * @todo Add support for `startIcon` and `endIcon` props to defer the icon responsability to the component.
 * @todo Add support for `href` prop to use an `<a>` element as the root node if defined.
 */
const Button = React.forwardRef((props, componentRef) => {
    return (
        <S.ButtonWrapper
            {...props}
            className={props.className}
            data-color={props.color}
            data-outline={props.hasOutline}
            type={props.type}
            disabled={props.disabled}
            onClick={props.onClick}
            ref={componentRef}
        >
            {props.children}
        </S.ButtonWrapper>
    );
});

Button.propTypes = {
    /** The content of the button. */
    children: Proptypes.node.isRequired,

    /** Overrides or extends the existing style definitions with a custom class. */
    className: Proptypes.string,

    /** Defines the contextual color for the `<button>`. */
    color: Proptypes.oneOf(["primary", "secondary", "danger"]),

    /** If `true`, the `button` will have a empty background and borders with the color defined in `color`. */
    hasOutline: Proptypes.bool,
};

Button.defaultProps = {
    color: "primary",
    hasOutline: false,
};

export default Button;
