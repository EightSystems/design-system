import uniqueId from "lodash/uniqueId";
import * as React from "react";
import { Spinner } from "../../feedback/Spinner";
import { Tooltip } from "../../feedback/Tooltip";
import { Icon } from "../../primitives/Icon";
import * as S from "./styled.native";
import { NativeTextFieldProps } from "./types";

export const TextField = React.memo<NativeTextFieldProps>(
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
        ...props
    }: NativeTextFieldProps) => {
        const accessibilityState = { disabled: disabled };
        const elementUniqueId = uniqueId(name);

        const [uncontrolledValue, setUncontrolledValue] = React.useState<any>("");
        const [focused, setFocused] = React.useState<boolean>(false);

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
            maxLength: props.maxLength ? props.maxLength : null,
            "data-disabled": disabled,
            nativeID: elementUniqueId,
            editable: !disabled,
            placeholder,
            placeholderTextColor: "rgba(0, 0, 0, 0.5)",
            keyboardType,
            secureTextEntry,
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
                    data-validationSuccess={validationSuccess}
                    data-validationError={validationError}
                    data-focused={focused}
                    data-icon={icon}
                >
                    {masked ? (
                        <S.MaskedInputComponent
                            options={maskOptions}
                            {...props}
                            {...inputProps}
                            type={maskType}
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
                            value={value ? value : uncontrolledValue}
                        />
                    ) : (
                        <S.InputComponent
                            {...props}
                            {...inputProps}
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
