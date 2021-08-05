import React, { isValidElement } from "react";
import Proptypes from "prop-types";
import { ActivityIndicator } from "react-native";

import Spacer from "../Spacer/index.native";
import * as S from "./styled.native";

/**
 * @type {React.FC<Props>}
 * @typedef {Object} Props
 * @property {string} color
 * @property {string} variant
 * @property {boolean} loading
 * @property {string} size
 * @property {any} startIcon
 * @property {any} endIcon
 * @property {number} iconPadding
 * @property {boolean} disabled
 *
 * @property {boolean} android_disableSound
 * @property {object} android_ripple
 * @property {number} unstable_pressDelay
 * @property {number} delayLongPress
 * @property {any} onLongPress
 * @property {any} onPress
 * @property {any} onPressIn
 * @property {any} onPressOut
 * @property {any} style
 *
 * @todo Implement disabled button status.
 * @todo Implement support for `startIcon` and `endIcon` props.
 */
const Button = React.forwardRef((props, componentRef) => {
    return (
        <S.ButtonPressable
            {...props}
            disabled={props.disabled || props.loading}
            ref={componentRef}
            data-color={props.color}
            data-variant={props.variant}
            data-size={props.size}
            data-disabled={props.disabled}
            startIcon={props.startIcon}
            endIcon={props.endIcon}
        >
            {props.loading ? (
                <React.Fragment>
                    <ActivityIndicator color={props.spinnerColor} size="small" />
                    <Spacer size={12} />
                </React.Fragment>
            ) : null}

            {props.startIcon && isValidElement(props.startIcon)
                ? React.Children.map(props.startIcon, child => {
                      return React.cloneElement(child);
                  })
                : null}
            {props.startIcon && isValidElement(props.startIcon) ? (
                <Spacer size={props.iconPadding ? props.iconPadding : 0} />
            ) : null}

            <S.StyledText data-size={props.size} data-color={props.color}>
                {props.children}
            </S.StyledText>

            {props.endIcon && isValidElement(props.endIcon) ? (
                <Spacer size={props.iconPadding ? props.iconPadding : 0} />
            ) : null}
            {props.endIcon && isValidElement(props.endIcon)
                ? React.Children.map(props.endIcon, child => {
                      return React.cloneElement(child);
                  })
                : null}
        </S.ButtonPressable>
    );
});

Button.propTypes = {
    children: Proptypes.node.isRequired,

    color: Proptypes.string,

    variant: Proptypes.oneOf(["solid", "outline", "ghost", "link"]),

    isLoading: Proptypes.bool,

    disabled: Proptypes.bool,

    isLoading: Proptypes.bool,
};

export default Button;
