import uniqueId from "lodash/uniqueId";
import React, { useEffect } from "react";
import { Spinner } from "../../feedback/Spinner";
import { Tooltip } from "../../feedback/Tooltip";
import { Icon } from "../../primitives/Icon";
import * as S from "./styled.native";
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
        multiline = false,
        numberOfLines = 1,
        maxLength,
    }: TextFieldProps) => {
        const accessibilityState = { disabled: disabled };
        const elementUniqueId = uniqueId(name);

        const [uncontrolledValue, setUncontrolledValue] = React.useState<string>("");
        const [focused, setFocused] = React.useState<boolean>(false);

        useEffect(() => {
            if (value != null) {
                setUncontrolledValue(value);
            }
        }, [value]);

        const borderFinalColor = validationError
            ? "danger"
            : validationSuccess
            ? "success"
            : focused
            ? "primary"
            : borderColor;

        let secureTextEntry = false;
        if (!keyboardType) {
            switch (type) {
                case "email":
                    keyboardType = "email-address";
                    break;
                case "password":
                    keyboardType = "default";
                    secureTextEntry = true;
                    break;
                case "number":
                    keyboardType = "number-pad";
                    break;
                case "tel":
                    keyboardType = "phone-pad";
                    break;
                default:
                    keyboardType = "default";
                    break;
            }
        }

        const inputProps = {
            maxLength: maxLength,
            "data-disabled": disabled,
            nativeID: elementUniqueId,
            editable: !disabled,
            placeholder,
            placeholderTextColor: "rgba(0, 0, 0, 0.5)",
            keyboardType,
            secureTextEntry,
            multiline,
            numberOfLines,
            textAlignVertical: multiline ? "top" : "auto",
        };

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
            <S.MainWrapper accessible accessibilityLabel={label} accessibilityState={accessibilityState}>
                <S.InputLabel data-focused={focused}>{label}</S.InputLabel>
                <S.InputWrapper
                    data-icon={icon}
                    data-bordercolor={borderFinalColor}
                    data-borderradius={borderRadius}
                    data-bordertype={borderType}
                    data-borderposition={borderPosition}
                >
                    {masked ? (
                        <S.MaskedInputComponent
                            options={maskOptions}
                            {...inputProps}
                            type={maskType}
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
                            onChangeText={e => {
                                if (onChange) {
                                    onChange(e);
                                }
                                setUncontrolledValue(e);
                            }}
                            value={value ? value : uncontrolledValue}
                        />
                    ) : (
                        <S.InputComponent
                            {...inputProps}
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
                            onChangeText={e => {
                                if (onChange) {
                                    onChange(e);
                                }
                                setUncontrolledValue(e);
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
