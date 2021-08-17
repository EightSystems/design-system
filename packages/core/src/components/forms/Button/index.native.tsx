import React, { isValidElement } from "react";
import { ActivityIndicator, PressableProps } from "react-native";

import Spacer from "../../layout/Spacer/index.native";
import * as S from "./styled.native";

export type ButtonProps = PressableProps & {
    /** The color of the button background, or the button outline when the `variant` is "outline". */
    color?: string;

    /** Determinates the button variant the be used. */
    variant?: "solid" | "outline" | "ghost";

    /** When `true`, the button will be shown as disabled and with a spinner. */
    loading?: boolean;

    /** The size of the button. */
    size?: "small" | "medium" | "large";

    /** The startIcon to use in the Button. */
    startIcon?: React.ReactNode;

    /** The end icon to use in the Button. */
    endIcon?: React.ReactNode;

    /** The padding between the icon and the text. */
    iconPadding?: number;

    /** The color of the spinner. */
    spinnerColor?: any;

    /** When `true` the button is shown as disabled. */
    disabled?: boolean;
};

const Button = ({
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
}: ButtonProps) => {
    return (
        <S.ButtonPressable
            {...props}
            disabled={disabled || loading}
            data-color={color}
            data-variant={variant}
            data-size={size}
            data-disabled={disabled}
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

            <S.StyledText data-size={size} data-color={color} data-variant={variant}>
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

export default Button;
