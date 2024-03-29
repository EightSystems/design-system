import React, { isValidElement } from "react";
import { Spinner } from "../../feedback/Spinner";
import Spacer from "../../layout/Spacer";
import * as S from "./styled.native";
import { ButtonProps } from "./types";

const Button = React.memo<ButtonProps>(
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
        spinnerSize = "sm",
        startIcon,
        textAlign = "center",
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
            <S.ButtonPressable
                {...props}
                onPress={onClickBinding}
                onLongPress={onLongPress}
                onPressIn={onPressIn}
                onPressOut={onPressOut}
                data-backgroundcolor={backgroundColor}
                data-bordercolor={borderColor}
                data-borderradius={borderRadius}
                data-bordertype={borderType}
                data-borderposition={borderPosition}
                data-size={size}
                disabled={disabled || loading}
                data-disabled={disabled || loading}
                padded={padded}
                fluid={fluid}
            >
                {startIcon && isValidElement(startIcon) ? startIcon : null}
                {startIcon && isValidElement(startIcon) ? (
                    <Spacer size={iconPadding ? iconPadding : 0} axis={"horizontal"} />
                ) : null}

                {React.Children.map(children, childrenElement =>
                    typeof childrenElement === "string" ? (
                        <S.StyledText
                            data-size={size}
                            data-textalign={textAlign}
                            data-textcolor={textColor}
                            data-fontface={fontFace}
                            data-fontweight={fontWeight}
                            data-fontsize={fontSize}
                        >
                            {childrenElement}
                        </S.StyledText>
                    ) : (
                        childrenElement
                    )
                )}

                {loading ? (
                    <React.Fragment>
                        <Spinner color={spinnerColor} size={spinnerSize} />
                        <Spacer size={12} />
                    </React.Fragment>
                ) : null}

                {endIcon && isValidElement(endIcon) ? (
                    <Spacer size={iconPadding ? iconPadding : 0} axis={"horizontal"} />
                ) : null}
                {endIcon && isValidElement(endIcon) ? endIcon : null}
            </S.ButtonPressable>
        );
    }
);

Button.displayName = "Button";
export default Button;
