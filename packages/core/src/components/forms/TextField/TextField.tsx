import * as React from "react";
import * as S from "./styled";
import { WebTextFieldProps } from "./types";

import { MdInfo, MdCheck, MdError } from "react-icons/md";
import { IMaskMixin } from "react-imask";
import { Spinner } from "../../feedback/Spinner";
import Tooltip from "../../feedback/Tooltip";
import { theme } from "../../../theme";

const MaskedStyledInput = IMaskMixin(({ inputRef, ...props }) => <S.InputComponent {...props} ref={inputRef} />);

const TextField = React.forwardRef<HTMLInputElement, WebTextFieldProps>(
    (
        {
            name,
            label,
            placeholder,
            disabled,
            required,
            type,
            onBlur,
            onFocus,
            onChange,
            validationSuccess,
            validationError,
            validationMessage,
            tooltipContent,
            tooltipPlacement,
            tooltipOffset,
            tooltipClass,
            icon,
            children,
            value,
            ...props
        },
        componentRef
    ) => {
        const [focused, setFocused] = React.useState<boolean>(false);

        return (
            <S.MainWrapper>
                <S.InputLabel data-disabled={disabled} data-focused={focused} htmlFor={name}>
                    {label}
                </S.InputLabel>
                <S.InputWrapper
                    data-disabled={disabled}
                    data-focused={focused}
                    data-validation-success={validationSuccess}
                    data-validation-error={validationError}
                >
                    {children ? (
                        children
                    ) : (
                        <MaskedStyledInput
                            {...props}
                            name={name}
                            aria-label={label}
                            aria-required={required}
                            placeholder={placeholder}
                            onFocus={e => {
                                if (onFocus) {
                                    onFocus(e);
                                }
                                setFocused(true);
                            }}
                            onBlur={e => {
                                if (onBlur) {
                                    onBlur(e);
                                }
                                setFocused(false);
                            }}
                            onChange={onChange}
                            ref={componentRef}
                            value={value}
                        />
                    )}
                    {icon && tooltipContent ? (
                        <Tooltip
                            tooltipContent={tooltipContent}
                            placement={tooltipPlacement}
                            offset={tooltipOffset}
                            className={tooltipClass}
                        >
                            <S.IconWrapper>
                                <React.Fragment>
                                    {icon === "info" ? <MdInfo /> : null}
                                    {icon === "error" ? <MdError /> : null}
                                    {icon === "success" ? <MdCheck /> : null}
                                </React.Fragment>
                            </S.IconWrapper>
                        </Tooltip>
                    ) : null}
                    {icon === "loadingSpinner" ? (
                        <S.IconWrapper>
                            <Spinner size={18} color={theme.colors.darkTint} />
                        </S.IconWrapper>
                    ) : null}
                </S.InputWrapper>
                <S.InputValidationContainer>
                    {validationMessage ? (
                        <React.Fragment>
                            <MdInfo />
                            <S.InputValidationMessage>{validationMessage}</S.InputValidationMessage>
                        </React.Fragment>
                    ) : null}
                </S.InputValidationContainer>
            </S.MainWrapper>
        );
    }
);

export default React.memo(TextField);
