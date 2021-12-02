import * as React from "react";
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
            fontSize = "xs",
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
            spinnerColor = "primaryContrast",
            spinnerSize = "xs",
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
                data-bordertype={borderType}
                data-size={size}
                data-disabled={disabled || loading}
                ref={componentRef}
            >
                {startIcon && React.isValidElement(startIcon) ? startIcon : null}

                {startIcon && React.isValidElement(startIcon) ? <Spacer size={iconPadding ? iconPadding : 0} /> : null}

                {children}

                {endIcon && React.isValidElement(endIcon) ? <Spacer size={iconPadding ? iconPadding : 0} /> : null}

                {loading ? (
                    <S.SpinnerContainer>
                        <Spinner color={spinnerColor} size={spinnerSize} />
                    </S.SpinnerContainer>
                ) : null}

                {endIcon && React.isValidElement(endIcon) ? endIcon : null}
            </S.ButtonWrapper>
        );
    }
);

export default Button;
