import * as React from "react";
import * as S from "./styled.native";
import { TextInputProps } from "react-native";
import { NativeTextFieldProps } from "./types";
import { Spinner } from "../../feedback/Spinner/index.native";
import { nativeTheme } from "../../../theme";

import { uniqueId } from "lodash";
import Icon from "react-native-vector-icons/MaterialIcons";

const TextField = React.forwardRef<TextInputProps, NativeTextFieldProps>(
    (
        {
            name,
            label,
            placeholder,
            autoCompleteType,
            masked = false,
            disabled = false,
            type,
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

        const inputProps = {
            maxLength: props.maxLength ? props.maxLength : null,
            "data-disabled": disabled,
            nativeID: elementUniqueId,
            editable: !disabled,
            placeholder,
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
                            type={type}
                            options={options}
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
                                    onFocus(e);
                                }
                                setFocused(false);
                            }}
                            onChangeText={text => setUncontrolledValue(text)}
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
                                    onFocus(e);
                                }
                                setFocused(false);
                            }}
                            onChangeText={text => setUncontrolledValue(text)}
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

export default React.memo(TextField);
