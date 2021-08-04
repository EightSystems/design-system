import React from "react";
import Proptypes from "prop-types";

import * as S from "./styled.native";

/**
 * @type {React.FC<Props>}
 *
 * @typedef {Object} Props
 * @property {string} color - The color of the button.
 * @property {string} variant - The variant of the button style to use.
 * @property {boolean} isLoading - If true, the button will show a loading spinner.
 * @property {string} size - The size of the button.
 * @property {any} startIcon - If valid, uses the defined startIcon.
 * @property {any} endIcon - If valid, uses the defined endIcon.
 * @property {boolean} disabled - If true, the button shows a disabled style and doesn't respond to user action.
 */
const Button = props => {
    return (
        <S.ButtonPressable
            {...props}
            data-color={props.color}
            data-variant={props.variant}
            data-size={props.size}
            data-disabled={props.disabled}
        >
            {/* {startIcon && React.isValidElement(<S.IconWrapper>{startIcon}</S.IconWrapper>) ? startIcon : null} */}
            <S.StyledText data-size={props.size}>{props.children}</S.StyledText>
            {/* {endIcon && React.isValidElement(endIcon) ? <S.IconWrapper>{endIcon}</S.IconWrapper> : null} */}
        </S.ButtonPressable>
    );
};

Button.propTypes = {
    children: Proptypes.node.isRequired,

    color: Proptypes.string,

    variant: Proptypes.oneOf(["solid", "outline", "ghost", "link"]),

    isLoading: Proptypes.bool,

    disabled: Proptypes.bool,
};

export default Button;
