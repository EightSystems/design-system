import React, { isValidElement } from "react";
import { Spinner } from "../../feedback/Spinner";
import Spacer from "../../layout/Spacer";
import * as S from "./styled.native";
import { ButtonProps } from "./types";

const Button = React.memo<ButtonProps>(
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
        spinnerSize = "sm",
        children,
        textAlign = "center",
        onPress,
        onClick,
        onLongPress,
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
                data-disabled={disabled || loading}
            >
                {startIcon && isValidElement(startIcon) ? startIcon : null}
                {startIcon && isValidElement(startIcon) ? <Spacer size={iconPadding ? iconPadding : 0} /> : null}

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

                {endIcon && isValidElement(endIcon) ? <Spacer size={iconPadding ? iconPadding : 0} /> : null}
                {endIcon && isValidElement(endIcon) ? endIcon : null}
            </S.ButtonPressable>
        );
    }
);

Button.displayName = "Button";
export default Button;
