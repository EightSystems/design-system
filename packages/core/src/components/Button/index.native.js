import React from "react";
import Proptypes from "prop-types";

import * as S from "./styled.native";

/**
 * @type {React.FC<Props>}
 * @component The `Button` component is used to trigger an action or event.
 *
 * @param props
 * @param {string} props.color - The color of the button.
 * @param {string} props.variant - The variant of the button style to use.
 * @param {boolean} props.isLoading - If true, the button will show a loading spinner.
 * @param {string} props.size - The size of the button.
 * @param {any} props.startIcon - If valid, uses the defined startIcon.
 * @param {any} props.endIcon - If valid, uses the defined endIcon.
 * @param {boolean} props.disabled - If true, the button shows a disabled style and doesn't respond to user action.
 *
 */
const Button = ({ children, color, variant, isLoading, size, startIcon, endIcon, disabled, _text }) => {
    return (
        <S.ButtonPressable
            data-color={color}
            data-variant={variant}
            data-size={size}
            data-disabled={disabled}
            onPress={onClick}
        >
            {startIcon && React.isValidElement(<S.IconWrapper>{startIcon}</S.IconWrapper>) ? startIcon : null}
            <S.StyledText>{children}</S.StyledText>
            {endIcon && React.isValidElement(endIcon) ? <S.IconWrapper>{endIcon}</S.IconWrapper> : null}
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

export default React.memo(React.forwardRef(Button));
