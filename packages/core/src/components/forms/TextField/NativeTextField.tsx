import uniqueId from "lodash/uniqueId";
import * as React from "react";
import { TextInputProps } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { nativeTheme } from "../../../theme";
import { Spinner } from "../../feedback/Spinner/index.native";
import * as S from "./styled.native";
import { NativeTextFieldProps } from "./types";

const TextField = React.forwardRef<TextInputProps, NativeTextFieldProps>(
    (
        {
            name,
            label,
            placeholder,
            autoCompleteType,
            masked = false,
            disabled = false,
            type = "text",
            options,
            validationSuccess,
            validationError,
            validationMessage,
            children,
            controlStyle,
            inputStyle,
            validationStyle,
            value,
            icon,
            keyboardType,
            maskType = null,
            onBlur,
            onFocus,
            onChange,
            ...props
        },
        componentRef
    ) => {
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
            keyboardType,
            secureTextEntry,
        };

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
                            options={options}
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
                            ref={componentRef}
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
                            ref={componentRef}
                            value={value ? value : uncontrolledValue}
                        />
                    )}

                    {icon === "loadingSpinner" ? (
                        <S.IconWrapper>
                            <Spinner size={18} color={nativeTheme.colors.darkTint} />
                        </S.IconWrapper>
                    ) : null}
                </S.InputWrapper>
                <S.InputValidationContainer>
                    {validationMessage ? (
                        <React.Fragment>
                            <Icon name="error" color={nativeTheme.colors.danger} size={14} />
                            <S.InputValidationMessage>{validationMessage}</S.InputValidationMessage>
                        </React.Fragment>
                    ) : null}
                </S.InputValidationContainer>
            </S.MainWrapper>
        );
    }
);

export default TextField;
