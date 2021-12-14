import * as React from "react";
import { TextInputMask } from "react-web-mask";
import { Spinner } from "../../feedback/Spinner";
import { Tooltip } from "../../feedback/Tooltip";
import { Icon } from "../../primitives/Icon";
import * as S from "./styled";
import { WebTextFieldProps } from "./types";

export const TextField = React.memo<WebTextFieldProps>(
    ({
        name,
        label,
        placeholder,
        disabled = false,
        required = false,
        masked,
        maskType = "only-numbers",
        maskOptions,
        validationSuccess,
        validationError,
        validationMessage,
        tooltipContent,
        tooltipPlacement,
        tooltipOffset,
        tooltipCrossOffset,
        icon,
        children,
        value,
        onBlur,
        onFocus,
        onChange,
        ...props
    }: WebTextFieldProps) => {
        const [uncontrolledValue, setUncontrolledValue] = React.useState<any>("");
        const [focused, setFocused] = React.useState<boolean>(false);

        const IconElement =
            icon && icon !== "loadingSpinner" ? (
                <S.IconWrapper>
                    <React.Fragment>
                        {icon === "info" ? (
                            <Icon icon="md-info" color={"primary"} size={"sm"} familyName={"Material"} />
                        ) : null}
                        {icon === "error" ? (
                            <Icon icon="md-error" color={"danger"} size={"sm"} familyName={"Material"} />
                        ) : null}
                        {icon === "success" ? (
                            <Icon icon="md-check-circle" color={"success"} size={"sm"} familyName={"Material"} />
                        ) : null}
                    </React.Fragment>
                </S.IconWrapper>
            ) : null;

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
                                options={maskOptions}
                                name={name}
                                aria-label={label}
                                aria-required={required}
                                placeholder={placeholder}
                                onFocus={e => {
                                    if (onFocus) {
                                        onFocus();
                                    }
                                    setFocused(true);
                                }}
                                onBlur={e => {
                                    if (onBlur) {
                                        onBlur();
                                    }
                                    setFocused(false);
                                }}
                                onChangeText={(e: string) => {
                                    if (onChange) {
                                        onChange(e);
                                    }
                                    setUncontrolledValue(e);
                                }}
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
                                    onFocus();
                                }
                                setFocused(true);
                            }}
                            onBlur={e => {
                                if (onBlur) {
                                    onBlur();
                                }
                                setFocused(false);
                            }}
                            onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => {
                                if (onChange) {
                                    onChange(target.value);
                                }
                                setUncontrolledValue(target.value);
                            }}
                            value={value ? value : uncontrolledValue}
                        />
                    )}

                    {icon && icon !== "loadingSpinner" ? (
                        tooltipContent ? (
                            <Tooltip
                                tooltipContent={tooltipContent}
                                placement={tooltipPlacement}
                                offset={tooltipOffset}
                                crossOffset={tooltipCrossOffset}
                            >
                                {IconElement}
                            </Tooltip>
                        ) : (
                            IconElement
                        )
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
                            <Icon icon="md-error" color={"danger"} size={"xxs"} familyName={"Material"} />
                            <S.InputValidationMessage>{validationMessage}</S.InputValidationMessage>
                        </React.Fragment>
                    ) : null}
                </S.InputValidationContainer>
            </S.MainWrapper>
        );
    }
);

TextField.displayName = "TextField";
export default TextField;
