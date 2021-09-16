import * as React from "react";
import { WebButtonProps } from "./types";
import * as S from "./styled";
import { nativeTheme } from "../../../theme";

import { Spinner } from "../../feedback/Spinner";
import Spacer from "../../layout/Spacer";

const Button = React.forwardRef<HTMLButtonElement, WebButtonProps>(
    (
        {
            disabled = false,
            textColor = "primaryContrast",
            fontFace = "primary",
            fontWeight = "bold",
            fontSize,
            backgroundColor = "primary",
            borderColor,
            focusColor,
            loading = false,
            size = "large",
            startIcon,
            endIcon,
            iconPadding,
            spinnerColor = nativeTheme.colors.primaryContrast,
            spinnerSize = 12,
            children,
            ...props
        },
        componentRef
    ) => {
        return (
            <S.ButtonWrapper
                {...props}
                data-backgroundcolor={backgroundColor}
                data-fontface={fontFace}
                data-textcolor={textColor}
                data-fontweight={fontWeight}
                data-fontsize={fontSize}
                data-bordercolor={borderColor}
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

export default React.memo(Button);
