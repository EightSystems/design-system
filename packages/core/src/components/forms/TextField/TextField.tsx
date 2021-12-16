import * as React from "react";
import { TextInputMask } from "react-web-mask";
import { Spinner } from "../../feedback/Spinner";
import { Tooltip } from "../../feedback/Tooltip";
import { Icon } from "../../primitives/Icon";
import * as S from "./styled";
import { TextFieldProps } from "./types";

export const TextField = React.memo<TextFieldProps>(
    ({
        name,
        label,
        placeholder,
        masked = false,
        disabled = false,
        type = "text",
        maskOptions,
        validationSuccess,
        validationError,
        validationMessage,
        children,
        value,
        icon,
        keyboardType,
        maskType = "only-numbers",
        tooltipContent,
        tooltipPlacement,
        tooltipOffset,
        tooltipCrossOffset,
        onBlur,
        onFocus,
        onChange,
        borderRadius = "sm",
        borderPosition = "all",
        borderType = "default",
        borderColor = "darkTint",
        required = false,
        maxLength,
    }: TextFieldProps) => {
        const [uncontrolledValue, setUncontrolledValue] = React.useState<any>("");
        const [focused, setFocused] = React.useState<boolean>(false);
        const borderFinalColor = validationError
            ? "danger"
            : validationSuccess
            ? "success"
            : focused
            ? "primary"
            : borderColor;

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
                    data-bordercolor={borderFinalColor}
                    data-borderradius={borderRadius}
                    data-bordertype={borderType}
                    data-borderposition={borderPosition}
                >
                    {children ? (
                        children
                    ) : masked ? (
                        <S.MaskedInputComponent data-borderradius={borderRadius} data-borderposition={borderPosition}>
                            <TextInputMask
                                maxLength={maxLength}
                                required={required}
                                disabled={disabled || null}
                                kind={maskType}
                                type={type}
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
                            data-borderradius={borderRadius}
                            data-borderposition={borderPosition}
                            maxLength={maxLength}
                            required={required}
                            type={type}
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
