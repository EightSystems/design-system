import React, { isValidElement, forwardRef } from "react";
import { ActivityIndicator } from "react-native";

import { ButtonProps } from "./types";
import Spacer from "../Spacer/index.native";
import * as S from "./styled.native";

const Button = (
    {
        disabled = false,
        color = "primary",
        loading = false,
        variant = "solid",
        size = "medium",
        startIcon,
        endIcon,
        iconPadding,
        spinnerColor,
        children,
        ...props
    }: ButtonProps,
    ref: any
) => {
    return (
        <S.ButtonPressable
            {...props}
            disabled={disabled || loading}
            data-color={color}
            data-variant={variant}
            data-size={size}
            data-disabled={disabled}
            ref={ref}
        >
            {loading ? (
                <React.Fragment>
                    <ActivityIndicator color={spinnerColor} size="small" />
                    <Spacer size={12} />
                </React.Fragment>
            ) : null}

            {startIcon && isValidElement(startIcon)
                ? React.Children.map(startIcon, child => {
                      return React.cloneElement(child);
                  })
                : null}
            {startIcon && isValidElement(startIcon) ? <Spacer size={iconPadding ? iconPadding : 0} /> : null}

            <S.StyledText data-size={size} data-color={color}>
                {children}
            </S.StyledText>

            {endIcon && isValidElement(endIcon) ? <Spacer size={iconPadding ? iconPadding : 0} /> : null}
            {endIcon && isValidElement(endIcon)
                ? React.Children.map(endIcon, child => {
                      return React.cloneElement(child);
                  })
                : null}
        </S.ButtonPressable>
    );
};

export default forwardRef(Button);
