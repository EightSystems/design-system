import * as React from "react";
import { WebButtonProps } from "./types";
import * as S from "./styled";

import { ClipLoader } from "react-spinners";
import Spacer from "../../layout/Spacer";

const Button = React.forwardRef<HTMLButtonElement, WebButtonProps>(
    (
        {
            disabled = false,
            textColor = "primaryContrast",
            fontFace = "primary",
            fontWeight = "bold",
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
                data-bordercolor={borderColor}
                data-size={size}
                data-disabled={disabled || loading}
                ref={componentRef}
            >
                {loading ? (
                    <React.Fragment>
                        <ClipLoader color={spinnerColor} />
                        <Spacer size={12} />
                    </React.Fragment>
                ) : null}

                {startIcon && React.isValidElement(startIcon)
                    ? React.Children.map(startIcon, child => {
                          return React.cloneElement(child);
                      })
                    : null}

                {startIcon && React.isValidElement(startIcon) ? <Spacer size={iconPadding ? iconPadding : 0} /> : null}

                {children}

                {endIcon && React.isValidElement(endIcon) ? <Spacer size={iconPadding ? iconPadding : 0} /> : null}

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
