import * as React from "react";
import { nativeTheme } from "../../../theme";
import { Spinner } from "../../feedback/Spinner";
import Spacer from "../../layout/Spacer";
import * as S from "./styled";
import { WebButtonProps } from "./types";

export const Button = React.forwardRef<HTMLButtonElement, WebButtonProps>(
    (
        {
            disabled = false,
            textColor = "primaryContrast",
            fontFace = "primary",
            fontWeight = "bold",
            fontSize,
            backgroundColor = "primary",
            borderColor,
            borderRadius = "md",
            focusColor,
            loading = false,
            size = "large",
            startIcon,
            endIcon,
            iconPadding,
            spinnerColor = nativeTheme.colors.primaryContrast,
            spinnerSize = 12,
            children,
            onPress,
            onClick,
            ...props
        },
        componentRef
    ) => {
        const onClickBinding = onClick || onPress;

        return (
            <S.ButtonWrapper
                {...props}
                onClick={onClickBinding}
                data-backgroundcolor={backgroundColor}
                data-fontface={fontFace}
                data-textcolor={textColor}
                data-fontweight={fontWeight}
                data-fontsize={fontSize}
                data-bordercolor={borderColor}
                data-borderradius={borderRadius}
                data-size={size}
                data-disabled={disabled || loading}
                ref={componentRef}
            >
                {startIcon && React.isValidElement(startIcon)
                    ? React.Children.map(startIcon, child => {
                          return React.cloneElement(child);
                      })
                    : null}

                {startIcon && React.isValidElement(startIcon) ? <Spacer size={iconPadding ? iconPadding : 0} /> : null}

                {children}

                {endIcon && React.isValidElement(endIcon) ? <Spacer size={iconPadding ? iconPadding : 0} /> : null}

                {loading ? (
                    <S.SpinnerContainer>
                        <Spinner color={spinnerColor} size={spinnerSize} />
                    </S.SpinnerContainer>
                ) : null}

                {endIcon && React.isValidElement(endIcon)
                    ? React.Children.map(endIcon, child => {
                          return React.cloneElement(child);
                      })
                    : null}
            </S.ButtonWrapper>
        );
    }
);

export default Button;
