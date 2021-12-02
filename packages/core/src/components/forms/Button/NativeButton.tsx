import React, { isValidElement } from "react";
import { PressableProps } from "react-native";
import { Spinner } from "../../feedback/Spinner";
import Spacer from "../../layout/Spacer";
import * as S from "./styled.native";
import { NativeButtonProps } from "./types";

const Button = React.forwardRef<PressableProps, NativeButtonProps>(
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
            spinnerSize = "sm",
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

export default Button;
