import React, { isValidElement } from "react";
import { ActivityIndicator, PressableProps } from "react-native";
import Spacer from "../../layout/Spacer/index.native";
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
            focusColor,
            loading = false,
            size = "large",
            startIcon,
            endIcon,
            iconPadding,
            spinnerColor,
            children,
            textAlign = "center",
            ...props
        },
        componentRef
    ) => {
        return (
            <S.ButtonPressable
                {...props}
                data-backgroundcolor={backgroundColor}
                data-bordercolor={borderColor}
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

                <S.StyledText
                    data-size={size}
                    data-textalign={textAlign}
                    data-textcolor={textColor}
                    data-fontface={fontFace}
                    data-fontsize={fontSize}
                >
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
    }
);

export default React.memo(Button);
