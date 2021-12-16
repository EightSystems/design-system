import * as React from "react";
import { Spinner } from "../../feedback/Spinner";
import Spacer from "../../layout/Spacer";
import * as S from "./styled";
import { ButtonProps } from "./types";

export const Button = React.memo<ButtonProps>(
    ({
        disabled = false,
        textColor = "primaryContrast",
        fontFace = "primary",
        fontWeight = "bold",
        fontSize = "xs",
        backgroundColor = "primary",
        borderColor,
        borderRadius = "md",
        borderType = "default",
        borderPosition = "all",
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
        onLongPress,
        onPressIn,
        onPressOut,
        ...props
    }: ButtonProps) => {
        const onClickBinding = onPress || onClick;

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
                data-borderposition={borderPosition}
                data-size={size}
                data-disabled={disabled || loading}
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

Button.displayName = "Button";

export default Button;
