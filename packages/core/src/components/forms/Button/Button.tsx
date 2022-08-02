import * as React from "react";
import { Spinner } from "../../feedback/Spinner";
import Spacer from "../../layout/Spacer";
import * as S from "./styled";
import { ButtonProps } from "./types";

export const Button = React.memo<ButtonProps>(
    ({
        backgroundColor = "primary",
        borderColor,
        borderPosition = "all",
        borderRadius = "md",
        borderType = "default",
        children,
        disabled = false,
        endIcon,
        fluid = true,
        focusColor,
        fontFace = "primary",
        fontSize = "xs",
        fontWeight = "bold",
        iconPadding,
        loading = false,
        padded = true,
        size = "large",
        spinnerColor = "primaryContrast",
        spinnerSize = "xs",
        startIcon,
        textColor = "primaryContrast",
        onClick,
        onLongPress,
        onPress,
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
                disabled={disabled || loading}
                padded={padded}
                fluid={fluid}
            >
                {startIcon && React.isValidElement(startIcon) ? startIcon : null}

                {startIcon && React.isValidElement(startIcon) ? (
                    <Spacer size={iconPadding ? iconPadding : 0} axis={"horizontal"} />
                ) : null}

                {children}

                {endIcon && React.isValidElement(endIcon) ? (
                    <Spacer size={iconPadding ? iconPadding : 0} axis={"horizontal"} />
                ) : null}

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
