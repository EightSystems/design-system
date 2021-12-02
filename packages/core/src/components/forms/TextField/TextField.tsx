import * as React from "react";
import { MdCheck, MdError, MdInfo } from "react-icons/md";
import { TextInputMask } from "react-web-mask";
import { Spinner } from "../../feedback/Spinner";
import { Tooltip } from "../../feedback/Tooltip";
import * as S from "./styled";
import { WebTextFieldProps } from "./types";

const TextField = React.forwardRef<HTMLInputElement, WebTextFieldProps>(
    (
        {
            name,
            label,
            placeholder,
            disabled = false,
            required = false,
            masked,
            maskType = "only-numbers",
            options,
            validationSuccess,
            validationError,
            validationMessage,
            tooltipContent,
            tooltipPlacement,
            tooltipOffset,
            tooltipCrossOffset,
            tooltipClass,
            icon,
            children,
            value,
            onBlur,
            onFocus,
            onChange,
            ...props
        },
        componentRef
    ) => {
        const [uncontrolledValue, setUncontrolledValue] = React.useState<any>("");
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
                    ) : masked ? (
                        <S.MaskedInputComponent>
                            <TextInputMask
                                {...props}
                                disabled={disabled || null}
                                kind={maskType}
                                options={options}
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
                                onChangeText={e => {
                                    if (onChange) {
                                        onChange(e);
                                    }
                                    setUncontrolledValue(e);
                                }}
                                ref={componentRef}
                                value={value ? value : uncontrolledValue}
                            />
                        </S.MaskedInputComponent>
                    ) : (
                        <S.InputComponent
                            {...props}
                            name={name}
                            aria-label={label}
                            aria-required={required}
                            placeholder={placeholder}
                            disabled={disabled}
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
                            onChange={e => {
                                if (onChange) {
                                    onChange(e);
                                }
                                setUncontrolledValue(e);
                            }}
                            ref={componentRef}
                            value={value ? value : uncontrolledValue}
                        />
                    )}
                    {icon && tooltipContent ? (
                        <Tooltip
                            tooltipContent={tooltipContent}
                            placement={tooltipPlacement}
                            offset={tooltipOffset}
                            crossOffset={tooltipCrossOffset}
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
                            <Spinner size={"sm"} color={"darkTint"} />
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

export default TextField;
