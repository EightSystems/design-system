import uniqueId from "lodash/uniqueId";
import React, { useEffect } from "react";
import { TextInputMask } from "react-web-mask";
import { Spinner } from "../../feedback/Spinner";
import { Tooltip } from "../../feedback/Tooltip";
import { Icon } from "../../primitives/Icon";
import * as S from "./styled";
import { TextFieldProps } from "./types";

export const TextField = React.memo<TextFieldProps>(
    ({
        autoCorrect = true,
        autoFocus = false,
        autoCapitalize,
        autoComplete,
        autoCompleteType,
        blurOnSubmit,
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
        iconFamily,
        iconPosition = "end",
        keyboardType,
        maskType = "only-numbers",
        tooltipContent,
        tooltipPlacement,
        tooltipOffset,
        tooltipCrossOffset,
        onBlur,
        onFocus,
        onChange,
        onKeyPress,
        onSubmitEditing,
        borderRadius = "sm",
        borderPosition = "all",
        borderType = "default",
        borderColor = "darkTint",
        required = false,
        maxLength,
        multiline = false,
        numberOfLines = 1,
        returnKeyType,
    }: TextFieldProps) => {
        const elementUniqueId = uniqueId(`input-${name}`);

        const isEventComposing = nativeEvent => {
            return nativeEvent.isComposing || nativeEvent.keyCode === 229;
        };

        const handleKeyDown = e => {
            const hostNode = e.target;
            // Prevent key events bubbling (see #612)
            e.stopPropagation();

            const blurOnSubmitDefault = !multiline;
            const shouldBlurOnSubmit = blurOnSubmit == null ? blurOnSubmitDefault : blurOnSubmit;

            const nativeEvent = e.nativeEvent;
            const isComposing = isEventComposing(nativeEvent);

            if (onKeyPress) {
                onKeyPress(e);
            }

            if (
                e.key === "Enter" &&
                !e.shiftKey &&
                // Do not call submit if composition is occuring.
                !isComposing &&
                !e.isDefaultPrevented()
            ) {
                if ((blurOnSubmit || !multiline) && onSubmitEditing) {
                    // prevent "Enter" from inserting a newline or submitting a form
                    e.preventDefault();
                    nativeEvent.text = e.target.value;
                    onSubmitEditing(e);
                }
                if (shouldBlurOnSubmit && hostNode != null) {
                    hostNode.blur();
                }
            }
        };

        const [uncontrolledValue, setUncontrolledValue] = React.useState<string>("");
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
                <S.IconWrapper iconPosition={iconPosition}>
                    <React.Fragment>
                        {icon === "info" ? (
                            <Icon icon="md-info" color={"primary"} size={"sm"} familyName={"Material"} />
                        ) : icon === "error" ? (
                            <Icon icon="md-error" color={"danger"} size={"sm"} familyName={"Material"} />
                        ) : icon === "success" ? (
                            <Icon icon="md-check-circle" color={"success"} size={"sm"} familyName={"Material"} />
                        ) : (
                            <Icon icon={icon} color={"primary"} size={"sm"} familyName={iconFamily} />
                        )}
                    </React.Fragment>
                </S.IconWrapper>
            ) : null;

        useEffect(() => {
            if (value != null) {
                setUncontrolledValue(value);
            }
        }, [value]);

        let inputMode = "text";
        if (keyboardType) {
            switch (keyboardType) {
                case "email-address":
                    inputMode = "email";
                    break;
                case "number-pad":
                case "numeric":
                    inputMode = "numeric";
                    break;
                case "decimal-pad":
                    inputMode = "decimal";
                    break;
                case "phone-pad":
                    inputMode = "tel";
                    break;
                default:
                    type = "text";
                    break;
            }
        }

        return (
            <S.MainWrapper>
                <S.InputLabel data-disabled={disabled} data-focused={focused} htmlFor={elementUniqueId}>
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
                    {icon && icon !== "loadingSpinner" && iconPosition === "start" ? (
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

                    {children ? (
                        children
                    ) : masked ? (
                        <S.MaskedInputComponent data-borderradius={borderRadius} data-borderposition={borderPosition}>
                            <TextInputMask
                                maxLength={maxLength}
                                required={required}
                                autoFocus={autoFocus}
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
                                onChangeText={(e: string) => {
                                    if (onChange) {
                                        onChange(e);
                                    }
                                    setUncontrolledValue(e);
                                }}
                                onKeyDown={handleKeyDown}
                                value={value ? value : uncontrolledValue}
                                enterKeyHint={returnKeyType}
                                autoCorrect={autoCorrect ? "on" : "off"}
                                spellCheck={autoCorrect}
                                inputMode={inputMode as any}
                                id={elementUniqueId}
                                autoCapitalize={autoCapitalize}
                                autoComplete={autoComplete || autoCompleteType || "on"}
                            />
                        </S.MaskedInputComponent>
                    ) : multiline ? (
                        <S.TextAreaComponent
                            data-borderradius={borderRadius}
                            data-borderposition={borderPosition}
                            maxLength={maxLength}
                            required={required}
                            autoFocus={autoFocus}
                            name={name}
                            aria-label={label}
                            aria-required={required}
                            placeholder={placeholder}
                            autoCapitalize={autoCapitalize}
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
                            onKeyDown={handleKeyDown}
                            value={value ? value : uncontrolledValue}
                            rows={numberOfLines}
                            enterKeyHint={returnKeyType}
                            autoCorrect={autoCorrect ? "on" : "off"}
                            spellCheck={autoCorrect}
                            inputMode={inputMode as any}
                            id={elementUniqueId}
                            autoComplete={autoComplete || autoCompleteType || "on"}
                        />
                    ) : (
                        <S.InputComponent
                            data-borderradius={borderRadius}
                            data-borderposition={borderPosition}
                            maxLength={maxLength}
                            required={required}
                            autoFocus={autoFocus}
                            type={type}
                            name={name}
                            aria-label={label}
                            aria-required={required}
                            placeholder={placeholder}
                            disabled={disabled}
                            autoCapitalize={autoCapitalize}
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
                            onKeyDown={handleKeyDown}
                            value={value ? value : uncontrolledValue}
                            enterKeyHint={returnKeyType}
                            autoCorrect={autoCorrect ? "on" : "off"}
                            spellCheck={autoCorrect}
                            inputMode={inputMode as any}
                            id={elementUniqueId}
                            autoComplete={autoComplete || autoCompleteType || "on"}
                        />
                    )}

                    {icon && icon !== "loadingSpinner" && iconPosition === "end" ? (
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
