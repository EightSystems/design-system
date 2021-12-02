import React, { isValidElement } from "react";
import { ActivityIndicator, PressableProps } from "react-native";
import Spacer from "../../layout/Spacer";
import * as S from "./styled.native";
import { NativeButtonProps } from "./types";

const Button = React.forwardRef<PressableProps, NativeButtonProps>(
    (
        {
            disabled = false,
            textColor = "primaryContrast",
            fontFace = "primaryBold",
            fontSize,
            backgroundColor = "primary",
            borderColor,
            borderRadius = "md",
            borderType = "default",
            focusColor,
            loading = false,
            size = "large",
            startIcon,
            endIcon,
            iconPadding,
            spinnerColor,
            children,
            textAlign = "center",
            onPress,
            onClick,
            ...props
        },
        componentRef
    ) => {
        const onClickBinding = onClick || onPress;

        return (
            <S.ButtonPressable
                {...props}
                onPress={onClickBinding}
                data-backgroundcolor={backgroundColor}
                data-bordercolor={borderColor}
                data-borderradius={borderRadius}
                data-bordertype={borderType}
                data-size={size}
                data-disabled={disabled || loading}
                ref={componentRef}
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

                {typeof children === "string" ? (
                    <S.StyledText
                        data-size={size}
                        data-textalign={textAlign}
                        data-textcolor={textColor}
                        data-fontface={fontFace}
                        data-fontsize={fontSize}
                    >
                        {children}
                    </S.StyledText>
                ) : (
                    children
                )}

                {endIcon && isValidElement(endIcon) ? <Spacer size={iconPadding ? iconPadding : 0} /> : null}
                {endIcon && isValidElement(endIcon)
                    ? React.Children.map(endIcon, child => {
                          return React.cloneElement(child);
                      })
                    : null}
            </S.ButtonPressable>
        );
    }
);

export default Button;
